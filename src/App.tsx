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

const profilePhotoUrl = 'https://github.com/ramalokeshreddyp.png'

const skillGroups = [
  {
    title: 'Languages',
    description: 'Core programming languages I use for problem solving and delivery.',
    icon: Code2,
    items: [
      { name: 'Java', level: '95%' },
      { name: 'C++', level: '91%' },
      { name: 'Python', level: '89%' },
    ],
  },
  {
    title: 'Web Stack',
    description: 'Frontend and backend tools used to build polished full-stack apps.',
    icon: BriefcaseBusiness,
    items: [
      { name: 'React', level: '96%' },
      { name: 'Node.js', level: '90%' },
      { name: 'Express / MongoDB', level: '88%' },
    ],
  },
  {
    title: 'Data & Tools',
    description: 'Analytics and workflow tools I use to make decisions visible.',
    icon: Palette,
    items: [
      { name: 'Pandas / NumPy', level: '87%' },
      { name: 'Power BI', level: '84%' },
      { name: 'Git / Docker', level: '89%' },
    ],
  },
]

const projects = [
  {
    name: 'Equilibrium Ledger Core',
    summary:
      'A high-integrity financial engine centered on double-entry bookkeeping, ACID-style consistency, and audit-friendly transaction handling.',
    stack: ['TypeScript', 'Node.js', 'Docker', 'In-memory DB'],
    repo: 'https://github.com/ramalokeshreddyp/Financial-Ledger-API-with-Double-Entry-Bookkeeping',
    demo: 'https://financial-ledger-api-with-double-entry.onrender.com/',
  },
  {
    name: 'FatePick',
    summary:
      'A professional randomization app that handles fair team formation, bulk input, and export workflows with a polished interface.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/ramalokeshreddyp/fatepick',
    demo: 'https://fatepick.vercel.app/',
  },
  {
    name: 'Code to Win',
    summary:
      'A unified coding dashboard that aggregates competitive-programming profiles and organizes achievements across platforms.',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL'],
    repo: 'https://github.com/ramalokeshreddyp/code_to_win',
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
    { value: '9.36', label: 'BTech CGPA at Aditya University' },
    { value: '1912', label: 'LeetCode rating, Knight rank' },
    { value: '2', label: 'Internships completed' },
    { value: '500+', label: 'Problems solved across platforms' },
  ]

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Rama Lokesh Reddy home">
          <span className="brand-mark">LR</span>
          <span>
            Rama Lokesh Reddy
            <small>Competitive Programmer • Full-Stack Developer</small>
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
              Open to work | Competitive Programmer | Full-Stack Developer | Data Analyst
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              I build high-signal web experiences with code, clarity, and motion.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              I’m Rama Lokesh Reddy Penumallu, a BTech CSE student at Aditya University
              focused on full-stack development, data analysis, and competitive
              programming. I like turning complex ideas into polished interfaces that are
              easy to scan, easy to use, and built to last.
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
            <div className="avatar-card" aria-label="Rama Lokesh Reddy avatar illustration">
              <div className="avatar-orbit" />
              <img
                className="profile-photo avatar-photo"
                src={profilePhotoUrl}
                alt="Rama Lokesh Reddy profile photo"
                width="420"
                height="420"
              />
            </div>

            <div className="avatar-tag">BTech CSE • Aditya University</div>

            <div className="panel-list">
              <div>
                <BriefcaseBusiness size={18} />
                <span>MERN stack developer trainee at AIM Technologies</span>
              </div>
              <div>
                <PanelsTopLeft size={18} />
                <span>Data analyst intern with Python, SQL, Excel, and Power BI</span>
              </div>
              <div>
                <Bot size={18} />
                <span>Class representative and competitive programmer</span>
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
            <h2>Engineering-minded, design-aware, and always optimizing for impact.</h2>
          </div>

          <div className="about-grid">
            <div className="about-avatar">
              <div className="about-avatar__ring" />
              <img
                className="profile-photo about-avatar__photo"
                src={profilePhotoUrl}
                alt="Rama Lokesh Reddy profile photo"
                loading="lazy"
                width="360"
                height="360"
              />
            </div>

            <div className="about-copy">
              <p>
                I’m a Computer Science and Engineering student at Aditya University with
                a strong interest in building scalable web apps, solving algorithmic
                problems, and turning data into useful decisions.
              </p>
              <p>
                My recent work spans MERN stack development, dashboards, and frontend UI
                systems. I enjoy combining structure, performance, and visual polish so
                the final product feels intentional.
              </p>
              <p>
                Outside the browser, I’m usually practicing DSA, reviewing system design
                concepts, or iterating on analytics and automation ideas.
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
            <h2>Languages, frameworks, and tools I use across web and analytics work.</h2>
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
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.45, ease: 'easeOut' }}
                          style={{ width: skill.level }}
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
            <h2>Featured work across full-stack development, UI polish, and dashboards.</h2>
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
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Open demo
                  </a>
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
            <h2>Reach out for internships, collaboration, or project discussions.</h2>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href="mailto:rlpreddy565@gmail.com">
              <Mail size={18} />
              <span>rlpreddy565@gmail.com</span>
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
              href="https://www.linkedin.com/in/rama-lokesh-reddy/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              className="contact-card"
              href="https://prlr-profile.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={18} />
              <span>Live Portfolio</span>
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>Built by Rama Lokesh Reddy Penumallu with React, Vite, and Framer Motion.</p>
        <a href="#hero">Back to top</a>
      </footer>
    </div>
  )
}

export default App
