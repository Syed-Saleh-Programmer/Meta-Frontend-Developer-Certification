import {
  Github,
  Instagram,
  Linkedin,
} from "lucide-react"

const Navbar = () => {
  return (
    <div className="w-full sticky top-0  flex flex-col z-50">
      <div
        className="w-full flex flex-row justify-between px-6 md:px-12 bg-black py-2"
      >
        <h2
          className="text-white text-lg font-semibold"
        >
          Syed M Saleh
        </h2>
        <nav className="flex flex-row gap-4 items-center text-stone-300 text-xs font-semibold">
          <a href="/#projects"
            className="hover:bg-purple-700 hover:text-white p-2 rounded"
          >
            Projects
          </a>
          <a href="/#contact"
            className="hover:bg-purple-700 hover:text-white p-2 rounded"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="w-full bg-blue-400 flex flex-row gap-4 justify-end px-6 md:px-14 items-center py-2 text-black">
        <a href="https://github.com/Syed-Saleh-Programmer/" target="blank">
          <Github size={22} />
        </a>
        <a href="https://linkedin.com/in/syed-muhammad-saleh/" target="blank">
          <Linkedin size={22} />
        </a>
        <a href="https://instagram.com/s_saleh.dev/" target="blank">
          <Instagram size={22} />
        </a>
      </div>
    </div>
  )
}

export default Navbar