import { useEffect } from "react"
import { Home, Experience, Overlay, Contact, Projects } from "./pages/Pages"
import { animateSlideIn, animateScrollTrigger } from "./utils/gsapFunctions"
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const down = document.querySelectorAll('.slide-down')
        const up = document.querySelectorAll('.slide-up')
        const right = document.querySelectorAll('.slide-right')
        const contactIcon = document.querySelectorAll('.contact-icon')

        down.forEach(d => {
            animateScrollTrigger(d, 'down')
        })

        up.forEach(u => {
            animateScrollTrigger(u, 'up')
        })

        right.forEach(r => {
            animateScrollTrigger(r, 'right')
        })

        gsap.fromTo(
            contactIcon,
            {
                y: -50,
            },
            {
                y: 0,
                stagger: 0.2,
                ease: "back.out"
            }
        )
    }, [])
    
    return (
        <div className="container">
            <Overlay />
            <Home /> 
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
