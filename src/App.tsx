import { useRef, useState } from 'react'
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe,
  LayoutGrid,
  Linkedin,
  Mail,
  Menu,
  Palette,
  PanelsTopLeft,
  Sparkles,
  SquareArrowOutUpRight,
  Star,
  X,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that stay readable, responsive, and fast.',
    icon: Code2,
    items: [
      { name: 'React', level: '92%' },
      { name: 'TypeScript', level: '88%' },
      { name: 'CSS', level: '94%' },
    ],
  },
  {
    title: 'Motion',
    description: 'Meaningful animation systems with performance in mind.',
    icon: Sparkles,
    items: [
      { name: 'Framer Motion', level: '90%' },
      { name: 'Scroll UX', level: '84%' },
      { name: 'Parallax', level: '80%' },
    ],
  },
  {
    title: 'Product',
    description: 'Design-aware thinking that keeps interfaces polished.',
    icon: Palette,
    items: [
      { name: 'Design Systems', level: '86%' },
      { name: 'Accessibility', level: '91%' },
      { name: 'Performance', level: '87%' },
    ],
  },
]

const projects = [
  {
    name: 'DevCanvas Portfolio',
    summary:
      'A modern personal portfolio concept with layered gradients, scroll reveals, and a responsive content layout built to feel editorial and crisp.',
    stack: ['React', 'Vite', 'Framer Motion', 'CSS'],
    repo: 'https://github.com/ramalokeshreddyp/Reddy-devcanvas',
    demo: '#hero',
  },
  {
    name: 'Motion Notes Dashboard',
    summary:
      'A dashboard-style project that emphasizes information hierarchy, soft glass panels, and animated content entry to make dense data feel approachable.',
    stack: ['TypeScript', 'Responsive UI', 'Accessibility'],
    repo: 'https://github.com/ramalokeshreddyp/motion-notes-dashboard',
    demo: '#projects',
  },
  {
    name: 'Orbit Commerce Landing',
    summary:
      'A launch page built around storytelling sections, strong calls to action, and lightweight motion tuned to keep the page fast on mobile devices.',
    stack: ['UI Design', 'Parallax', 'Performance'],
    repo: 'https://github.com/ramalokeshreddyp/orbit-commerce-landing',
    demo: '#contact',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const orbYReverse = useTransform(scrollYProgress, [0, 1], [0, -120])

  const statItems = [
    { value: '5+', label: 'Years of frontend learning' },
    { value: '12', label: 'Design systems explored' },
    { value: '100%', label: 'Responsive-first mindset' },
  ]

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Lokesh Reddy home">
          <span className="brand-mark">LR</span>
          <span>
            Lokesh Reddy
            <small>Frontend Developer</small>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          Menu
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="hero" ref={heroRef}>
          <motion.div className="hero-ambient ambient-one" style={{ y: orbY }} />
          <motion.div className="hero-ambient ambient-two" style={{ y: orbYReverse }} />

          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Star size={16} />
              Available for frontend collaboration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              I build polished, animated portfolio experiences with a strong product feel.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              I’m Lokesh Reddy, a frontend developer focused on responsive interfaces,
              purposeful motion, and design systems that help ideas feel sharp from the
              first scroll.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
            >
              <a className="button button-primary" href="#projects">
                View My Work
                <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </motion.div>

            <div className="hero-stats">
              {statItems.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.aside
            className="hero-panel"
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            <div className="avatar-card" aria-label="Lokesh Reddy avatar illustration">
              <div className="avatar-orbit" />
              <div className="avatar-core">LR</div>
              <div className="avatar-tag">UI polish + motion</div>
            </div>

            <div className="panel-list">
              <div>
                <BriefcaseBusiness size={18} />
                <span>Building frontend systems with clean hierarchy</span>
              </div>
              <div>
                <PanelsTopLeft size={18} />
                <span>Animating sections with transform and opacity only</span>
              </div>
              <div>
                <Bot size={18} />
                <span>Turning design briefs into high-signal interfaces</span>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section
          className="content-section about-section"
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="section-heading">
            <p className="eyebrow">
              <Sparkles size={16} />
              About
            </p>
            <h2>A frontend craft that balances personality with structure.</h2>
          </div>

          <div className="about-grid">
            <div className="about-avatar">
              <div className="about-avatar__ring" />
              <div className="about-avatar__initials">LR</div>
            </div>

            <div className="about-copy">
              <p>
                I like building websites that feel calm to use but still have character.
                My work usually starts with layout, spacing, and typography, then grows
                into motion and interaction details that make the page feel deliberate.
              </p>
              <p>
                I’m currently focused on stronger design systems, better accessibility,
                and scroll-driven experiences that stay smooth across mobile, tablet, and
                desktop.
              </p>
              <p>
                The goal is simple: create interfaces that are easy to understand, easy
                to use, and memorable enough to stand out in a hiring review.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="content-section skills-section"
          id="skills"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-heading" variants={fadeUp}>
            <p className="eyebrow">
              <Code2 size={16} />
              Skills
            </p>
            <h2>Technologies and practices I use to keep the work sharp.</h2>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article className="skill-card" key={group.title} variants={fadeUp}>
                <div className="skill-card__header">
                  <group.icon size={20} />
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-bars">
                  {group.items.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-row__meta">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="skill-track" aria-hidden="true">
                        <motion.div
                          className="skill-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="content-section projects-section"
          id="projects"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="section-heading" variants={fadeUp}>
            <p className="eyebrow">
              <LayoutGrid size={16} />
              Projects
            </p>
            <h2>Selected concepts that show structure, motion, and clarity.</h2>
          </motion.div>

          <div className="project-grid">
            {projects.map((project) => (
              <motion.article className="project-card" key={project.name} variants={fadeUp}>
                <div className="project-card__top">
                  <span className="project-pill">Featured</span>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    GitHub <SquareArrowOutUpRight size={16} />
                  </a>
                </div>

                <h3>{project.name}</h3>
                <p>{project.summary}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    View repository
                  </a>
                  <a href={project.demo}>Open highlight</a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="content-section contact-section"
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-heading">
            <p className="eyebrow">
              <Globe size={16} />
              Contact
            </p>
            <h2>Reach out if you want a responsive interface with stronger motion.</h2>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href="mailto:lokesh.reddy@example.com">
              <Mail size={18} />
              <span>lokesh.reddy@example.com</span>
            </a>
            <a
              className="contact-card"
              href="https://github.com/ramalokeshreddyp"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              <span>GitHub Profile</span>
            </a>
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/lokesh-reddy/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>Built by Lokesh Reddy with React, Vite, and Framer Motion.</p>
        <a href="#hero">Back to top</a>
      </footer>
    </div>
  )
}

export default App
