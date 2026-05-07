# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Lokesh Reddy Portfolio

  This project is a responsive, animated personal portfolio built with React, Vite, TypeScript, and Framer Motion.

  ## Tech Stack

  - React
  - Vite
  - TypeScript
  - Framer Motion
  - Lucide React
  - Plain CSS

  ## Live Site

  Replace this placeholder with your deployed URL after publishing:

  - https://your-live-portfolio-url.example

  ## Local Development

  ```bash
  npm install
  npm run dev
  ```

  ## Project Notes

  - Includes a sticky responsive navigation bar.
  - Contains Hero, About, Skills, Projects, Contact, and Footer sections.
  - Uses on-scroll motion, a parallax hero accent, and reduced-motion support.
import reactDom from 'eslint-plugin-react-dom'
