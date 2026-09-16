# Roi Shamir - Personal Website

My portfolio: DevOps, CI/CD and full-stack projects.
Live at [personal-website-jade-eight.vercel.app](https://personal-website-jade-eight.vercel.app).

## Stack

- React 18 (Create React App) and React Router
- React Bootstrap for layout primitives, with a custom CSS design system
- Canvas-based animated "infrastructure" background
- react-pdf for the in-page resume preview
- Hosted on Vercel: every push to `main` deploys to production

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
```

## Updating content

Almost all text on the site comes from [`src/data/profile.js`](src/data/profile.js):

| What                                  | Export                     |
| ------------------------------------- | -------------------------- |
| Name, role, tagline and social links  | `profile`, `socials`       |
| Home page terminal animation          | `terminalSession`          |
| "What I do" cards                     | `focusAreas`               |
| About page bio and quick facts        | `bio`, `yamlFacts`         |
| Skills (icons from `react-icons/si`)  | `skillGroups`              |
| Timeline                              | `journey`                  |
| Projects                              | `projects`, `earlierWork`  |

To update the CV, replace [`public/Roi_Shamir_CV.pdf`](public/Roi_Shamir_CV.pdf) and keep the file name. The Resume page and every
download button use it.

## Structure

```
src/
  data/profile.js       site content
  Components/
    Background/         animated DevOps background
    Home/ About/ Projects/ Resume/
    Common/             shared headings, social links, window chrome
  hooks/                page titles, reduced-motion preference
  style.css             design tokens and shared styles
```
