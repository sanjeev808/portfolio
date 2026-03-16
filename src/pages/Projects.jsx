import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
    {
        title: 'EBMCI',
        location: 'Mohali',
        category: 'Frontend',
        tags: ['React.js', 'Redux', 'REST APIs', 'PDF Generation', 'Chatbot'],
        desc: 'Developed dynamic and interactive frontend interfaces for the EBMCI platform, focusing on two key modules: Device TrandAI, Device Comply AI and Admin panel. Leveraged React.js and Redux to create responsive, data-driven components that streamline the management of medical device data.',
        bullets: [
            'Developed interactive dashboards for Device TrandAI and Device Comply AI, integrating RESTful APIs, multi-step forms, and PDF generation features.',
            'Implemented a smart chatbot for guided navigation and enhanced user assistance.',
            'Enabled advanced multi-field search, printable reports, and a watchlist feature with historical tracking for medical devices.',
            'Added a chatbot for enhanced user support and guided navigation.',
        ],
        link: 'https://www.ebmci.tw/',
        featured: true,
    },
    {
        title: 'Recircle',
        location: 'Mohali',
        category: 'Backend',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'DocuSign', 'RBAC'],
        desc: 'Developed and maintained backend services for the Recircle platform using Node.js and Express.js, building scalable RESTful APIs to support core application workflows. Integrated DocuSign to extend platform capabilities and enable secure document processing.',
        bullets: [
            'Developed scalable RESTful APIs using Node.js and Express.js to support core application workflows.',
            'Integrated DocuSign third-party services to enable secure document processing and extend platform functionality.',
            'Implemented authentication, authorization, and role-based access control (RBAC) while managing database schemas for efficient data storage.',
            'Collaborated with frontend teams, participated in code reviews, and supported QA cycles to ensure smooth API integration and stable production releases.',
        ],
        link: 'https://recircle.ai/',
        featured: false,
    },
    {
        title: 'EPIQ',
        location: 'Mohali',
        category: 'Backend',
        tags: ['Node.js', 'Express.js', 'Socket.IO', 'SongStats', 'MongoDB', 'Caching'],
        desc: 'Developed scalable backend services for the EPIQ platform using Node.js and Express.js, building and optimizing RESTful APIs to support high-volume workflows. Implemented a real-time one-to-one chat module with Socket.IO and integrated the SongStats platform for external data synchronization.',
        bullets: [
            'Developed scalable backend services using Node.js and Express.js, building and optimizing RESTful APIs to support high-volume application workflows.',
            'Implemented a real-time one-to-one chat system using Socket.IO, improving messaging performance and user engagement.',
            'Integrated the SongStats third-party platform to enable seamless external data synchronization and extend platform functionality.',
            'Designed and implemented caching strategies and query optimization to reduce API response times and improve system scalability.',
            'Developed unit and integration tests to ensure code reliability and facilitate faster, safer deployments.',
            'Implemented role-based notifications and event-driven workflows to enhance user experience and system responsiveness.',
        ],
        link: null,
        featured: false,
    },
    {
        title: 'Slim Snap',
        location: 'Mohali',
        category: 'Full Stack',
        tags: ['Node.js', 'Express.js', 'Socket.IO', 'OpenAI API', 'MongoDB', 'RBAC'],
        desc: 'Engineered a robust and scalable backend for Slim Snap, a health and wellness application. Combined traditional backend development using Node.js and Express.js with advanced AI capabilities via OpenAI APIs to deliver personalized nutrition insights and chatbot experiences.',
        bullets: [
            'Designed and developed scalable RESTful APIs using Node.js and Express.js, supporting high-volume application workflows and improving response times.',
            'Implemented a real-time one-to-one chat system using Socket.IO, enabling low-latency messaging and enhancing user engagement.',
            'Integrated the SongStats third-party platform to enable seamless external data synchronization.',
            'Built secure authentication, authorization, and role-based access control (RBAC) mechanisms to protect application resources.',
            'Implemented error handling, logging, and validation mechanisms to improve system reliability and production stability.',
        ],
        link: 'https://play.google.com/store/apps/details?id=com.caloriesapp&hl=en_IN',
        featured: true,
    },
    {
        title: 'Vedavida',
        location: 'Mohali',
        category: 'Full Stack · Team Lead',
        tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Stripe', 'MongoDB'],
        desc: 'Worked as a Full Stack Developer and Team Lead on the Vedavida platform, developing both frontend and backend systems. Built dynamic user and admin panels using React.js with Redux and integrated the Stripe payment gateway for secure online transactions.',
        bullets: [
            'Developed user and admin panels using React.js and Redux, creating responsive and data-driven interfaces.',
            'Built scalable backend services using Node.js and Express.js and integrated the Stripe payment gateway for secure payments.',
            'Designed and optimized RESTful APIs and managed MongoDB database operations for efficient data storage and retrieval.',
            'Led a team of developers, conducting code reviews, resolving technical issues, and ensuring best development practices.',
        ],
        link: 'http://stgn.appsndevs.com:32149/veda',
        featured: true,
    },
    {
        title: 'Mr-Jet',
        location: 'Mohali',
        category: 'Frontend',
        tags: ['Vue.js', 'Git', 'Agile'],
        desc: 'Wrote the entire frontend application for Mr-Jet using Vue.js, ensuring a seamless user experience. Managed client expectations through regular scrum meetings.',
        bullets: [
            'Developed the complete frontend codebase using Vue.js.',
            'Ensured the application met all client requirements through active participation in scrums.',
            'Took full responsibility for debugging and maintaining the application.',
            'Managed project source code efficiently using Git.',
        ],
        link: 'https://mrjet.co/',
        featured: false,
    },
    {
        title: 'WYBO',
        location: 'Mohali',
        category: 'Full Stack · Blockchain',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Ethers.js', 'Redux'],
        desc: 'Developed a comprehensive ecosystem for WYBO, featuring dynamic user and admin panels integrated with blockchain smart contracts. Managed real-time data flows and secure transactions through a scalable MERN backend.',
        bullets: [
            'Built dynamic user and admin panels using React.js and Redux for efficient state management.',
            'Developed a scalable backend using Node.js, Express.js, and MongoDB for secure data handling.',
            'Integrated blockchain smart contracts using Ethers.js in the backend for secure transactions.',
            'Designed and optimized RESTful APIs for real-time data updates and seamless frontend-backend communication.',
        ],
        link: null,
        featured: true,
    },
    {
        title: 'LAB AI',
        location: 'Mohali',
        category: 'Full Stack · Team Lead',
        tags: ['React.js', 'FastAPI', 'Python', 'Stripe', 'Redux', 'Team Lead'],
        desc: 'Led the development of LAB AI, a high-performance platform built with React.js and FastAPI. Integrated Stripe for secure payments and mentored a team of junior developers to ensure the delivery of high-quality code.',
        bullets: [
            'Developed dynamic user and admin panels using React.js and Redux for complex data handling.',
            'Managed backend services using FastAPI (Python) and integrated Stripe for secure payment processing.',
            'Led a team of junior developers, providing technical guidance and conducting code reviews to maintain best practices.',
            'Facilitated cross-team collaboration to ensure seamless integration and optimized API endpoints.',
        ],
        link: null,
        featured: true,
    },
    {
        title: 'NFT Marketplace',
        location: 'Mohali',
        category: 'Frontend',
        tags: ['Nuxt.js', 'Vue.js', 'Git', 'Agile'],
        desc: 'Developed the complete frontend for an NFT Marketplace using Nuxt.js, focusing on a responsive and user-friendly interface. Followed Agile methodologies and maintained a clean codebase on Git.',
        bullets: [
            'Wrote the complete frontend code in Nuxt.js, ensuring high performance and responsiveness.',
            'Followed Agile methodology, participating in regular scrums and sprints.',
            'Took complete ownership of debugging and resolving critical issues during development.',
            'Managed code versioning and collaborative workflows using Git.',
        ],
        link: null,
        featured: false,
    },
    {
        title: 'Empower Mobility',
        location: 'Mohali',
        category: 'Frontend',
        tags: ['Vue.js', 'Git', 'Agile'],
        desc: 'Contributed to the Empower Mobility project by developing key modules for charges and carriers using Vue.js. Iteratively improved the UI based on daily client feedback.',
        bullets: [
            'Developed frontend modules for "charges" and "carrier" using Vue.js.',
            'Collaborated closely with clients to implement daily changes and feature updates.',
            'Participated in daily scrum calls and adhered to Agile development practices.',
            'Maintained code quality and version history through Git.',
        ],
        link: null,
        featured: false,
    },
    {
        title: 'Alpha btc',
        location: 'Mohali',
        category: 'Frontend',
        tags: ['React.js', 'Upwork Tracker', 'Git', 'Agile'],
        desc: 'Developed the frontend for Alpha btc using React.js, maintaining high productivity and transparency through Upwork tracking. Followed Agile practices to deliver features iteratively.',
        bullets: [
            'Wrote the frontend code for Alpha btc using React.js.',
            'Operated under Upwork tracker, ensuring transparent and efficient development time management.',
            'Followed Agile methodologies and debugged issues with complete ownership.',
            'Kept the codebase organized and up-to-date on Git.',
        ],
        link: 'https://alpha-btc.prxy-bonds.pages.dev/#/alpha',
        featured: false,
    },
]

export default function Projects() {
    return (
        <div className="projects page-wrapper">
            {/* PAGE HEADER */}
            <div className="page-hero">
                <div className="page-hero__bg" />
                <div className="container page-hero__inner">
                    <div className="badge">Portfolio</div>
                    <h1 className="page-hero__title">My Projects</h1>
                    <p className="page-hero__desc">11 real-world applications I've built and shipped</p>
                </div>
            </div>

            {/* STATS ROW */}
            <div className="projects-stats-bar">
                <div className="container projects-stats-inner">
                    {[
                        { num: '11+', label: 'Projects Delivered' },
                        { num: '4+', label: 'Years Experience' },
                        { num: '5+', label: 'Live Products' },
                        { num: '∞', label: 'Lines of Code' },
                    ].map(({ num, label }) => (
                        <div key={label} className="projects-stat">
                            <span className="projects-stat__num">{num}</span>
                            <span className="projects-stat__label">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PROJECTS GRID */}
            <section className="section">
                <div className="container">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card__header">
                <div>
                    <div className="project-card__category">{project.category}</div>
                    <h2 className="project-card__title">{project.title}</h2>
                    <p className="project-card__location">{project.location}</p>
                </div>
            </div>

            <p className="project-card__desc">{project.desc}</p>

            <ul className="project-card__bullets">
                {project.bullets.map((b, i) => (
                    <li key={i} className="project-card__bullet">
                        <span className="project-card__bullet-dot" />
                        {b}
                    </li>
                ))}
            </ul>

            <div className="project-card__footer">
                <div className="project-card__tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                </div>
                <div className="project-card__links">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                            aria-label={`Open ${project.title}`}
                        >
                            <FiExternalLink size={16} /> Live
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
