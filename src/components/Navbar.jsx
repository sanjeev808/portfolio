import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isOpen ? 'navbar--menu-open' : ''}`}>
            <div className="container navbar__inner">
                <NavLink to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">SM</span>
                    <span className="navbar__logo-text">Sanjeev <span>Maurya</span></span>
                </NavLink>

                <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
                    {navLinks.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                            }
                            end={to === '/'}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a
                        href="/SanjeevMauryaResume.pdf"
                        className="btn btn-primary navbar__cta"
                        download
                    >
                        Resume
                    </a>
                </nav>

                <button
                    className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>
        </header>
    )
}
