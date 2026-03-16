import { useEffect, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const onMouseEnter = () => setIsVisible(true)
        const onMouseLeave = () => setIsVisible(false)

        const handleHover = (e) => {
            const target = e.target
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')

            setIsHovering(isClickable)
        }

        window.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseover', handleHover)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseover', handleHover)
            document.removeEventListener('mouseenter', onMouseEnter)
            document.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    useEffect(() => {
        let requestId
        const followMouse = () => {
            setTrailingPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15
            }))
            requestId = requestAnimationFrame(followMouse)
        }
        followMouse()
        return () => cancelAnimationFrame(requestId)
    }, [position])

    if (!isVisible) return null

    return (
        <div className={`custom-cursor-container ${isHovering ? 'custom-cursor--hover' : ''}`}>
            <div
                className="custom-cursor__dot"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="custom-cursor__ring"
                style={{ left: `${trailingPosition.x}px`, top: `${trailingPosition.y}px` }}
            />
        </div>
    )
}
