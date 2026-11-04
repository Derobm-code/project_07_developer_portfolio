import { NavLink } from "react-router-dom";

const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/85 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
             <NavLink to="/" className="text-xl font-bold tracking-tight">
                Dev<span className="text-violet-400">Portfolio.</span>
             </NavLink>

             <div className="flex flex-wrap gap-5 text-sm">
                {links.map(({ label, to }) => (
                    <NavLink 
                      key={to} 
                      to={to} 
                      className={({ isActive }) => 
                        isActive
                          ? "text-violet-400"
                        : "text-slate-400 transition hover:text-white"
                    }
                    >
                        {label}
                    </NavLink>
                ))}
             </div>
            </nav>
        </header>
    );
}