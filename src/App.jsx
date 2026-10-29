const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'PHP',
  'MySQL',
  'Python',
  'UI/UX Design',
  'REST APIs',
  'Database Design',
  'Git & GitHub',
  'Problem Solving',
  'Responsive Design',
];

const projects = [
  {
    title: 'Smart Rental Platform',
    type: 'Full-Stack Web App',
    description:
      'A complete vehicle rental system that streamlines booking, customer management, and fleet operations with a clean dashboard experience.',
    stack: ['React', 'Node.js', 'MySQL'],
    accent: 'purple',
  },
  {
    title: 'Portfolio Experience',
    type: 'Personal Brand',
    description:
      'A visually immersive portfolio built to highlight projects, personal story, and technical abilities in a polished and modern format.',
    stack: ['Vite', 'React', 'CSS'],
    accent: 'blue',
  },
  {
    title: 'Business Automation Tool',
    type: 'Workflow Dashboard',
    description:
      'An internal operations dashboard focused on automation, data visibility, and task tracking for streamlined business processes.',
    stack: ['JavaScript', 'MySQL', 'APIs'],
    accent: 'cyan',
  },
];

const experience = [
  {
    role: 'Web Developer',
    company: 'Freelance / Independent Projects',
    period: '2024 — Present',
    details:
      'Developed responsive web applications and business tools, focusing on intuitive UX, scalable architecture, and clean frontend execution.',
  },
  {
    role: 'Software Developer',
    company: 'Personal Projects & Learning',
    period: '2022 — 2024',
    details:
      'Built and refined solutions using JavaScript, PHP, MySQL, and Python, with emphasis on practical product thinking and efficient delivery.',
  },
  {
    role: 'Creator & Problem Solver',
    company: 'Digital Product Development',
    period: '2021 — 2022',
    details:
      'Created interfaces and systems designed around usability, maintainability, and business value, while continuously learning new technologies.',
  },
];

const socialLinks = {
  github: 'https://github.com/kandelsujana58-debug',
  linkedin: 'https://www.linkedin.com',
  email: 'mailto:hello.kandel@example.com',
};

function App() {
  return (
    <div className="page-shell">
      <div className="bg-grid" />
      <div className="bg-glow glow-one" />
      <div className="bg-glow glow-two" />

      <header className="topbar container">
        <div className="brand">
          <span className="brand-mark">K</span>
          <span>Kandel Sujana</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s Talk
        </a>
      </header>

      <main>
        <section className="hero container section-spacing">
          <div className="hero-copy">
            <p className="eyebrow">Software Developer</p>
            <h1>
              Building digital products that feel <span>fast</span>, <span>clean</span>, and <span>human</span>.
            </h1>
            <p className="lead">
              I design and build scalable web experiences with a strong focus on usability, performance, and modern product thinking.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="mailto:hello.kandel@example.com">
                Hire Me
              </a>
            </div>

            <ul className="quick-stats" aria-label="Professional statistics">
              <li>
                <strong>5+</strong>
                <span>Years Learning</span>
              </li>
              <li>
                <strong>12+</strong>
                <span>Projects Built</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>Curiosity-Driven</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="3D portfolio showcase">
            <div className="orb-card glass-panel">
              <div className="orb-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="orb-body">
                <div className="orb-core" />
                <div className="orb-ring ring-one" />
                <div className="orb-ring ring-two" />
              </div>
              <div className="orb-labels">
                <span>Full-Stack</span>
                <span>UI/UX</span>
                <span>Web Apps</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container section-spacing">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Turning ideas into polished digital experiences.</h2>
          </div>

          <div className="about-grid">
            <div className="glass-panel about-card">
              <p>
                I&apos;m a developer who enjoys building practical, elegant products that combine strong engineering with a smooth user experience.
                My work focuses on modern web interfaces, scalable systems, and design choices that make digital experiences clearer and more engaging.
              </p>
              <p>
                From concept to implementation, I enjoy creating thoughtful solutions that are accessible, responsive, and built with long-term maintainability in mind.
              </p>
            </div>

            <div className="mini-stats glass-panel">
              <div>
                <span>Focus</span>
                <strong>Product Development</strong>
              </div>
              <div>
                <span>Approach</span>
                <strong>Clean + Functional</strong>
              </div>
              <div>
                <span>Style</span>
                <strong>Modern & Futuristic</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container section-spacing">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to craft quality products.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-pill glass-panel" style={{ animationDelay: `${index * 80}ms` }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="container section-spacing">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work with thoughtful execution.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card glass-panel ${project.accent}`}>
                <div className="project-badge">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="container section-spacing">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Growth built through hands-on problem solving.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div key={item.role} className="timeline-item glass-panel">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container section-spacing contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful together.</h2>
          </div>

          <div className="contact-grid">
            <div className="glass-panel contact-card">
              <h3>Connect</h3>
              <div className="contact-links">
                <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={socialLinks.email}>Email</a>
              </div>
            </div>

            <form className="glass-panel form-card">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea placeholder="Tell me about your project..." rows="5" />
              </label>
              <button type="submit" className="primary-btn submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
