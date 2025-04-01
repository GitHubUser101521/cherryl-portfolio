import Certificates from "../components/Certificates"
import EducationHistory from "../components/EducationHistory"

type MobileExperience = {
    capitalize: (str: string) => string
}

function MobileExperience({ capitalize }: MobileExperience) {
    const skills = ['tailwind', 'react', 'javascript', 'html', 'css', 'express', 'github', 'zustand']

    return (
        <div className="flex flex-col gap-4">
            {/* Skillset */}
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-center text-2xl font-bold mb-6 active-btn py-4">Skillset</h1>

                <div className="grid grid-cols-4 gap-4">
                {
                    skills.map(s => (
                        <img src={`/skillset/${s}.png`} alt={capitalize(s)} key={s}/>
                    ))
                }
                </div>
            </div>

            {/* Education */}
            <div className="bg-white p-4 rounded-lg">
                <h1 className="text-center text-2xl font-bold mb-6 active-btn py-4">Education</h1>
                <EducationHistory />
            </div>

            {/* Experience */}
            <div className="bg-white p-4 rounded-lg">
                <h1 className="text-center text-2xl font-bold mb-6 active-btn py-4">Experience</h1>
                <Certificates />
            </div>
        </div>
    )
}

export default MobileExperience
