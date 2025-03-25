import { useEffect } from 'react'
import { animateTyping } from '../utils/gsapFunctions'
import gsap from 'gsap'

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
            'Mencari kesempatan untuk mengasah keterampilan dan menerapkan pengetahuan RPL dalam proyek nyata.',
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
            <div className="landing-container">
                <div className=" w-1/2 flex flex-col justify-between h-full">
                    <div>
                        <h1 className="title slide-down">Greetings,</h1>
                        <h1 className="title slide-up">I'm <span className="text-gradient-yp"></span></h1>

                        <p className="mt-8 w-3/4 text-lg animateType2">
                            
                        </p>
                    </div>

                    <div>
                        <button className="bg-pink flex items-center gap-2 text-white text-lg font-bold px-4 py-2 rounded-lg slide-down">
                            Download CV
                            <div>
                                <img src="/down-arrow.png" className="w-4" />
                            </div>
                        </button>
                        
                        <div className="flex items-center gap-4 mt-8">
                            <a href="https://github.com/GitHubUser101521" target='_blank'>
                                <img src="/github-logo.png" alt="Github" className="w-12 rounded-full contact-icon"/>
                            </a>
                            <img src="/gmail-logo.png" alt="Gmail" className="w-12 rounded-full border-2 border-gray-200 contact-icon"/>
                        </div>
                    </div>
                </div>
                
                {/* <div className="gradient-yp -rotate-80 w-screen h-screen -translate-y-1/2 translate-x-1/6 overflow-hidden">sd</div> */}
                <div className='absolute -z-10 top-0 right-0'>
                    <img src="/landing-bg.png" />
                </div>
                <div className='absolute bottom-1/4 right-20 w-1/3 flex justify-center'>
                    <img src="/placeholder.png" className='slide-down w-2/3'/>
                    <div className='bg-yellow absolute bottom-0 rounded-lg'>
                        <p className='text-white font-bold px-4 py-2 text-lg animateType1'></p>
                    </div>
                </div>
            </div>

            <div className='scroll-down'>
                <button className='bg-yellow rounded-full'>
                    <img src="/down-arrow.png" className='w-12'/>
                </button>
            </div>
        </>
    )
}

export default LandingPage
