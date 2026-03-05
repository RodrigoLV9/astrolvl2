import React, { useEffect, useRef } from 'react'
import '../styles/Home/spaceBg.css'

export const SpaceBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        
        // Create stars
        const starsContainer = container.querySelector('.star-container')
        if (starsContainer) {
            const fragment = document.createDocumentFragment()
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div')
                star.className = 'star'
                star.style.left = Math.random() * 100 + '%'
                star.style.top = Math.random() * 100 + '%'
                star.style.animationDelay = Math.random() * 3 + 's'
                star.style.animationDuration = (2 + Math.random() * 2) + 's'
                fragment.appendChild(star)
            }
            starsContainer.appendChild(fragment)
        }

        // Create falling comets at 45 degrees
        const asteroidsContainer = container.querySelector('.asteroids-container')
        if (asteroidsContainer) {
            const createComet = () => {
                const comet = document.createElement('div')
                comet.className = 'asteroid' + (Math.random() > 0.65 ? ' glow' : '')
                // Start: spread across top edge and a bit off left edge
                // x from -30% to 90% so some enter from the left side too
                comet.style.left = (Math.random() * 120 - 30) + '%'
                comet.style.top = '-10px'
                // length of the comet trail
                const trailLen = 50 + Math.random() * 100
                comet.style.height = trailLen + 'px'
                const duration = 2.5 + Math.random() * 4
                comet.style.animationDuration = duration + 's'
                asteroidsContainer.appendChild(comet)

                setTimeout(() => {
                    if (comet.parentNode) comet.remove()
                }, duration * 1000 + 200)
            }

            // Staggered initial batch
            for (let i = 0; i < 12; i++) {
                setTimeout(createComet, i * 400)
            }

            // Steady stream
            const interval = setInterval(createComet, 600)

            return () => clearInterval(interval)
        }
    }, [])

    return (
        <div ref={containerRef} className="space-bg">
            {/* Nebula effects */}
            <div className="nebula nebula-1"></div>
            <div className="nebula nebula-2"></div>
            
            {/* Stars container */}
            <div className="star-container"></div>
            
            {/* Asteroids container */}
            <div className="asteroids-container"></div>
        </div>
    )
}
