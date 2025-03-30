import { useEffect } from "react"
import gsap from 'gsap'

type Education = {
    level: string,
    year: string,
    school: string
}

function Education({ level, year, school }: Education) {
    useEffect(() => {
        gsap.fromTo(
            '.animate',
            {
                x: -30,
                opacity: 0
            },
            {
                x: 0,
                stagger: 0.2,
                ease: "power1.out",
                opacity: 1
            }
        )
    }, [])
    
    return (
        <div className="education animate">
            <p className="opacity-65">{ year }</p>
            <div className="color-pink font-bold text-lg">
                { level }
            </div>
            <p>{ school }</p>
        </div>
    )
}

function EducationHistory() {
    const education = [
        {
            level: 'SD',
            year: '2016 - 2022',
            school: "Dharma Budhi Bhakti"
        },
        {
            level: 'SMP',
            year: '2022 - 2025',
            school: "Tri Ratna"
        },
        {
            level: 'SMK',
            year: '2025 - now',
            school: "Tri Ratna"
        }
    ]

    return (
        <div className="w-full h-full flex flex-col gap-6 p-4">
        {
            education.map(e => (
                <Education {...e} />
            ))
        }
        </div>
    )
}

export default EducationHistory
