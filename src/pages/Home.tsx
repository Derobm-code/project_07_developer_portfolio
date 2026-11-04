
import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Left: introduction */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Full-Stack Development · AI Engineering
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Building modern web applications and{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              intelligent systems.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            I develop full-stack applications using React,
            TypeScript, Python, and FastAPI, with a growing
            focus on AI agents and intelligent systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              View My Projects
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://github.com/Derobm-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              <Code2 size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[400px]"
        >
        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-violet-600/40 to-cyan-500/30 blur-3xl" />

        <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-violet-400 bg-[#101629] shadow-[0_0_70px_rgba(124,58,237,0.25)]">
        <img
            src="/images/pro.png"
            alt="Developer portrait"
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="eager"
        />
    </div>
    </motion.div>
    </div>
    </section>
  );
}
