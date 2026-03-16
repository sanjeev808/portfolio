import { useState } from 'react'
import { FiSend, FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import './Contact.css'

const contactInfo = [
    { icon: <FiPhone size={22} />, label: 'Phone', value: '7009711037', href: 'tel:7009711037' },
    { icon: <FiMail size={22} />, label: 'Email', value: 'mauryasanjeev8080@gmail.com', href: 'mailto:mauryasanjeev8080@gmail.com' },
    { icon: <FiMapPin size={22} />, label: 'Location', value: 'Ludhiana, Punjab', href: null },
    {
        icon: <FiLinkedin size={22} />,
        label: 'LinkedIn',
        value: 'sanjeev-maurya-752a211a4',
        href: 'https://www.linkedin.com/in/sanjeev-maurya-752a211a4/',
    },
]

const EMAILJS_SERVICE_ID = 'service_9t625w1'
const EMAILJS_TEMPLATE_ID = 'template_f7o0ppo'
const EMAILJS_PUBLIC_KEY = '17fuwYRZPMn2hZBzc'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', phoneNumber: '', Message: '' })
    const [status, setStatus] = useState({ type: '', message: '' }) // 'loading', 'success', 'error'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ type: 'loading', message: 'Sending message...' })

        try {
            const response = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                e.target,
                EMAILJS_PUBLIC_KEY
            )
            console.log('SUCCESS!', response.status, response.text)

            setStatus({ type: 'success', message: '✅ Message sent! I\'ll get back to you soon.' })
            setForm({ name: '', email: '', subject: '', phoneNumber: '', Message: '' })

            setTimeout(() => setStatus({ type: '', message: '' }), 5000)
        } catch (error) {
            console.error('FAILED...', error)
            setStatus({ type: 'error', message: '❌ Failed to send message. Please try again later.' })
            setTimeout(() => setStatus({ type: '', message: '' }), 5000)
        }
    }

    return (
        <div className="contact page-wrapper">
            {/* PAGE HEADER */}
            <div className="page-hero">
                <div className="page-hero__bg" />
                <div className="container page-hero__inner">
                    <div className="badge">Contact Me</div>
                    <h1 className="page-hero__title">Let's Build Together</h1>
                    <p className="page-hero__desc">Open to freelance projects & full-time opportunities</p>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <section className="section">
                <div className="container contact__inner">
                    {/* INFO PANEL */}
                    <div className="contact__info">
                        <h2 className="contact__info-title">Get In Touch</h2>
                        <p className="contact__info-sub">
                            Whether you have a project in mind, a question, or just want to say hello —
                            I'd love to hear from you. I'll reply as soon as possible!
                        </p>

                        <div className="contact__cards">
                            {contactInfo.map(({ icon, label, value, href }) => (
                                <div key={label} className="contact__card">
                                    <div className="contact__card-icon">{icon}</div>
                                    <div>
                                        <p className="contact__card-label">{label}</p>
                                        {href ? (
                                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact__card-value">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="contact__card-value">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__socials">
                            <a href="https://www.linkedin.com/in/sanjeev-maurya-752a211a4/" target="_blank" rel="noreferrer" className="contact__social" aria-label="LinkedIn">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact__social" aria-label="GitHub">
                                <FiGithub size={20} />
                            </a>
                            <a href="mailto:mauryasanjeev8080@gmail.com" className="contact__social" aria-label="Email">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="contact__form-wrapper">
                        {status.message && (
                            <div className={`contact__status contact__status--${status.type}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label htmlFor="name" className="contact__label">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="contact__input"
                                    />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="phoneNumber" className="contact__label">Phone Number</label>
                                    <input
                                        id="phoneNumber"
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Your phone number"
                                        value={form.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="contact__input"
                                    />
                                </div>
                            </div>

                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label htmlFor="email" className="contact__label">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="contact__input"
                                    />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="subject" className="contact__label">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="What's this about?"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="contact__input"
                                    />
                                </div>
                            </div>

                            <div className="contact__field">
                                <label htmlFor="Message" className="contact__label">Message</label>
                                <textarea
                                    id="Message"
                                    name="Message"
                                    rows={6}
                                    placeholder="Tell me about your project or idea..."
                                    value={form.Message}
                                    onChange={handleChange}
                                    required
                                    className="contact__input contact__textarea"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary contact__submit"
                                disabled={status.type === 'loading'}
                            >
                                <FiSend /> {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
