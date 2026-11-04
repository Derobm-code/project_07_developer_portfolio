import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-violet-400/50 hover:bg-white/[0.06]">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">
                {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                    key={tech}
                    className="rounded-full border border-violet-400/20 bg-ciolet-400/10 px-3 py-1 text-xs tex-violet-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <Link 
              to={`/projects/${project.slug}`}
              className="mt-7 inline-flex items-center fap-2 font-medium text-violet-400 hover:text-violet-300"
              >
                Read Case Study <ArrowUpRight size={17} />
              </Link>
        </article>
    );
}