import { projects } from "@data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className=" mt-8 max-w-full scroll-mt-24 px-8 lg:px-16">
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Projects
      </h1>

      <ul className="mt-4 flex items-center justify-center  py-4 lg:py-8 ">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;