import Socials from "../components/Socials"

function Contact() {
    const phoneNum = "(+62) 813 1777 9538"
    const email = "cherrylcallistacheniago@gmail.com"

    return (
        <div id="contact" className="h-screen w-full flex justify-center items-center gradient-yp gap-4 container-padding">
            <div className="flex flex-col lg:flex-row gap-16 bg-white p-12 rounded-lg items-center">
                <div className="border-2 border-black aspect-square w-60">
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-4xl">Contact Me</h1>
                    
                    <div className="flex flex-col gap-6">
                        <p className="text-gray-600">
                            Sekolah Tri Ratna, Jl. Talib I No.35 37, RT.9/RW.7, Krukut, Taman Sari, West Jakarta City, Jakarta 11140
                        </p>

                        <div className="color-pink font-medium">
                            <p>{ phoneNum }</p>
                            <p>{ email }</p>
                        </div>

                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
