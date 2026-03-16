import { FiDownload, FiMapPin, FiMail, FiPhone, FiLinkedin, FiBook, FiGlobe } from 'react-icons/fi'
import './About.css'

const skills = {
    Frontend: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3/SCSS'],
    Backend: ['Node.js', 'Express.js', 'FastAPI (Python)', 'REST APIs', 'Socket.IO', 'OpenAI APIs', 'Ethers.js'],
    Database: ['MongoDB', 'PostgreSQL'],
    Tools: ['Git', 'GitHub', 'Docker', 'AWS', 'JIRA', 'Stripe', 'Agile Methodology'],
}

const experience = [
    {
        company: 'Seasia Infotech',
        role: 'Frontend + Backend Developer',
        period: '2022 - Present',
        location: 'Mohali',
        desc: 'As a MERN Stack Developer, I was involved in designing and maintaining full-stack web applications.',
        bullets: [
            'Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
            'Created reusable front-end components and optimized UI/UX using React.js and Tailwind CSS.',
            'Used Git and GitHub for version control and JIRA for task tracking in an Agile environment.',
        ],
    },
]

const education = [
    {
        institution: 'Bhartiya Vidya Mandir School',
        degree: '+1 & +2 — Non-Medical (Science)',
        period: '2017 – 2019',
    },
    {
        institution: 'Gulzar Group of Institutes',
        degree: 'Bachelor of Technology',
        period: '2019 – 2022',
    },

]

const languages = [
    { name: 'Hindi', level: 'Native', dots: 5 },
    { name: 'English', level: 'Proficient', dots: 4 },
    { name: 'Punjabi', level: 'Native', dots: 5 },
]

export default function About() {
    return (
        <div className="about page-wrapper">
            {/* PAGE HEADER */}
            <div className="page-hero">
                <div className="page-hero__bg" />
                <div className="container page-hero__inner">
                    <div className="badge">About Me</div>
                    <h1 className="page-hero__title">Know Who I Am</h1>
                    <p className="page-hero__desc">MERN Stack Developer | Ludhiana, Punjab</p>
                </div>
            </div>

            {/* PROFILE SECTION */}
            <section className="section about__profile">
                <div className="container about__profile-inner">
                    {/* SIDEBAR */}
                    <div className="about__avatar-col">
                        <div className="about__avatar">SM</div>

                        <div className="about__contact-card">
                            <p className="about__contact-heading">Contacts</p>
                            <a href="tel:7009711037" className="about__contact-item">
                                <FiPhone size={15} /> 7009711037
                            </a>
                            <a href="mailto:mauryasanjeev8080@gmail.com" className="about__contact-item">
                                <FiMail size={15} /> mauryasanjeev8080@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/sanjeev-maurya-752a211a4/" target="_blank" rel="noreferrer" className="about__contact-item">
                                <FiLinkedin size={15} /> LinkedIn Profile
                            </a>
                            <span className="about__contact-item">
                                <FiMapPin size={15} /> Ludhiana, Punjab
                            </span>
                        </div>

                        {/* LANGUAGES */}
                        <div className="about__contact-card">
                            <p className="about__contact-heading">
                                <FiGlobe size={14} /> Languages
                            </p>
                            {languages.map(({ name, level, dots }) => (
                                <div key={name} className="about__lang-row">
                                    <span className="about__lang-name">{name}</span>
                                    <span className="about__lang-level">{level}</span>
                                    <div className="about__lang-dots">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`about__lang-dot ${i < dots ? 'about__lang-dot--filled' : ''}`} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/SanjeevMauryaResume.pdf"
                            className="btn btn-primary about__resume-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiDownload /> View Resume
                        </a>
                    </div>

                    {/* BIO COLUMN */}
                    <div className="about__bio-col">
                        {/* SUMMARY */}
                        <div className="about__summary">
                            <h2 className="about__bio-title">Summary</h2>
                            <p>
                                MERN Stack Developer with <strong>4+ years</strong> of experience in building
                                full-stack web applications using MongoDB, Express.js, React.js, Node.js, and Vue.js.
                                Skilled in creating user-friendly interfaces, writing clean backend code, and building
                                RESTful APIs.
                            </p>
                            <p>
                                Experienced in working with Git, managing databases, and deploying apps on cloud
                                platforms like <strong>AWS</strong> and staging servers. Comfortable working in teams,
                                following Agile methods, and solving real-world problems with efficient code.
                            </p>
                        </div>

                        {/* SKILLS */}
                        <div className="about__skills">
                            <h2 className="about__bio-title">Skills</h2>
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="about__skill-group">
                                    <p className="about__skill-category">{category}</p>
                                    <div className="about__skill-tags">
                                        {items.map((skill) => (
                                            <span key={skill} className="about__skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* EDUCATION */}
                        <div className="about__education">
                            <h2 className="about__bio-title"><FiBook size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />Education</h2>
                            {education.map(({ institution, degree, period }) => (
                                <div key={institution} className="about__edu-card">
                                    <div className="about__edu-icon">🎓</div>
                                    <div>
                                        <h3 className="about__edu-inst">{institution}</h3>
                                        <p className="about__edu-degree">{degree}</p>
                                        <span className="about__timeline-period">{period}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="section about__exp">
                <div className="container">
                    <div className="badge">Career</div>
                    <h2 className="section-title">Experience</h2>
                    <div className="about__timeline">
                        {experience.map((exp) => (
                            <div key={exp.company} className="about__timeline-item">
                                <div className="about__timeline-dot" />
                                <div className="about__timeline-content">
                                    <div className="about__timeline-header">
                                        <div>
                                            <h3 className="about__timeline-company">{exp.company}</h3>
                                            <p className="about__timeline-role">{exp.role}</p>
                                        </div>
                                        <div className="about__timeline-meta">
                                            <span className="about__timeline-period">{exp.period}</span>
                                            <span className="about__timeline-location">
                                                <FiMapPin size={12} /> {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="about__timeline-desc">{exp.desc}</p>
                                    <ul className="about__timeline-bullets">
                                        {exp.bullets.map((b, i) => (
                                            <li key={i} className="about__timeline-bullet">
                                                <span className="about__timeline-bdot" /> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
