import { useEffect } from "react"
import { Home, About, Overlay } from "./pages/Pages"
import { animateSlideIn } from "./utils/gsapFunctions"
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const down = document.querySelectorAll('.slide-down')
        const up = document.querySelectorAll('.slide-up')
        const contactIcon = document.querySelectorAll('.contact-icon')

        down.forEach(d => {
            animateSlideIn(d, 'down')
        })

        up.forEach(u => {
            animateSlideIn(u, 'up')
        })

        gsap.fromTo(
            contactIcon,
            {
                y: -50,
            },
            {
                y: 0,
                stagger: 0.1,
                ease: "back.out"
            }
        )
    }, [])
    
    return (
        <div className="container">
            <Overlay />
            {/* .landing-container */}
            <Home /> 
            {/* .main-page */}
            <About />
        </div>
    )
}

export default App
