
const Contact = () => {

    return(
<div class="text-center min-w-screen max-w-md md:mx-auto bg-gray-100 p-8 rounded-md shadow-lg sm:mx-5 ">
    <h2 class="text-3xl font-bold mb-4 text-blue-600">Let’s Connect!</h2>
    <p class="mb-3 text-gray-700">
        I’m excited to learn and grow as a tech professional, and I’m always open to connecting with others in the industry.
    </p>
    <p class="mb-3 text-gray-700">Whether you’re interested in collaborating, networking, or simply chatting about tech.</p>
    <p class="text-gray-600 mb-6">
        Feel free to reach out through any of the options below:
    </p>

    <ul class="flex gap-4 items-center justify-center mt-6 animate-fadeIn">
        <li>
            <a href="https://wa.me/2349155307459" target="_blank" rel="noopener noreferrer" 
               class="text-blue-600 hover:text-blue-800 transition duration-300">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/misan-toghanro/" target="_blank" rel="noopener noreferrer" 
               class="text-blue-600 hover:text-blue-800 transition duration-300">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
        </li>
        <li>
            <a href="mailto:tmisan657@gmail.com" class="text-blue-600 hover:text-blue-800 transition duration-300">
                <i class="fas fa-envelope"></i> Gmail
            </a>
        </li>
        <li>
            <a href="https://github.com/MisanToghanro" target="_blank" rel="noopener noreferrer" 
               class="text-blue-600 hover:text-blue-800 transition duration-300">
                <i class="fab fa-github"></i> GitHub
            </a>
        </li>
    </ul>
</div>

    
    )
}
export default Contact