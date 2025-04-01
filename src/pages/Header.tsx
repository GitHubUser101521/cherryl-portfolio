import { useEffect, useState } from "react"
import gsap from 'gsap'

function Overlay() {
    const [openMenu, setOpenMenu ] = useState(false)

    useEffect(() => {
        gsap.fromTo(
            '.animate-menu',
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                stagger: 0.1,
                opacity: 1
            }
        )

        return () => gsap.killTweensOf('.animate-menu')
    })

    return (
        <div className="header">
            { openMenu && <div className="h-screen w-full bg-black opacity-65 fixed top-0 left-0 sm:hidden"></div>}
            <p className="font-bold text-xl">
                CCC
                <span className="color-pink font-extrabold text-lg">.</span>
            </p>
            <div className="hidden sm:flex sm:gap-8 sm:text-lg">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="sm:hidden relative">
                <img 
                    src="/burger-icon.png" 
                    alt="Menu" 
                    className="w-6"
                    onClick={() => setOpenMenu(!openMenu)}
                />

                {
                    openMenu &&
                        <div 
                            className="flex flex-col p-4 pr-12 gap-4 absolute right-4 bg-white"
                            onClick={() => setOpenMenu(false)}
                        >
                            <a href="#home" className="animate-menu">Home</a>
                            <a href="#about" className="animate-menu">About</a>
                            <a href="#projects" className="animate-menu">Projects</a>
                            <a href="#contact" className="animate-menu">Contact</a>
                        </div>
                }
            </div>
        </div>
    )
}

export default Overlay
