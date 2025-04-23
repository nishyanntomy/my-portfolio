"use client";


import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects-sentinel", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-item ${
              activeId === id
                ? "bg-white text-gray-900"
                : "hover:bg-white/70 hover:text-gray-900"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
