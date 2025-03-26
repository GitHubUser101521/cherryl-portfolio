import { useState } from "react"
import { EducationHistory, Skillset } from '../components/Components'

function About() {
    const [ activeBtn, setActiveBtn ] = useState(1)

    const handleButtonClick = (buttonIndex: number) => {
        setActiveBtn(buttonIndex);
    };

    const renderShowcase = (active: number) => {
        if (active === 1) {
            return <Skillset />
        } else if (active === 2) {
            return <EducationHistory />
        } else {
            return <div className="w-full h-full flex items-center justify-center">
                Page not found
            </div>
        }
     }

    return (
        <div id="about" className='gradient-py h-screen main-page px-40 py-20 pt-30 flex gap-4'>
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
            </div>

            <div className="showcase">
                {renderShowcase(activeBtn)}
            </div>
        </div>
    )
}

export default About
