import { Link } from 'react-router-dom'
import {
    FiArrowRight, FiGithub, FiLinkedin, FiMail,
    FiCode, FiServer, FiDatabase, FiLayers, FiPenTool
} from 'react-icons/fi'
import './Home.css'

const highlights = [
    { icon: <FiCode size={28} />, label: 'Frontend', desc: 'React, Vue, Next.js, Nuxt.js' },
    { icon: <FiServer size={28} />, label: 'Backend', desc: 'Node.js, Express, FastAPI (Python), REST APIs' },
    { icon: <FiDatabase size={28} />, label: 'Database', desc: 'MongoDB, PostgreSQL' },
    { icon: <FiLayers size={28} />, label: 'DevOps', desc: 'Git, Basic Docker, Basic AWS' },
    { icon: <FiPenTool size={28} />, label: 'Styling', desc: 'Tailwind CSS, SCSS, Bootstrap' },
]

const techStack = [
    'React.js', 'Node.js', 'MongoDB', 'Express.js',
    'Vue.js', 'Next.js', 'PostgreSQL', 'Docker', 'Git',
    'Tailwind CSS', 'SCSS', 'Bootstrap', 'Socket.IO', 'Redux'
]

export default function Home() {
    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="hero" id="home">
                <div className="hero__bg">
                    <div className="hero__blob hero__blob--1" />
                    <div className="hero__blob hero__blob--2" />
                    <div className="hero__grid" />
                </div>

                <div className="container hero__inner " style={{ marginTop: '100px' }}>
                    <div className="hero__content">
                        <h1 className="hero__name">
                            Hi, I'm <span className="hero__name-highlight">Sanjeev</span>
                            <br />Maurya
                        </h1>
                        <div className="hero__role-wrapper">
                            <span className="hero__role">MERN Stack Developer</span>
                        </div>
                        <p className="hero__desc">
                            4+ years of experience building full-stack web applications using
                            MongoDB, Express.js, React, Node.js & Vue.js. Passionate about
                            creating scalable, performant applications with clean code.
                        </p>
                        <div className="hero__actions">
                            <Link to="/projects" className="btn btn-primary">
                                View My Work <FiArrowRight />
                            </Link>
                            <Link to="/contact" className="btn btn-ghost">
                                Let's Talk
                            </Link>
                        </div>

                        <div className="hero__socials">
                            <a href="https://www.linkedin.com/in/sanjeev-maurya-752a211a4/" target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
                                <FiLinkedin size={20} />
                            </a>
                           
                            <a href="mailto:mauryasanjeev8080@gmail.com" className="hero__social" aria-label="Email">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="hero__visual">
                        <div className="hero__avatar-ring">
                            <div className="hero__avatar">SM</div>
                            <div className="hero__orbit hero__orbit--1">
                                <span className="hero__orbit-dot" />
                            </div>
                            <div className="hero__orbit hero__orbit--2">
                                <span className="hero__orbit-dot" />
                            </div>
                        </div>
                        <div className="hero__xp-badge">
                            <span className="hero__xp-num">4+</span>
                            <span className="hero__xp-label">Years Exp.</span>
                        </div>
                        <div className="hero__projects-badge">
                            <span className="hero__xp-num">11+</span>
                            <span className="hero__xp-label">Projects</span>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll">
                    <div className="hero__scroll-line" />
                    <span>Scroll</span>
                </div>
            </section>

            {/* ===== HIGHLIGHTS ===== */}
            <section className="section home-highlights">
                <div className="container">
                    <div className="badge">What I Do</div>
                    <h2 className="section-title">My Expertise</h2>
                    <p className="section-subtitle">Full-stack development across the entire web ecosystem</p>

                    <div className="highlights-grid">
                        {highlights.map(({ icon, label, desc }) => (
                            <div key={label} className="highlight-card">
                                <div className="highlight-card__icon">{icon}</div>
                                <h3 className="highlight-card__title">{label}</h3>
                                <p className="highlight-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECH STACK ===== */}
            <section className="section home-tech">
                <div className="container">
                    <div className="badge">Technologies</div>
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">The tools I use to bring ideas to life</p>

                    <div className="tech-grid">
                        {techStack.map((tech) => (
                            <div key={tech} className="tech-chip">{tech}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA STRIP ===== */}
            <section className="home-cta">
                <div className="container home-cta__inner">
                    <div>
                        <h2 className="home-cta__title">Ready to build something amazing?</h2>
                        <p className="home-cta__sub">Let's collaborate and bring your ideas to life.</p>
                    </div>
                    <Link to="/contact" className="btn btn-outline home-cta__btn">
                        Get In Touch <FiArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    )
}
