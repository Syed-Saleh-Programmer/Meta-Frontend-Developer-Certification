import { useNavigate } from "react-router-dom"

const ProjectCard = ({project}) => {

  const navigate = useNavigate()

  function handleClick(){
    navigate(`/project/${project.id}`)
  }

  return (
    <div
    className="w-[320px] h-fit rounded-md flex flex-col gap-3 p-4 bg-white hover:-translate-y-[6px] transition-all"
    >
      <img src={project.imageUrl} alt={project.title}
      className="w-full aspect-video rounded-md"
      />
      <h2
      className="text-xl font-semibold"
      >
        {project.title}
      </h2>
      <p
      className="text-sm"
      >
        {project.description.slice(0,70)}
      </p>
      <button
      className="w-fit hover:underline underline-offset-2 cursor-pointer px-3 py-2 rounded bg-purple-700 text-white text-sm"
      onClick={handleClick}
      >
        see more
      </button>
    </div>
  )
}

export default ProjectCard