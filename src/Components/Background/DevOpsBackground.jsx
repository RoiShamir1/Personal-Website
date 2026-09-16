import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import "./DevOpsBackground.css";

// Site-wide backdrop: an infrastructure map of services wired together along the grid,
// with packets of traffic hopping between them like builds moving through a pipeline.

const GRID = 48; // must match background-size in DevOpsBackground.css
const TRAIL_DOTS = 9;
const TRAIL_SPACING = 3;
const MAX_HOPS = 5;
const SPAWN_INTERVAL = 320;
const LABELS = [
  "kubernetes",
  "argocd",
  "terraform",
  "ec2",
  "ecs",
  "lambda",
  "cloudwatch",
  "grafana",
  "coralogix",
  "jenkins",
  "docker",
  "mongodb",
  "api",
  "worker",
];
const PACKET_COLORS = ["34, 211, 238", "34, 211, 238", "52, 211, 153", "52, 211, 153", "129, 140, 248"];

const random = (min, max) => min + Math.random() * (max - min);
const pick = (items) => items[Math.floor(Math.random() * items.length)];

function buildGraph(width, height) {
  const small = width < 640;
  const cell = GRID * (small ? 3 : 4);
  const nodes = [];
  const taken = new Set();

  for (let row = 0; row < Math.ceil(height / cell); row += 1) {
    for (let col = 0; col < Math.ceil(width / cell); col += 1) {
      if (Math.random() > 0.7) continue;
      // Snap to the CSS grid so connections run along its lines.
      const x = Math.round(((col + random(0.2, 0.8)) * cell) / GRID) * GRID;
      const y = Math.round(((row + random(0.2, 0.8)) * cell) / GRID) * GRID;
      if (taken.has(`${x},${y}`)) continue;
      taken.add(`${x},${y}`);
      nodes.push({ x, y, hub: Math.random() < 0.26, label: null, pulse: 0, edges: [] });
    }
  }

  // Wire each node to its two nearest neighbours with an L-shaped route.
  const edges = [];
  const linked = new Set();
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, dist: Math.abs(a.x - b.x) + Math.abs(a.y - b.y) }))
      .filter(({ j, dist }) => j !== i && dist <= cell * 2.2)
      .sort((p, q) => p.dist - q.dist)
      .slice(0, 2)
      .forEach(({ j, dist }) => {
        const key = i < j ? `${i}:${j}` : `${j}:${i}`;
        if (linked.has(key)) return;
        linked.add(key);
        const b = nodes[j];
        const corner = Math.random() < 0.5 ? { x: b.x, y: a.y } : { x: a.x, y: b.y };
        edges.push({ a: i, b: j, points: [a, corner, b], length: dist });
        a.edges.push(edges.length - 1);
        b.edges.push(edges.length - 1);
      });
  });

  const hubs = nodes.filter((node) => node.hub && node.edges.length > 0);
  if (!small) {
    const labels = [...LABELS].sort(() => Math.random() - 0.5);
    hubs.slice(0, labels.length).forEach((node, k) => {
      node.label = labels[k];
    });
  }

  return { nodes, edges, sources: hubs.length ? hubs : nodes.filter((node) => node.edges.length > 0) };
}

function pointOnEdge(edge, t, reverse) {
  const [start, corner, end] = reverse ? [edge.points[2], edge.points[1], edge.points[0]] : edge.points;
  const travelled = t * edge.length;
  const firstLeg = Math.abs(corner.x - start.x) + Math.abs(corner.y - start.y);
  if (travelled <= firstLeg) {
    const k = firstLeg === 0 ? 0 : travelled / firstLeg;
    return [start.x + (corner.x - start.x) * k, start.y + (corner.y - start.y) * k];
  }
  const secondLeg = edge.length - firstLeg;
  const k = secondLeg === 0 ? 1 : (travelled - firstLeg) / secondLeg;
  return [corner.x + (end.x - corner.x) * k, corner.y + (end.y - corner.y) * k];
}

function drawStaticLayer(ctx, graph, width, height) {
  ctx.clearRect(0, 0, width, height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(125, 211, 252, 0.15)";
  ctx.beginPath();
  graph.edges.forEach(({ points: [a, corner, b] }) => {
    ctx.moveTo(a.x + 0.5, a.y + 0.5);
    ctx.lineTo(corner.x + 0.5, corner.y + 0.5);
    ctx.lineTo(b.x + 0.5, b.y + 0.5);
  });
  ctx.stroke();

  ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
  graph.nodes.forEach((node) => {
    const x = node.x + 0.5;
    const y = node.y + 0.5;
    if (!node.hub) {
      ctx.fillStyle = "rgba(148, 197, 255, 0.42)";
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.fillStyle = "rgba(6, 13, 25, 0.95)";
    ctx.strokeStyle = "rgba(34, 211, 238, 0.55)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x - 7, y - 7, 14, 14, 3);
    else ctx.rect(x - 7, y - 7, 14, 14);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(34, 211, 238, 0.8)";
    ctx.fillRect(x - 2, y - 2, 4, 4);
    if (node.label) {
      ctx.fillStyle = "rgba(148, 179, 255, 0.36)";
      ctx.fillText(node.label, x + 13, y + 4);
    }
  });
}

const DevOpsBackground = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const layer = document.createElement("canvas");
    const layerCtx = layer.getContext("2d");

    let width = 0;
    let height = 0;
    let graph = { nodes: [], edges: [], sources: [] };
    let packets = [];
    let frameId = 0;
    let resizeTimer = 0;
    let lastTime = 0;
    let lastFrame = 0;
    let lastSpawn = 0;
    let disposed = false;

    const blit = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(layer, 0, 0, width, height);
    };

    const setup = () => {
      width = wrapper.clientWidth;
      height = wrapper.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      [canvas, layer].forEach((c) => {
        c.width = Math.round(width * dpr);
        c.height = Math.round(height * dpr);
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      graph = buildGraph(width, height);
      packets = [];
      drawStaticLayer(layerCtx, graph, width, height);
      blit();
    };

    const launch = (node, cameFrom = -1, hops = 0) => {
      const options = node.edges.filter((index) => index !== cameFrom);
      if (options.length === 0) return;
      const edgeIndex = pick(options);
      const edge = graph.edges[edgeIndex];
      packets.push({
        edge,
        edgeIndex,
        reverse: graph.nodes[edge.b] === node,
        t: 0,
        speed: random(70, 130),
        hops,
        color: pick(PACKET_COLORS),
      });
    };

    const tick = (now) => {
      frameId = requestAnimationFrame(tick);
      // Phones get 30fps to save battery; the motion is slow enough that it looks the same.
      if (width < 768 && now - lastFrame < 32) return;
      lastFrame = now;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const maxPackets = Math.max(6, Math.min(28, Math.round(graph.nodes.length * 0.4)));
      if (now - lastSpawn > SPAWN_INTERVAL && packets.length < maxPackets && graph.sources.length > 0) {
        launch(pick(graph.sources));
        lastSpawn = now;
      }

      blit();

      for (let i = packets.length - 1; i >= 0; i -= 1) {
        const packet = packets[i];
        packet.t += (packet.speed * dt) / packet.edge.length;

        if (packet.t >= 1) {
          const target = graph.nodes[packet.reverse ? packet.edge.a : packet.edge.b];
          target.pulse = 1;
          packets.splice(i, 1);
          if (packet.hops < MAX_HOPS && Math.random() < 0.65) launch(target, packet.edgeIndex, packet.hops + 1);
          continue;
        }

        for (let k = TRAIL_DOTS; k >= 0; k -= 1) {
          const t = packet.t - (k * TRAIL_SPACING) / packet.edge.length;
          if (t < 0) continue;
          const [x, y] = pointOnEdge(packet.edge, t, packet.reverse);
          const fade = 1 - k / (TRAIL_DOTS + 1);
          ctx.fillStyle = `rgba(${packet.color}, ${0.85 * fade})`;
          ctx.beginPath();
          ctx.arc(x + 0.5, y + 0.5, k === 0 ? 2.4 : 1.7 * fade + 0.3, 0, Math.PI * 2);
          ctx.fill();
        }

        const [headX, headY] = pointOnEdge(packet.edge, packet.t, packet.reverse);
        ctx.fillStyle = `rgba(${packet.color}, 0.16)`;
        ctx.beginPath();
        ctx.arc(headX + 0.5, headY + 0.5, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1;
      graph.nodes.forEach((node) => {
        if (node.pulse <= 0) return;
        node.pulse = Math.max(0, node.pulse - dt * 1.4);
        ctx.strokeStyle = `rgba(52, 211, 153, ${node.pulse * 0.55})`;
        ctx.beginPath();
        ctx.arc(node.x + 0.5, node.y + 0.5, (node.hub ? 9 : 4) + (1 - node.pulse) * 12, 0, Math.PI * 2);
        ctx.stroke();
      });
    };

    setup();
    if (!reducedMotion) {
      lastTime = performance.now();
      frameId = requestAnimationFrame(tick);
    }

    // Labels are drawn with a web font; repaint once it has loaded.
    document.fonts?.ready.then(() => {
      if (disposed) return;
      drawStaticLayer(layerCtx, graph, width, height);
      blit();
    });

    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (wrapper.clientWidth !== width || wrapper.clientHeight !== height) setup();
      }, 150);
    });
    observer.observe(wrapper);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
      observer.disconnect();
    };
  }, [reducedMotion]);

  return (
    <div className="devops-bg" ref={wrapperRef} aria-hidden="true">
      <div className="devops-bg__grid" />
      <canvas className="devops-bg__canvas" ref={canvasRef} />
      <div className="devops-bg__vignette" />
    </div>
  );
};

export default DevOpsBackground;
