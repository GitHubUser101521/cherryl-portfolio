import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'

type project = {
    id: number,
    title: string,
    description: string,
    imgUrl: string,
    gitUrl: string,
    webUrl: string,
    tech: string[]
}

function Projects() {
    const projects: project[] = [
        {
            id: 1,
            title: "Isa Charity's Web",
            description: "Recreation of Isa Charity's Web",
            imgUrl: "/projects/isa-charity.png",
            gitUrl: "https://github.com/GitHubUser101521/quiz-isa-charity",
            webUrl: "https://quiz-isa-charity.vercel.app/",
            tech: ['react', 'gsap', 'tailwind']
        },
        {
            id: 2,
            title: "Dessert Shop V2",
            description: "A challenge from Frontend Mentor (But better)",
            imgUrl: "/projects/dessert-shop.png",
            gitUrl: "https://github.com/GitHubUser101521/dessert-shop-v2",
            webUrl: "https://dessert-shop-v2.vercel.app/",
            tech: ['react', 'zustand', 'tailwind']
        },
        {
            id: 3,
            title: "Book Quest",
            description: "A project used to learn about API",
            imgUrl: "/projects/book-quest.png",
            gitUrl: "https://github.com/GitHubUser101521/book-quest",
            webUrl: "https://book-quest-chi.vercel.app/",
            tech: ['react', 'tailwind']
        },
        {
            id: 4,
            title: "Advice Generator",
            description: "With a simple click, you can get timeless advice! (Frontend Mentor)",
            imgUrl: "/projects/advice-generator.png",
            gitUrl: "https://github.com/GitHubUser101521/advice-generator",
            webUrl: "https://advice-generator-cherrylcallistacs-projects.vercel.app/",
            tech: ['react', 'axios', 'tailwind']
        },
        {
            id: 5,
            title: "Website OSIS Tri Ratna",
            description: "UI from Figma",
            imgUrl: "/projects/portfolio-osis-smk-triratna.png",
            gitUrl: "https://github.com/GitHubUser101521/portfolio-OSIS",
            webUrl: "https://osis-smk-triratna.vercel.app/",
            tech: ['react', 'gsap', 'tailwind']
        },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div id='projects' className='h-screen flex flex-col gap-20 sm:justify-around container-padding'>
            <div className='flex justify-around items-center'>
                <button className='button-prev swiper-btn gradient-yp'>{`<`}</button>
                <h1 className='text-center title slide-up'>Projects</h1>
                <button className='button-next swiper-btn gradient-py'>{`>`}</button>
            </div>
            
            <div>
                <Swiper
                    slidesPerView={windowWidth < 1024 ? 1 : 3} 
                    spaceBetween={30} 
                    loop={true} 
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '.button-prev',
                        nextEl: '.button-next',
                    }}
                    modules={[Pagination, Navigation]}
                >
                {
                    projects.map(p => (
                        <SwiperSlide key={p.id}>
                            <div className='flex flex-col gap-4 mb-12'>
                                <div className='border border-gray'>
                                    <a href={p.webUrl} target='_blank'>
                                        <img src={p.imgUrl} alt={p.title} />
                                    </a>
                                </div>

                                <div className='flex gap-2'>
                                {
                                    p.tech.map(t => (
                                        <span className='px-2 py-1 border border-black rounded-sm text-sm'>{ t }</span>
                                    ))
                                }
                                </div>
                               
                                <div className='flex items-center justify-between px-4'>
                                    <h2 className='font-bold text-2xl'>{ p.title }</h2>
                                    <div className='flex gap-4'>
                                        <a href={p.webUrl} target='_blank'>
                                            <img src="/link.png" alt="See Website" className='w-6 aspect-square'/>
                                        </a>
                                        <a href={p.gitUrl} target='_blank'>
                                            <img src="/github-logo.png" alt="See Github" className='w-6 aspect-square rounded-full' />
                                        </a>
                                    </div>
                                </div>

                                <p className='text-center px-8 break-words'>{ p.description }</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </div>
    )
}

export default Projects