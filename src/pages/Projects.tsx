import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="mt-4 text-slate-400">
                Application I've designed, built, tested and deployed.
            </p>

            <div className="mt-12 grid gap-6 md:gridd-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}