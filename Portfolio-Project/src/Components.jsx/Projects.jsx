import Contact from "./Contact"
import {Link } from "react-router-dom"
import project5 from "../images/project5.png"
import project1 from "../images/project1.png"
import project4 from "../images/project4.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"


const Projects = () => {
return(

        <div className="animate-fadeIn ">
    <h2 className="text-center text-4xl font-bold mb-8 underline decoration-blue-500 underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600 ">
        My Projects
    </h2>

    
    
    <div className="p-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="group bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img src={project5} alt="Project Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 group-hover:opacity-90" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">Movie app</h3>
            <a href="https://fe-capstone-project-3cm6.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                View Project
            </a>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img src={project1} alt="Project Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 group-hover:opacity-90" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">Contact Page</h3>
            <a href="https://form-page-rosy.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                View Project
            </a>
        </div>

        {/* Project Card 3 */}
        <div className="group bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img src={project4} alt="Project Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 group-hover:opacity-90" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">To-do list App</h3>
            <a href="https://dynamic-to-do-list-js-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                View Project
            </a>
            </div>

        {/* Project Card 4 */}
        <div className="group bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img src={project2} alt="Project Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 group-hover:opacity-90" />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">Studio Landing page </h3>
        <a  href="https://loop-studios-page-virid.vercel.app" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 hover:scale-105 hover:shadow-lg  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View Project</a> 
        </div>

         {/* Project Card 5 */}
        <div class="bg-white border mb-4 border-gray-200 rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img src={project3} alt="Project Thumbnail" class="w-full h-48 object-cover rounded-lg mb-4  transition duration-500 group-hover:opacity-90"></img>
        <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">News Home Landing page</h3>
        <a  href="https://news-hom-page.vercel.app" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 hover:scale-105 hover:shadow-lg  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View Project</a> 
        </div>

        </div>


   

    {/* Contact Button with Shine Animation */}
    <div className="text-center mt-8">
        <button className="relative bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600 transform transition duration-300 ease-in-out hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></span>
            <Link to="/contact" element={<Contact />}>Let's Connect!</Link>
        </button>
    </div>
</div>

)
}
export default Projects