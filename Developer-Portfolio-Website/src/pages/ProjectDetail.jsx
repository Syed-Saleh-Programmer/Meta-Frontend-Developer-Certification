import { useParams } from "react-router-dom"
import projects from "../data/projects"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ProjectDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [currentProject] = projects.filter(project => project.id == id)
    // console.log(currentProject)

  return (
    <div
    className="w-full min-h-screen px-6 sm:px-10 md:px-14 py-10 flex flex-col gap-10 bg-purple-700 "
    >
        {
            currentProject && (
                <div className="w-full max-w-[800px] flex flex-col gap-8">
                      <button
                      className="cursor-pointer"
                          onClick={() => navigate("/")}
                      >
                          <ArrowLeft size={30} color="#ffff" />
                      </button>
                      <img src={currentProject.imageUrl} alt={currentProject.title}
                          className="w-full aspect-video rounded-lg"
                      />
                      <h1
                      className="text-3xl font-semibold text-white"
                      >
                        {currentProject.title}
                      </h1>
                      <p
                      className="text-base text-stone-300"
                      >
                        {currentProject.description}
                      </p>
                </div>
            )
        }
    </div>
  )
}

export default ProjectDetail