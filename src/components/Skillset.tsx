
function Skillset() {
    const skills = ['html', 'css', 'express', 'github', 'zustand']

    const capitalize = (str: string) => {
        return str.slice(0, 1).toLocaleUpperCase() + str.slice(1, str.length)
    }

    return (
        <div className="flex flex-col p-10 justify-center items-center gap-12">
            {/* Top 3 */}
            <div className="flex items-end gap-6 justify-center">
                <div className="w-1/9 text-center">
                    <img src="/skillset/tailwind.png" alt="Tailwindcss" />
                    <p>Tailwindcss</p>
                </div>
                <div className="w-1/7 text-center">
                    <img src="/skillset/react.png" alt="React" />
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
                    <div className="w-1/9 text-center">
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
