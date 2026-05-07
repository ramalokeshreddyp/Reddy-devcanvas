# Questionnaire Answers

## 1. Explain your choice of technology stack and styling library. What were the key factors in your decision?
I chose React + Vite because it gave me a fast local development loop and a simple component-based structure for building the portfolio quickly. Vite kept the project lightweight and easy to iterate on, while React made it straightforward to split the page into reusable sections like the hero, skills, projects, and contact blocks.

For styling, I used plain CSS instead of a utility framework. That let me shape the visual system directly with custom gradients, glass-like panels, and responsive layouts without adding another abstraction layer. It also kept the bundle smaller and made it easier to tune the final look to match the personal brand I wanted.

## 2. Which animation library did you choose and why? Describe a challenge you faced while implementing the parallax or on-scroll animations.
I selected Framer Motion because it integrates cleanly with React components and makes scroll-triggered reveals and motion variants easy to express. It was a good fit for the portfolio because I needed on-scroll animations, staggered card reveals, and a subtle parallax effect without writing a large amount of manual animation logic.

One challenge was keeping the animation effect smooth while still respecting mobile performance. I solved that by limiting motion to transform and opacity changes, using subtle offsets for the hero accents, and keeping the reveal animations lightweight so they would not feel distracting or janky on smaller screens.

## 3. Describe your process for translating your wireframe into the final visual design. How did you use UI component libraries to speed up development?
I translated the wireframe into a mobile-first page structure: sticky navigation at the top, a two-column hero on desktop, then stacked content sections for About, Skills, Projects, and Contact. From there I refined spacing, typography, and color contrast so the layout stayed readable across mobile, tablet, and desktop breakpoints.

I did not use a UI component library such as shadcn/ui or Aceternity UI in the final build. Instead, I built the sections directly with custom React components and CSS so I could keep the design consistent and tailored to my own brand. That approach gave me more control over the visual language while still letting me move quickly with reusable section and card patterns.

## 4. Beyond image optimization, what was the most significant performance improvement you made to meet the Lighthouse score requirements? How did you identify and fix the issue?
The biggest performance improvement was keeping the page dependency-light and motion-efficient. I avoided heavy UI libraries, used CSS gradients and vector icons instead of additional image assets, and made sure the animations only used transform and opacity. That kept the page smooth while reducing unnecessary rendering work.

I identified the main risks by checking the build output and validating the page with the browser and Lighthouse-style constraints in mind. When I saw that the layout and animation work could be kept simpler, I removed template leftovers, kept the CSS focused on a single custom system, and used responsive CSS patterns that did not require expensive layout changes during animation.

## 5. How did you leverage your chosen AI IDE in this project? Provide a specific example of a task where it significantly accelerated your workflow or helped you overcome a technical hurdle.
I used GitHub Copilot in VS Code to speed up the initial scaffold and then to help me replace the default template with the portfolio structure. It was especially useful for generating the repeated section patterns for the skills and projects cards, which let me focus on design decisions instead of rewriting boilerplate.

A specific example was building the scroll-reveal structure across multiple sections. I used the AI IDE to draft the Framer Motion variants and layout skeleton, then I reviewed and adjusted the code to match the content and responsiveness requirements. That saved time and helped me keep the implementation consistent across the page.
