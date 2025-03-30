import { useEffect } from "react"
import gsap from 'gsap'

function Skillset() {
    const skills = ['html', 'css', 'express', 'github', 'zustand']

    const capitalize = (str: string) => {
        return str.slice(0, 1).toLocaleUpperCase() + str.slice(1, str.length)
    }

    useEffect(() => {
        gsap.to('.react',
            {
                rotate: 360,
                repeat: -1,
                ease: 'linear',
                duration: 5
            }
        )

        gsap.to('.tailwindcss',
            {
                x: -10,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
            }
        )

        gsap.fromTo(
            '.animate',
            {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                stagger: 0.2,
                ease: "bounce.out",
                opacity: 1
            }
        )
    }, [])

    return (
        <div className="flex flex-col p-10 justify-center items-center gap-12">
            {/* Top 3 */}
            <div className="flex items-end gap-6 justify-center">
                <div className="w-1/9 text-center">
                    <img src="/skillset/tailwind.png" alt="Tailwindcss" className="tailwindcss"/>
                    <p>Tailwindcss</p>
                </div>
                <div className="w-1/7 text-center">
                    <img src="/skillset/react.png" alt="React" className="react"/>
                    <p>React</p>
                </div>
                <div className="w-1/9 text-center">
                    <img src="/skillset/javascript.png" alt="Javascript" />
                    <p>Javascript</p>
                </div>
            </div>

            <div className="flex gap-4 flex-wrap justify-between">
            {
                skills.map(s => (
                    <div className="w-1/9 text-center animate">
                        <img src={`/skillset/${s}.png`} alt={capitalize(s)} />
                        <p>{capitalize(s)}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Skillset
