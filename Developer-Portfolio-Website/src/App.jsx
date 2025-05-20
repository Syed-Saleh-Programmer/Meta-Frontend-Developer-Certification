import projects from "./data/projects"
import Navbar from './components/Navbar';
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";



const App = () => {
  return (
    <div
    className="w-screen absolute top-0 left-0 h-fit"
    >
      <Navbar />
      <div
      className='w-full min-h-[650px] h-fit flex flex-col justify-center items-center bg-blue-900'
      >
        <div
        className='w-fit max-w-[320px] sm:max-w-[500px] flex flex-col justify-center items-center text-center gap-3 text-stone-100'
        >
          <img src="https://avatars.githubusercontent.com/u/129444178?v=4" alt="Syed Muhammad Saleh" 
          className="w-[100px] h-[100px] rounded-full"
          />
          <h1
          className="text-3xl font-semibold leading-normal"
          >
            I'm Syed Saleh a Frontend Developer Specialised in Reat.
          </h1>
          <p
          className="text-sm font-semibold w-fit px-3 py-2 rounded-full bg-purple-700"
          >
            Meta Certfied
          </p>
          <p
          className="text-sm text-stone-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam soluta ipsum porro? Sint, ratione, nemo tempore rem culpa enim vero deserunt deleniti.
          </p>
        </div>
      </div>
      {/* Featured projects */}
      <div
        className="w-full min-h-[450px] h-fit flex flex-col bg-purple-700 px-6 sm:px-10 md:px-16 py-10 items-center"
        id="projects"
      >
        <h1
        className="text-2xl font-semibold text-white mb-14"
        >
          Featured Projects
        </h1>
        <div
        className="w-full flex flex-row flex-wrap gap-6 justify-center"
        >
          {
            projects && projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          }
        </div>
      </div>

      <div
        className="w-full min-h-[450px] h-fit flex flex-col bg-cyan-700 px-6 sm:px-10 md:px-16 py-10 justify-center items-center"
        id="contact"
      >
        <ContactForm />
      </div>

      <div
        className="w-full h-fit flex flex-col bg-black px-6 sm:px-10 md:px-16 py-10 justify-center items-center text-white"
      >
        Made with ❤ for &copy; Meta Frontend Certification
      </div>

    </div>
  )
}

export default App