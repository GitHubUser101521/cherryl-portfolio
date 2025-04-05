import { useEffect } from 'react'
import { animateTyping } from '../utils/gsapFunctions'
import gsap from 'gsap'
import Socials from '../components/Socials'

function LandingPage() {
    useEffect(() => {
        animateTyping(
            '.text-gradient-yp',
            'Cherryl Callista',
            2
        )

        animateTyping(
            '.animateType1',
            'Front-end Developer',
            2
        )

        animateTyping(
            '.animateType2',
            'Sedang menjalani edukasi SMK jurusan RPL. Seorang bilingual, Bahasa dan English, dan sedang mempelajari Mandarin sebagai bahasa ketiga. Mencari kesempatan untuk mengasah keterampilan dan menerapkan pengetahuan RPL dalam proyek nyata.',
            2
        )

        gsap.fromTo(
            '.scroll-down',
            {
                y: -30,
            },
            {
                y: 0,
                opacity: 1,
                ease: "bounce.out",
                duration: 1,
                yoyo: true,
                repeat: -1
            }
        )

    }, [])

    return (
        <>
            <div id="home" className="container-padding h-screen flex flex-col justify-center py-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
                    <div className='gradient-py border-2 border-black rounded-full aspect-square w-2/3 lg:max-w-1/3'>
                        <img src="/placeholder.png" alt="Me" className='aspect-square rounded-full'/>
                    </div>

                    <div className='flex-gap-12'>
                        <div>
                            <h1 className="title slide-down hidden sm:flex">Greetings,</h1>
                            <h1 className="title slide-up">I'm <span className="text-gradient-yp"></span></h1>

                            <p className="text-sm my-8 md:text-lg animateType2">
                                
                            </p>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <button style={{ cursor: "not-allowed" }}className="bg-pink flex items-center gap-2 text-white text-lg font-bold px-4 py-2 rounded-lg slide-down w-fit">
                                Download CV
                                <div>
                                    <img src="/down-arrow.png" className="w-4" />
                                </div>
                            </button>
                            
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>

            <div className='scroll-down'>
                <a href="#about">
                    <button className='bg-yellow rounded-full'>
                        <img src="/down-arrow.png" className='w-8 md:w-12'/>
                    </button>
                </a>
            </div>
        </>
    )
}

export default LandingPage
