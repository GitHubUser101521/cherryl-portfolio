import { useState } from "react"
import { EducationHistory, Skillset, Certificates } from '../components/Components'
import MobileExperience from "./MobileExperience";

function About() {
    const [ activeBtn, setActiveBtn ] = useState(1)

    const handleButtonClick = (buttonIndex: number) => {
        setActiveBtn(buttonIndex);
    };

    const capitalize = (str: string) => {
        return str.slice(0, 1).toLocaleUpperCase() + str.slice(1, str.length)
    }

    const renderShowcase = (active: number) => {
        if (active === 1) {
            return <Skillset capitalize={capitalize}/>
        } else if (active === 2) {
            return <EducationHistory />
        } else if (active === 3) {
            return <Certificates />
        } else {
            return <div className="w-full h-full flex items-center justify-center">
                Page not found
            </div>
        }
     }

    return (
        <div id="about" className='gradient-py w-full lg:h-screen flex gap-4 pt-20 p-8 md:p-20 lg:p-40 h-screen'>
            <div className="hidden md:flex md:flex-col lg:flex-row gap-4 h-full w-full">
                <div className="navigation-bar">
                    <button
                        className={`pop-btn ${activeBtn === 1 ? 'italic active-btn' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Skillset
                    </button>

                    <button
                        className={`pop-btn ${activeBtn === 2 ? 'italic active-btn' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        History of Education
                    </button>

                    <button
                        className={`pop-btn ${activeBtn === 3 ? 'italic active-btn' : ''}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        Experience
                    </button>
                </div>

                <div className="showcase">
                    {renderShowcase(activeBtn)}
                </div>
            </div>

            <div className="md:hidden">
                <MobileExperience capitalize={capitalize}/>
            </div>
        </div>
    )
}

export default About
