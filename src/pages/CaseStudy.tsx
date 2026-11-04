import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudy() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="mx-auto max-w-4xl px-6 py-20">
                <h1 className="text-3xl font-bold"> Project not found</h1>
                <Link to="/projects" className="mt-6 inline-block text-violet-400">
                Back to projects
                </Link>
            </div>
        );
    }

    return (
        <article className="mx-auto max-w-4xl px-6 py-20">
            <Link to="/projects" className="text-violet-400">
            ← All projects
            </Link>

            <h1 className="mt-8 text-4xl font-bold md:text-5xl">
                {project.title}
            </h1>
            <p className="mt-5 text-lg text-slate-400">
                {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="rounded-xl bg-violet-600 px-5 py-3">
                    Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3">
                    Github Repository
                </a>
            </div>

            {[
                ["The Challenge", project.challenge],
                ["My Solution", project.solution],
                ["The Outcome", project.outcome],
            ].map(([heading, content]) => (
                <section key={heading} className="mt-14">
                    <h2 className="text-2xl font-semibold">{heading}</h2>
                    <p className="mt-4 leading-8 text-slate-300">{content}</p>
                </section>
            ))}
        </article>
    );
}