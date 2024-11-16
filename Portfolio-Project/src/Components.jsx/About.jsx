
import Skills from "./Skills"
import profileImg from "../images/profileImg.png"

import { Link } from "react-router-dom"

const About = () => {


    return(
        <div className="min-h-screen  text-white flex sm:flex-col items-center">
        <h1 className="text-5xl font-extrabold text-center mt-10 md:mt-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600 animate-fadeIn">
            Welcome to My Portfolio
        </h1>
    
        <div className="p-6 mx-auto mt-8 bg-slate-800  text-gray-300 sm:text-md md:flex justify-center shadow-lg shadow-blue-700 rounded-md md:m-20 max-w-4xl animate-slideInLeft delay-300">
            
            {/* Profile Image */}
            <div className="flex justify-center items-center md:w-1/3">
                <img src={profileImg} alt="Profile Image" 
                     className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-lg transition-transform transform hover:scale-105" />
            </div>
    
            {/* Text Content */}
            <div className="text-center md:text-left sm:text-left md:w-2/3 md:text-lg sm:text-md sm:mt-5 mt-8 px-4 md:px-8 flex flex-col justify-center">
                <p className="leading-relaxed text-gray-100">
                    Hey there! I’m Misan, a Front-End Developer who loves bringing designs to life with clean, responsive, and user-friendly code. 
                    After completing a six-month training program with ALX, I’ve gained hands-on experience crafting websites that don’t just look 
                    good but also deliver a smooth, enjoyable user experience. From seamless API integration to dynamic, mobile-friendly layouts, 
                    I’m all about creating web applications that make an impact.
                </p>
    
                <div className="mt-8 text-center md:text-left">
                    <p className="mb-4 font-semibold text-gray-200">Ready to dive in? Click below to explore my skills!</p>
                    
                    {/* Button */}
                    <button className="relative inline-flex items-center justify-center overflow-hidden text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 mt-3 transition-transform transform hover:scale-105 shadow-lg">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shine"></span>
                        <Link to="skills" element={<Skills />}>Explore My Skills</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    


    )
}
export default About