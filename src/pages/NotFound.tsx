import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-slate-400">This page doesn't exist.</p>
            <Link to="/" className="mt-8 inline-block text-violet-400">
            Return home
            </Link>
        </section>
    );
}