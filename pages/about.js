import Navbar from "../components/Navbar"
import Footer2 from "../components/Footer2"
import Image from "next/image"
import Services3 from "../components/services3"
import Process3 from "../components/process3"
import Team from "../components/Team2"
import Testimonials from "../components/Testimonials2"
import Awards from "../components/Awards"

export default function About() {
    return(
        <div>
            <Navbar/>
            {/* Hero */}
            <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 mt-20 md:mt-24 py-8 md:py-10 max-w-[1440px] m-auto items-start justify-start">
                    <div className="flex items-center gap-3 mb-10 text-base text-gray-700">
                    <span>Home</span>

                    {/* Connector */}
                    <div className="flex items-center ">
                        {/* Left diamond */}
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                        </svg>

                        {/* Line */}
                        <div className="w-4 h-[1px] bg-black dark:bg-white"></div>

                        {/* Right diamond */}
                        <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                        </svg>
                    </div>

                    <span>About Company</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Your Trusted Partner In<br/> Creative Digital Success</h2>
                    <ul className="space-y-6 text-gray-700 ml-0 md:ml-14 md:pl-16 mt-5 max-w-full">
                    <li className="flex gap-4">
                        <div className="flex flex-col items-center ">
                            <svg width="6" height="6" viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>

                            <div className="w-[1px] flex-1 bg-black dark:bg-white"></div>

                            <svg width="6" height="6"viewBox="0 0 10 10">
                            <path d="M5 0L10 5L5 10L0 5Z" className="fill-black dark:fill-white" />
                            </svg>
                        </div>
                        {/* Text */}
                        <p className="leading-relaxed text-lg">
                        We empower startups and enterprises through creative <br/> strategies and cutting-edge digital solutions.
                        </p>
                    </li>
                    </ul>
            </div>
            <div className="w-full  h-[80vh] mt-20">
                        <video
                            src="/images/home4-banner-video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
            </div>

            {/* ABOUT */}
            <div className="py-12 md:py-20 px-4 sm:px-8 md:px-16 max-w-[1440px] m-auto">
                {/* ABOUT */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 h-fit py-8 md:py-10 mb-10">
                    {/* LEFT */}
                    <div className="w-full lg:w-[35%]">
                        <h2 className="mb-3 rounded-full px-2 py-0.5 border-[0.1px] border-green-400 w-fit">
                            About Softro
                        </h2>
                        <div className='relative flex flex-col justify-center items-center w-fit mt-10 md:mt-16 mx-auto lg:mx-0'>
                            <img src='/icons/banner-global-icon.gif ' alt='globe' className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]'/>
                            <img src='/images/awards.png' alt='award' className='w-[120px] h-[120px] md:w-[140px] md:h-[140px] -mt-10 md:-mt-12 md:-mr-52 max-lg:mr-0'/>
                        </div>
                    </div>
                     {/* RIGHT */}
                    <div className="w-full lg:w-[65%]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium w-full lg:w-[95%]">We Develop Innovative Digital Solutions That Enhance Software Development, Cloud & DevOps Etc.</h2>
                        <div className="flex items-center gap-3 mt-8">
                        <div className="flex -space-x-4">
                            {[
                            { img: "/images/counter-people-img1.png", name: "JD" },
                            { img: "/images/counter-people-img2.png", name: "AM" },
                            { img: "/images/counter-people-img3.png", name: "SK" },
                            ].map((user, i) => (
                            <div
                                key={i}
                                className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden"
                            >
                                <Image src={user.img} alt={user.name} fill className="object-cover" />
                            </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-lg text-black dark:text-white">
                            we've already <span className="font-bold">20k+</span>
                            </p>
                            <p className="text-black dark:text-gray-200">active users</p>
                        </div>
                        </div>
                        <p className="w-full max-w-2xl mt-5 text-base md:text-lg text-gray-600 md:ml-28">We're a team of engineers, designers, and visionaries<br className="hidden md:inline"/> passionate about solving real-world problems with cutting-edge<br className="hidden md:inline"/> technology.</p>
                        <a
                            href="#"
                            className="inline-flex mt-5 md:ml-28 bg-[#C8F8A9] text-black items-center gap-2 px-6 py-3 rounded-xl text-base md:text-lg font-light hover:opacity-90"
                        >
                            Get a free Consultation
                            <Image src="/images/arrow.svg" alt="arrow" width={20} height={20} />
                        </a>
                    </div>
                </div>

                {/* STATS */}
                <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 border-t-[0.1px] border-gray-400/30">
                    <div className="border-r-[0.1px] border-b md:border-b-0 border-gray-400/30 gap-4 flex items-center justify-center py-8 md:py-10 px-2">
                        <div className="flex items-end gap-5 justify-end ">
                            <h2 className="text-6xl md:text-6xl">12</h2>
                            <h2>Years<br/> of Experience</h2>
                        </div>
                    </div>
                    <div className="border-r-[0.1px] border-b md:border-b-0 border-gray-400/30 gap-4 flex items-center justify-center py-8 md:py-10 px-2">
                        <div className="flex items-end gap-5 justify-end ">
                            <h2 className="text-6xl md:text-6xl">5</h2>
                            <h2>Industry <br/>Awards</h2>
                        </div>
                    </div>
                    <div className="border-r-[0.1px] border-gray-400/30 gap-4 flex items-center justify-center py-8 md:py-10 px-2">
                        <div className="flex items-end gap-5 justify-end ">
                            <h2 className="text-6xl md:text-6xl">2K</h2>
                            <h2>Global Clients<br/>Served</h2>
                        </div>
                    </div>
                    <div className="gap-4 flex items-center justify-center py-8 md:py-10 px-2">
                        <div className="flex items-end gap-5 justify-end ">
                            <h2 className="text-6xl md:text-6xl">3K</h2>
                            <h2>Users<br/> Engaged</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* {SERVICES} */}
            <Services3/>


            <div className="px-2">
                {/* PROCESS */}
                <Process3/>
                
                {/* TEAM */}
                <Team/>

                {/* TESTIMONIAL */}
                <Testimonials/>

                <Awards/>
            </div>
            <div className="p-3">
                <Footer2/>
            </div>
            
        </div>
    )
}