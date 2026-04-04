import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="bg-[url('/bg_projects.jpg')] bg-cover bg-center flex flex-col px-15 py-15">
      <div className="flex flex-row justify-between items-start align-center">
        <h2 className="font-outfit-bold text-[64px] text-[#FDB12F] m-0 w-full">
          SELECTED PROJECTS
        </h2>
        <p className="text-[24px] font-outfit-regular text-white w-8/7">
          A collection of projects demonstrating practical problem-solving,
          clean design, and efficient development. Each case reflects a
          structured approach, from understanding requirements to delivering
          functional, user-focused solutions.
        </p>
      </div>

      <div className="mt-36 flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group p-4 grid grid-cols-[1fr_40px_600px] items-center gap-8 hover:bg-[#FDB12F] transform transition-all duration-100 hover:translate-x-2 border-2 border-white/20"
          >
            {/* Left side */}
            <div className="flex items-center gap-10">
              <div className="py-8 px-12 bg-[#192B39]">
                <p className="text-white text-[32px] font-outfit-light">
                  {project.id}
                </p>
              </div>
              <h2 className="text-white text-[32px] font-outfit-light group-hover:text-[#192b39]">
                {project.title}
              </h2>
            </div>

            {/* Divider (center column) */}
            <div className="flex justify-center">
              <div className="w-0.5 h-10 bg-white group-hover:bg-[#192b39]"></div>
            </div>

            {/* URL (right column, LEFT-aligned) */}
            <div className="flex justify-start">
              <p className="text-white font-outfit-light text-[32px] group-hover:text-[#192b39]">
                {project.url}
              </p>
            </div>
            <div
              className="hidden lg:block absolute top-5 right-20 opacity-0 scale-75 translate-y-5 
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 rotate-5"
            >
              <img
                src={project.img}
                alt={`${project.title} preview`}
                className="w-120 h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects