import { useEffect, useRef, useState } from "react"

const linkedIn =
  "https://www.linkedin.com/in/pilli-dharma-teja-hemanth-vidya-deep-22981031a/"
const github = "https://github.com/phemanth-77"

type Project = {
  number: string
  title: string
  category: string
  description: string
  tags: string[]
  theme: string
  art: string
  problem: string
  approach: string
  value: string
  links: { label: string url: string }[]
}

type ProjectFilter = "all" | "product" | "interactive"

const projects: Project[] = [
  {
    number: "01",
    title: "PDFToolkit",
    category: "DIGITAL PRODUCT",
    description:
      "A privacy-focused digital product that makes everyday PDF workflows simpler.",
    tags: ["Privacy", "Product", "UX"],
    theme: "mint",
    art: "pdf",
    problem:
      "Common PDF tasks often require switching between tools or trusting unfamiliar services with documents.",
    approach:
      "Create a more straightforward toolkit centered on useful workflows and a privacy-conscious experience.",
    value:
      "Less friction for people working with documents, with simplicity and trust as product priorities.",
    links: [
      { label: "Live demo", url: "https://pdf-toolkit-pdh.vercel.app" },
      {
        label: "View on GitHub",
        url: "https://github.com/phemanth-77/pdf-toolkit",
      },
    ],
  },
  {
    number: "02",
    title: "Ludo Zone",
    category: "WEB GAME",
    description:
      "An online multiplayer Ludo game built for the web with real-time gameplay.",
    tags: ["Game development", "Multiplayer", "Web experience"],
    theme: "ludo",
    art: "ludo",
    problem:
      "Bring the familiar energy of a multiplayer board game into a browser-based experience.",
    approach:
      "Build an interactive Ludo experience with player selection and real-time gameplay.",
    value: "An approachable way for friends to play together online.",
    links: [{ label: "Live demo", url: "https://ludo-zone.vercel.app" }],
  },
  {
    number: "03",
    title: "F1 Race Game",
    category: "RACING GAME / INTERACTIVE EXPERIENCE",
    description:
      "A fast-paced browser racing game built around sharp turns, quick reactions and the thrill of the track.",
    tags: ["F1 racing", "Game development", "Browser game"],
    theme: "f1",
    art: "f1",
    problem:
      "Bring the excitement of Formula racing to a quick, accessible browser experience.",
    approach:
      "Create a responsive racing game that rewards timing, quick reactions and precise control.",
    value:
      "An easy-to-play racing experience that captures the energy of F1 in the browser.",
    links: [
      {
        label: "Live demo",
        url: "https://pixel-perfect-play-885.vercel.app",
      },
      {
        label: "View on GitHub",
        url: "https://github.com/phemanth-77/pixel-perfect-play-885",
      },
    ],
  },
]

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Method", href: "#method" },
  { label: "Case files", href: "#work" },
  { label: "Direction", href: "#direction" },
]

const principles = [
  {
    letter: "H",
    title: "Human insight",
    copy: "Understand the people, the context and the real need before shaping an answer.",
  },
  {
    letter: "V",
    title: "Viable value",
    copy: "Connect the idea to business value, practical constraints and a reason to exist.",
  },
  {
    letter: "D",
    title: "Digital systems",
    copy: "Use technology purposefully to make the solution useful, scalable and clear.",
  },
]

const workSteps = [
  ["01", "Understand", "Get close to the people, context and real problem."],
  ["02", "Frame", "Turn ambiguity into a question the team can act on."],
  ["03", "Align", "Connect perspectives around a shared direction."],
  ["04", "Build", "Shape the clearest practical path forward."],
  ["05", "Learn", "Review what changed, adapt and improve the next move."],
]

const careerLanes = [
  [
    "01",
    "Product & projects",
    "Planning, coordination and experiences that make ideas useful.",
  ],
  [
    "02",
    "Strategy & operations",
    "Clear decisions, stronger systems and thoughtful execution.",
  ],
  [
    "03",
    "Business & technology analysis",
    "Translating needs between business and technical teams.",
  ],
]

const projectFilters: { label: string value: ProjectFilter }[] = [
  { label: "All case files", value: "all" },
  { label: "Product", value: "product" },
  { label: "Interactive", value: "interactive" },
]

function projectMatchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "all") return true
  if (filter === "product") return project.art === "pdf"
  return ["ludo", "f1"].includes(project.art)
}

function Arrow({
  direction = "diagonal",
}: {
  direction?: "diagonal" | "right" | "down"
}) {
  const arrows = { diagonal: "↗", right: "→", down: "↓" }
  return <span aria-hidden="true">{arrows[direction]}</span>
}

function ProjectArt({ type }: { type: string }) {
  if (type === "ludo") {
    return (
      <div className="art-ludo">
        <img
          src={`${import.meta.env.BASE_URL}images/ludo-zone.png`}
          alt="Ludo Zone game start screen with player selection"
          loading="lazy"
        />
      </div>
    )
  }

  if (type === "f1") {
    return (
      <div className="art-f1" aria-hidden="true">
        <div className="f1-skyline" />
        <div className="f1-hud">
          <span>APEX CIRCUIT / 01</span>
          <strong>F1</strong>
        </div>
        <svg
          className="f1-track"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="track-shadow"
            d="M 153 281 C 97 244 94 164 151 126 C 218 81 325 128 417 139 C 513 151 559 84 638 105 C 719 127 713 194 660 222 C 617 246 565 220 529 263 C 479 323 401 310 321 281 C 248 254 197 311 153 281 Z"
          />
          <path
            className="track-road"
            d="M 153 281 C 97 244 94 164 151 126 C 218 81 325 128 417 139 C 513 151 559 84 638 105 C 719 127 713 194 660 222 C 617 246 565 220 529 263 C 479 323 401 310 321 281 C 248 254 197 311 153 281 Z"
          />
          <path
            className="track-line"
            d="M 153 281 C 97 244 94 164 151 126 C 218 81 325 128 417 139 C 513 151 559 84 638 105 C 719 127 713 194 660 222 C 617 246 565 220 529 263 C 479 323 401 310 321 281 C 248 254 197 311 153 281 Z"
          />
        </svg>
        <div className="f1-car">
          <span className="f1-wheel wheel-front" />
          <span className="f1-wheel wheel-back" />
          <span className="f1-car-body" />
          <span className="f1-cockpit" />
        </div>
        <div className="f1-lap">
          <span>LAP</span>
          <strong>01<span> / 03</span></strong>
        </div>
      </div>
    )
  }

  if (type === "future") {
    return (
      <div className="art-future" aria-hidden="true">
        <div className="future-orbit orbit-one" />
        <div className="future-orbit orbit-two" />
        <div className="future-center">
          <span>YOUR NEXT</span>
          <strong>chapter.</strong>
          <small>starts here ↗</small>
        </div>
        <span className="art-spark spark-one">✳</span>
        <span className="art-spark spark-two">✳</span>
      </div>
    )
  }

  if (type === "hotel") {
    return (
      <div className="art-hotel" aria-hidden="true">
        <div className="hotel-sun" />
        <div className="hotel-building">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hotel-arch">
          <span>
            STAY
            <br />
            SOMEWHERE
            <br />
            <i>meaningful.</i>
          </span>
        </div>
      </div>
    )
  }

  if (type === "pdf") {
    return (
      <div className="art-pdf" aria-hidden="true">
        <div className="pdf-app">
          <div className="pdf-app-bar">
            <div className="pdf-brand">
              <span>PDF</span>
              <strong>Toolkit</strong>
            </div>
            <span className="pdf-app-menu">•••</span>
          </div>
          <div className="pdf-app-body">
            <div className="pdf-workspace">
              <span className="pdf-workspace-label">YOUR WORKSPACE</span>
              <strong>
                PDFs, made
                <br />
                simple.
              </strong>
              <div className="pdf-tool-list">
                <div className="pdf-tool">
                  <span className="pdf-tool-icon">+</span>
                  <span>Merge files</span>
                  <i>↗</i>
                </div>
                <div className="pdf-tool">
                  <span className="pdf-tool-icon">↓</span>
                  <span>Compress</span>
                  <i>↗</i>
                </div>
                <div className="pdf-tool">
                  <span className="pdf-tool-icon">⇄</span>
                  <span>Convert PDF</span>
                  <i>↗</i>
                </div>
              </div>
            </div>
            <div className="pdf-file-preview">
              <div className="pdf-file-page">
                <span className="pdf-file-icon">PDF</span>
                <strong>Project<br />brief.pdf</strong>
                <i />
                <i />
                <i />
                <small>2.4 MB · 8 PAGES</small>
              </div>
              <span className="pdf-file-status"><i /> READY TO EDIT</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="art-restaurant" aria-hidden="true">
      <div className="restaurant-panel">
        <div className="panel-top">
          <span>OPERATIONS</span>
          <span>● &nbsp; LIVE</span>
        </div>
        <div className="panel-title">
          A clearer view
          <br />
          of the day.
        </div>
        <div className="panel-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="panel-bottom">
          <span>ORDERS</span>
          <span>TEAM</span>
          <span>INSIGHTS</span>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project, trigger: HTMLButtonElement) => void
}) {
  return (
    <article className={`case-card case-${project.theme}`}>
      <button
        className="case-preview"
        type="button"
        onClick={(event) => onOpen(project, event.currentTarget)}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse" && event.pointerType !== "pen")
            return
          const bounds = event.currentTarget.getBoundingClientRect()
          const x = ((event.clientX - bounds.left) / bounds.width) * 100
          const y = ((event.clientY - bounds.top) / bounds.height) * 100
          event.currentTarget.style.setProperty("--spot-x", `${x}%`)
          event.currentTarget.style.setProperty("--spot-y", `${y}%`)
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--spot-x", "50%")
          event.currentTarget.style.setProperty("--spot-y", "50%")
        }}
        aria-label={`Open case file for ${project.title}`}
      >
        <ProjectArt type={project.art} />
        <span className="case-open">
          OPEN FILE <Arrow />
        </span>
      </button>
      <div className="case-info">
        <div className="case-meta">
          <span>CASE FILE / {project.number}</span>
          <span>{project.category}</span>
        </div>
        <button
          className="case-title"
          type="button"
          onClick={(event) => onOpen(project, event.currentTarget)}
        >
          {project.title}
          <Arrow />
        </button>
        <p>{project.description}</p>
        <div className="case-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
      >
        <div className="modal-header">
          <span>
            CASE FILE / {project.number} · {project.category}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case file"
          >
            ×
          </button>
        </div>
        <div className="modal-heading">
          <span>SELECTED WORK / HVD</span>
          <h2 id="case-title">{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className="modal-details">
          <div>
            <span>01 / CHALLENGE</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span>02 / THINKING</span>
            <p>{project.approach}</p>
          </div>
          <div>
            <span>03 / INTENDED VALUE</span>
            <p>{project.value}</p>
          </div>
        </div>
        <div className="modal-footer">
          {project.links.length ? (
            project.links.map((link) => (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <Arrow />
              </a>
            ))
          ) : (
            <span>Concept project · No public link available</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all")
  const projectTrigger = useRef<HTMLButtonElement | null>(null)
  const filteredProjects = projects.filter((project) =>
    projectMatchesFilter(project, projectFilter),
  )

  useEffect(() => {
    if (!activeProject) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject()
    }
    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [activeProject])

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    projectTrigger.current = trigger
    setActiveProject(project)
  }

  const closeProject = () => {
    setActiveProject(null)
    requestAnimationFrame(() => projectTrigger.current?.focus())
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="cover" id="top">
        <header className="site-header shell">
          <a
            className="brand"
            href="#top"
            onClick={closeMenu}
            aria-label="Hemanth Vidya Deep, home"
          >
            <span className="brand-name">
              HEMANTH
              <br />
              VIDYA DEEP
            </span>
          </a>
          <nav
            className={`site-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
            id="site-nav"
          >
            {navItems.map((item) => (
              <a href={item.href} onClick={closeMenu} key={item.href}>
                {item.label}
              </a>
            ))}
            <a className="mobile-contact" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <Arrow />
            </a>
          </nav>
          <a className="header-cta" href="#contact">
            Let&apos;s connect <Arrow />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </header>

        <main>
          <section className="hero shell" aria-labelledby="hero-title">
            <aside className="hero-rail" aria-label="Portfolio details">
              <span>PORTFOLIO / 2026</span>
              <span>CSBS / INDIA</span>
              <span>FILE 001</span>
            </aside>
            <div className="hero-copy">
              <p className="status">
                <i /> OPEN TO INTERNSHIPS & COLLABORATION
              </p>
              <p className="hero-overline">BUSINESS × PEOPLE × TECHNOLOGY</p>
              <h1 id="hero-title">
                Turning ambiguity
                <br />
                into <em>direction.</em>
              </h1>
              <p className="hero-summary">
                I&apos;m Hemanth, a Computer Science and Business Systems
                student interested in management, strategy, product and
                leadership—using technology to turn complex ideas into useful
                action.
              </p>
              <div className="hero-actions">
                <a className="button button-brass" href="#work">
                  View selected work <Arrow />
                </a>
                <a className="line-link" href="#method">
                  Read my approach <Arrow direction="right" />
                </a>
              </div>
            </div>
            <div className="hero-seal" aria-hidden="true">
              <div className="seal-rings">
                <span className="seal-point point-h">H</span>
                <span className="seal-point point-v">V</span>
                <span className="seal-point point-d">D</span>
                <div className="seal-core">
                  <strong>hvd</strong>
                  <span>THINK / ALIGN / BUILD</span>
                </div>
              </div>
              <small>PERSONAL OPERATING SYSTEM / 01</small>
            </div>
            <div className="hero-proof">
              <div>
                <span>SELECTED WORK</span>
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <small>PROJECTS & CONCEPTS</small>
              </div>
              <div>
                <span>EDUCATION</span>
                <strong>CSBS</strong>
                <small>B.TECH · CURRENTLY PURSUING</small>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>B × T</strong>
                <small>BUSINESS MEETS TECHNOLOGY</small>
              </div>
              <a href="#profile">
                EXPLORE THE DOSSIER <Arrow direction="down" />
              </a>
            </div>
          </section>
        </main>
      </div>

      <section className="profile-section section-pad" id="profile">
        <div className="shell">
          <div className="section-label">
            <span>01 / PROFILE</span>
            <span>THE PERSON BEHIND THE WORK</span>
          </div>
          <div className="profile-grid">
            <div className="profile-heading">
              <p className="eyebrow">PILLI DHARMA TEJA HEMANTH VIDYA DEEP</p>
              <h2>
                Curious enough to ask.
                <br />
                <em>Practical enough to build.</em>
              </h2>
              <blockquote>
                “Technology creates the most value when it is guided by clear
                strategy, thoughtful leadership and a real understanding of
                people.”
              </blockquote>
            </div>
            <figure className="portrait">
              <div className="portrait-frame">
                <img
                  src={`${import.meta.env.BASE_URL}images/hemanth-portrait.png`}
                  alt="Pilli Dharma Teja Hemanth Vidya Deep wearing a suit"
                  loading="lazy"
                />
                <span className="portrait-mark top-left">+</span>
                <span className="portrait-mark bottom-right">+</span>
              </div>
              <figcaption>
                <span>PORTRAIT / 01</span>
                <span>BASED IN INDIA</span>
              </figcaption>
            </figure>
            <div className="profile-copy">
              <div className="profile-note">
                <span>CURRENTLY PURSUING</span>
                <strong>B.Tech · Computer Science & Business Systems</strong>
              </div>
              <p>
                I&apos;m interested in the space where business, people and
                technology meet. I enjoy understanding problems, organizing
                ideas and working with others to turn concepts into useful
                solutions.
              </p>
              <p>
                My ambition is to create impact through management, strategy and
                product thinking—while building enough technical understanding
                to ask better questions and collaborate well.
              </p>
              <dl className="profile-index">
                <div>
                  <dt>FOCUS</dt>
                  <dd>Management · Product · Strategy</dd>
                </div>
                <div>
                  <dt>ADVANTAGE</dt>
                  <dd>Business thinking with technical awareness</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="credentials-ledger" aria-label="Profile at a glance">
            <div>
              <span>I / DISCIPLINE</span>
              <strong>Computer Science & Business Systems</strong>
            </div>
            <div>
              <span>II / INTEREST</span>
              <strong>Management, product & strategy</strong>
            </div>
            <div>
              <span>III / WORKING STYLE</span>
              <strong>Curious, structured & collaborative</strong>
            </div>
            <div>
              <span>IV / AVAILABILITY</span>
              <strong>Internships & collaboration</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section section-pad" id="method">
        <div className="method-ticker" aria-hidden="true">
          <div>
            HUMAN INSIGHT <i>×</i> VIABLE VALUE <i>×</i> DIGITAL SYSTEMS{" "}
            <i>×</i>&nbsp;
          </div>
          <div>
            HUMAN INSIGHT <i>×</i> VIABLE VALUE <i>×</i> DIGITAL SYSTEMS{" "}
            <i>×</i>&nbsp;
          </div>
        </div>
        <div className="shell method-inner">
          <div className="section-label">
            <span>02 / HVD METHOD</span>
            <span>A PERSONAL WORKING FRAMEWORK</span>
          </div>
          <div className="method-grid">
            <div className="method-copy">
              <p className="eyebrow">MY SIGNATURE APPROACH</p>
              <h2>
                Not just what I build.
                <br />
                <em>How I think.</em>
              </h2>
              <p>
                My strongest work begins where three questions meet: Is it
                useful for people? Does it create real value? Can technology
                make it better?
              </p>
              <small>
                The HVD Method is my personal working framework—not a formal
                proprietary methodology.
              </small>
            </div>
            <div
              className="method-diagram"
              aria-label="The HVD method connects human insight, viable value and digital systems"
            >
              <div className="method-orbit orbit-h">
                <span>H</span>
                <small>HUMAN</small>
              </div>
              <div className="method-orbit orbit-v">
                <span>V</span>
                <small>VALUE</small>
              </div>
              <div className="method-orbit orbit-d">
                <span>D</span>
                <small>DIGITAL</small>
              </div>
              <div className="method-core">
                <strong>hvd</strong>
                <span>
                  MEANINGFUL
                  <br />
                  IMPACT
                </span>
              </div>
            </div>
          </div>
          <div className="method-principles">
            {principles.map((principle, index) => (
              <article key={principle.letter}>
                <span>0{index + 1}</span>
                <strong>{principle.letter}</strong>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="shell">
          <div className="section-label">
            <span>03 / SELECTED CASE FILES</span>
            <span>THINKING MADE VISIBLE</span>
          </div>
          <div className="section-intro">
            <div>
              <p className="eyebrow">PROJECTS & CONCEPTS</p>
              <h2>
                Evidence of
                <br />
                <em>how I think.</em>
              </h2>
            </div>
            <p>
              A selected set of experiments where business questions, product
              thinking and technology meet. Open a file to see the challenge,
              thinking and intended value.
            </p>
          </div>
          <div className="archive-toolbar">
            <div className="archive-filters" aria-label="Filter case files">
              {projectFilters.map((filter) => (
                <button
                  type="button"
                  key={filter.value}
                  className={
                    projectFilter === filter.value ? "is-active" : undefined
                  }
                  aria-pressed={projectFilter === filter.value}
                  onClick={() => setProjectFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <span>
              SHOWING {String(filteredProjects.length).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div aria-live="polite">
            <div className="case-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.number}
                  onOpen={openProject}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="shell">
          <div className="section-label">
            <span>04 / OPERATING PRINCIPLES</span>
            <span>FROM QUESTION TO ACTION</span>
          </div>
          <div className="approach-grid">
            <div>
              <p className="eyebrow">HOW I MOVE WORK FORWARD</p>
              <h2>
                Good ideas need
                <br />
                <em>good direction.</em>
              </h2>
              <p className="approach-lead">
                Progress begins by asking better questions, then making room for
                people, plans and purposeful execution.
              </p>
            </div>
            <div className="approach-steps">
              {workSteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                  <Arrow direction="right" />
                </article>
              ))}
            </div>
          </div>
          <div className="strength-index">
            <span>WORKING STRENGTHS</span>
            <div>
              {[
                "Strategic thinking",
                "Communication",
                "Problem solving",
                "Team collaboration",
                "Project planning",
                "Adaptability",
              ].map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="direction-section section-pad" id="direction">
        <div className="shell">
          <div className="section-label">
            <span>05 / NEXT CHAPTER</span>
            <span>LEARNING WITH INTENTION</span>
          </div>
          <div className="direction-grid">
            <div className="direction-copy">
              <p className="eyebrow">CAREER DIRECTION</p>
              <h2>
                Building breadth.
                <br />
                <em>Choosing impact.</em>
              </h2>
              <p>
                My CSBS education is helping me build a foundation in technical
                thinking and business understanding. I&apos;m looking for
                opportunities where I can learn, contribute and help turn clear
                ideas into practical outcomes.
              </p>
              <a
                className="line-link dark-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                See what I&apos;m building <Arrow />
              </a>
            </div>
            <div className="career-lanes">
              {careerLanes.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
              <small>These are career interests, not current job titles.</small>
            </div>
          </div>
          <div className="education-strip">
            <span>EDUCATION / CURRENT</span>
            <strong>B.Tech — Computer Science & Business Systems</strong>
            <span>BUSINESS × TECHNOLOGY × LEADERSHIP</span>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="shell">
          <div className="section-label">
            <span>06 / GET IN TOUCH</span>
            <span>THE NEXT CONVERSATION STARTS HERE</span>
          </div>
          <div className="contact-grid">
            <div>
              <p className="status">
                <i /> OPEN TO INTERNSHIPS & COLLABORATION
              </p>
              <h2>
                Let&apos;s turn a useful idea
                <br />
                into <em>meaningful work.</em>
              </h2>
              <p>
                Have an opportunity, an idea or a thoughtful conversation in
                mind? I&apos;d love to connect.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-brass"
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn <Arrow />
                </a>
                <a
                  className="line-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore my GitHub <Arrow />
                </a>
              </div>
            </div>
            <div className="contact-monogram" aria-hidden="true">
              <span className="sr-only">Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="shell resume-inner">
          <div>
            <span>A QUICK INTRODUCTION, ON PAPER</span>
            <h2>Take the dossier with you.</h2>
          </div>
          <button type="button" onClick={() => window.print()}>
            Print / save profile as PDF <Arrow />
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <a className="footer-brand" href="#top" aria-label="Hemanth Vidya Deep home">
            HEMANTH VIDYA DEEP
          </a>
          <span>BUSINESS × PEOPLE × TECHNOLOGY</span>
          <div>
            <a href={linkedIn} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
          <small>© {new Date().getFullYear()} Hemanth Vidya Deep</small>
        </div>
      </footer>

      <div className="print-profile">
        <h1>Pilli Dharma Teja Hemanth Vidya Deep</h1>
        <p>Aspiring management professional · Business & Technology</p>
        <h2>Profile</h2>
        <p>
          B.Tech Computer Science and Business Systems student interested in
          management, strategy, product, leadership and technology.
        </p>
        <h2>HVD Method</h2>
        <p>Human insight · Viable value · Digital systems</p>
        <h2>Education</h2>
        <p>
          B.Tech — Computer Science and Business Systems · Currently pursuing
        </p>
        <h2>Core strengths</h2>
        <p>
          Strategic Thinking · Communication · Problem Solving · Team
          Collaboration · Project Planning · Adaptability
        </p>
        <h2>Selected work</h2>
        {projects.map((project) => (
          <p key={project.number}>
            <strong>{project.title}</strong> — {project.description}
          </p>
        ))}
        <h2>Connect</h2>
        <p>
          {linkedIn}
          <br />
          {github}
        </p>
      </div>

      {activeProject && (
        <ProjectDialog project={activeProject} onClose={closeProject} />
      )}
    </>
  )
}
