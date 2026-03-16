import { NavLink } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__logo-icon">SM</span>
                        <div>
                            <p className="footer__name">Sanjeev Maurya</p>
                            <p className="footer__role">MERN Stack Developer</p>
                        </div>
                    </div>
                    <p className="footer__tagline">
                        Building scalable web applications with modern technologies.
                    </p>
                </div>

                <div className="footer__links">
                    <p className="footer__links-title">Navigation</p>
                    <nav className="footer__nav">
                        {['/', '/about', '/projects', '/contact'].map((to, i) => (
                            <NavLink key={to} to={to} className="footer__link" end={to === '/'}>
                                {['Home', 'About', 'Projects', 'Contact'][i]}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="footer__contact">
                    <p className="footer__links-title">Get In Touch</p>
                    <a href="tel:7009711037" className="footer__contact-item">
                        <FiPhone size={16} /> 7009711037
                    </a>
                    <a href="mailto:mauryasanjeev8080@gmail.com" className="footer__contact-item">
                        <FiMail size={16} /> mauryasanjeev8080@gmail.com
                    </a>
                    <div className="footer__socials">
                        <a
                            href="https://www.linkedin.com/in/sanjeev-maurya-752a211a4/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                            aria-label="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="mailto:mauryasanjeev8080@gmail.com"
                            className="footer__social"
                            aria-label="Email"
                        >
                            <FiMail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {year} Sanjeev Maurya. Crafted with 💚 using React & Vite.</p>
            </div>
        </footer>
    )
}
