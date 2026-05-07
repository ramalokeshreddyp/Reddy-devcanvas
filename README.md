# Rama Lokesh Reddy Penumallu Portfolio

<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=Personal%20Portfolio&fontSize=44&fontColor=fff&animation=twinkling&fontAlignY=35&desc=React%20%2B%20Vite%20%7C%20Framer%20Motion%20%7C%20Responsive%20UI&descAlignY=58&descAlign=50&descSize=18" alt="Portfolio banner" />
</p>

## Overview

This repository contains a responsive, animated personal portfolio website built from scratch to showcase projects, skills, background, and contact information in a polished, modern layout. The site is intentionally lightweight, visually expressive, and optimized for fast iteration with clean component-based structure.

Live site: https://prlr-profile.vercel.app/

## Tech Stack

- React 19
- Vite 8
- TypeScript 6
- Framer Motion
- Lucide React
- Plain CSS
- Google Fonts

## Highlights

- Sticky responsive navigation with a mobile menu
- Hero, About, Skills, Projects, Contact, and Footer sections
- One parallax-style hero accent driven by scroll progress
- Three+ on-scroll motion sequences using Framer Motion
- Reduced-motion support via a global CSS media query
- External project and profile links for real-world credibility

## Execution Flow

```mermaid
flowchart TD
	A[User opens the portfolio] --> B[React mounts App]
	B --> C[Sticky navigation and hero render]
	C --> D[Scroll enters animated sections]
	D --> E[Framer Motion reveals About, Skills, Projects, Contact]
	E --> F[User clicks project or contact links]
	F --> G[External pages open in a new tab or mail client]
```

## Component Flow

```mermaid
flowchart LR
	App[App.tsx] --> Header[Header / Navigation]
	App --> Hero[Hero + Parallax Accent]
	App --> About[About Section]
	App --> Skills[Skills Cards]
	App --> Projects[Project Cards]
	App --> Contact[Contact Links]
	App --> Footer[Footer]
```

## Code Structure

```text
.
├── README.md
├── architecture.md
├── projectdocumentation.md
├── answers.md
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── assets/
└── vite.config.ts
```

## Local Setup

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
git clone https://github.com/ramalokeshreddyp/Reddy-devcanvas.git
cd Reddy-devcanvas
npm install
```

### Run Locally

```bash
npm run dev
```

### Validate

```bash
npm run build
npm run lint
```

### Preview Production Build

```bash
npm run build
npm run preview
```

## Workflow Summary

1. Plan the section order and content.
2. Build the structure in React components.
3. Apply responsive styling and typography.
4. Add motion, parallax, and scroll reveals.
5. Validate build, lint, and responsive behavior.
6. Push to GitHub and deploy to a live host.

## Notes

- The site is frontend-only by design; there is no backend or database layer in this portfolio.
- All motion is constrained to transform and opacity for smoother performance.
- The design uses custom CSS rather than a UI component library so the visual language stays fully personal and consistent.
