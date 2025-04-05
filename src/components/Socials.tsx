
function Socials() {
    return (
        <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/GitHubUser101521" target='_blank'>
                <img src="/github-logo.png" alt="Github" className="w-10 md:w-12 rounded-full contact-icon"/>
            </a>
            <img src="/gmail-logo.png" alt="Gmail" className="w-10 md:w-12 rounded-full border-2 border-gray-200 contact-icon cursor-not-allowed"/>
        </div>
    )
}

export default Socials
