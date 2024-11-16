
const Contact = () => {

    return(
<div className="text-center min-h-screen max-w-md md:mx-auto bg-gray-100 p-8 rounded-md shadow-lg sm:mx-5 ">
    <h2 className="text-3xl font-bold mb-4 text-blue-600">Let’s Connect!</h2>
    <p className="mb-3 text-gray-700">
        I’m excited to learn and grow as a tech professional, and I’m always open to connecting with others in the industry.
    </p>
    <p className="mb-3 text-gray-700">Whether you’re interested in collaborating, networking, or simply chatting about tech.</p>
    <p className="text-gray-600 mb-6">
        Feel free to reach out through any of the options below:
    </p>

    <ul className="flex  gap-4 items-center justify-center mt-6 animate-fadeIn">
        <li>
            <a href="https://wa.me/2349155307459" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 transition duration-300">
                 WhatsApp
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/misan-toghanro/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 transition duration-300">
                LinkedIn
            </a>
        </li>
        <li>
            <a href="mailto:tmisan657@gmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                Gmail
            </a>
        </li>
        <li>
            <a href="https://github.com/MisanToghanro" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 transition duration-300">
                 GitHub
            </a>
        </li>
    </ul>
</div>

    
    )
}
export default Contact