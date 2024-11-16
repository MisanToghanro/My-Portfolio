import Projects from "./Projects"
import { Link } from "react-router-dom"
import htmllogo from "../images/htmllogo.png"
import csslogo from "../images/csslogo2.png"
import jslogo from "../images/jslogo.png"
import reactlogo from "../images/reactlogo2.png"
import tailwindlogo from "../images/tailwindlogo.png"
const Skills = () => {

    return(
        <div className="min-h-screen  text-gray-100 flex flex-col items-center py-10 px-4 animate-fadeIn">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600 ">
            My Skills
        </h1>
    
        <p className="mb-8 text-center max-w-2xl">
            I’m familiar with essential front-end technologies to build scalable and responsive applications. Here’s a quick snapshot of my capabilities:
        </p>
    
        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center p-4 max-w-5xl">
            
            {/* Skill Card */}
            <div className="flex flex-col items-center shadow-lg shadow-blue-700 bg-white hover:scale-105 rounded-lg p-6 cursor-pointer transform transition-transform duration-300 fade-in-up delay-100">
                <img src={htmllogo} alt="HTML Logo" className="w-20 h-20 mb-4 shadow-md rounded-full border-2 border-indigo-400" />
                <h2 className="text-lg font-semibold text-black border-b-2 border-indigo-500 pb-1">HTML</h2>
                <p className="text-gray-600 mt-2">The foundation of my web development journey.</p>
            </div>
    
            <div className="flex flex-col items-center shadow-lg shadow-blue-700 bg-white hover:scale-105 rounded-lg p-6 cursor-pointer transform transition-transform duration-300 fade-in-up delay-200">
                <img src={csslogo} alt="CSS Logo" className="w-20 h-20 mb-4 shadow-md rounded-full border-2 border-indigo-400" />
                <h2 className="text-lg font-semibold text-black border-b-2 border-indigo-500 pb-1">CSS</h2>
                <p className="text-gray-600 mt-2">Bringing style and elegance to web interfaces.</p>
            </div>
    
            <div className="flex flex-col items-center shadow-lg shadow-blue-700 bg-white hover:scale-105 rounded-lg p-6 cursor-pointer transform transition-transform duration-300 fade-in-up delay-300">
                <img src={jslogo} alt="JavaScript Logo" className="w-20 h-20 mb-4 shadow-md rounded-full border-2 border-indigo-400" />
                <h2 className="text-lg font-semibold text-black border-b-2 border-indigo-500 pb-1">JavaScript</h2>
                <p className="text-gray-600 mt-2">Adding interactivity to make web experiences dynamic.</p>
            </div>
    
            <div className="flex flex-col items-center shadow-lg shadow-blue-700 bg-white hover:scale-105 rounded-lg p-6 cursor-pointer transform transition-transform duration-300 fade-in-up delay-400">
                <img src={reactlogo} alt="React Logo" className="w-20 h-20 mb-4 shadow-md rounded-full border-2 border-indigo-400" />
                <h2 className="text-lg font-semibold text-black border-b-2 border-indigo-500 pb-1">React</h2>
                <p className="text-gray-600 mt-2">Building fast, scalable web applications.</p>
            </div>
    
            <div className="flex flex-col items-center shadow-lg shadow-blue-700 bg-white hover:scale-105 rounded-lg p-6 cursor-pointer transform transition-transform duration-300 fade-in-up delay-500">
                <img src={tailwindlogo} alt="Tailwind CSS Logo" className="w-20 h-20 mb-4 shadow-md rounded-full border-2 border-indigo-400" />
                <h2 className="text-lg font-semibold text-black border-b-2 border-indigo-500 pb-1">Tailwind CSS</h2>
                <p className="text-gray-600 mt-2">Efficient, utility-first styling for responsive design.</p>
            </div>
        </div>
    
        {/* Call to Action Button */}
        <div className="mt-12 text-center">
            <p className="mb-4 text-lg font-medium text-gray-300">These skills empower me to craft functional, responsive web applications. Curious to see them in action?</p>
            <button className="relative inline-flex items-center justify-center overflow-hidden text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 mt-3 transition-transform transform hover:scale-105 shadow-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></span>
                <Link to="/projects" element={<Projects />}>View My Projects</Link>
                <span className="ml-2 text-lg">→</span>
            </button>
        </div>
    </div>
    
    
    )
}
export default Skills