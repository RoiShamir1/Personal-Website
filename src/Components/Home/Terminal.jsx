import React, { useEffect, useState } from "react";
import WindowBar from "../Common/WindowBar";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import "./Terminal.css";

const START_DELAY = 500;
const OUTPUT_DELAY = 280;
const NEXT_COMMAND_DELAY = 750;
const RESTART_DELAY = 4500;

const INITIAL_STEP = { line: 0, chars: 0, outputs: 0 };

const Prompt = () => (
  <span className="terminal-prompt">
    <span className="terminal-user">roi@devops:</span>
    <span className="terminal-path">~</span>
    <span className="terminal-sign">$</span>
  </span>
);

// Types each command, reveals its output, then loops. Every line is rendered up front
// (hidden until reached) so the terminal never changes size while animating.
const Terminal = ({ session, summary }) => {
  const reducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(INITIAL_STEP);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const { line, chars, outputs } = step;
    let delay;
    let next;

    if (line >= session.length) {
      delay = RESTART_DELAY;
      next = INITIAL_STEP;
    } else if (chars < session[line].command.length) {
      delay = chars === 0 ? START_DELAY : 35 + Math.random() * 55;
      next = { line, chars: chars + 1, outputs };
    } else if (outputs < session[line].output.length) {
      delay = OUTPUT_DELAY;
      next = { line, chars, outputs: outputs + 1 };
    } else {
      delay = NEXT_COMMAND_DELAY;
      next = { line: line + 1, chars: 0, outputs: 0 };
    }

    const timer = setTimeout(() => setStep(next), delay);
    return () => clearTimeout(timer);
  }, [step, session, reducedMotion]);

  const current = reducedMotion ? { line: session.length, chars: 0, outputs: 0 } : step;
  const finished = current.line >= session.length;

  return (
    <div className="terminal">
      <WindowBar title="roi@devops: ~" />
      <div className="terminal-body" aria-hidden="true">
        {session.map(({ command, output }, index) => {
          const isPast = index < current.line;
          const isCurrent = index === current.line;
          const typed = isPast ? command.length : isCurrent ? current.chars : 0;
          const shownOutputs = isPast ? output.length : isCurrent ? current.outputs : 0;

          return (
            <div key={command} className={`terminal-entry${isPast || isCurrent ? "" : " is-hidden"}`}>
              <div className="terminal-line">
                <Prompt />
                <span className="terminal-cmd">{command.slice(0, typed)}</span>
                {isCurrent && shownOutputs === 0 && <span className="terminal-cursor" />}
                <span className="terminal-ghost">{command.slice(typed)}</span>
              </div>
              {output.map(({ text, tone }, outputIndex) => (
                <div key={text} className={`terminal-output tone-${tone}${outputIndex < shownOutputs ? "" : " is-hidden"}`}>
                  {text}
                </div>
              ))}
            </div>
          );
        })}
        <div className={`terminal-line${finished ? "" : " is-hidden"}`}>
          <Prompt />
          <span className="terminal-cursor" />
        </div>
      </div>
      <p className="visually-hidden">{summary}</p>
    </div>
  );
};

export default Terminal;
