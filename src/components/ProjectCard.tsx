
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description?: string;
  technologies?: string[];
  github?: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group border border-zinc-800 rounded-xl p-7 hover:border-[#9C83EE]/60 transition duration-300"
    >
      <div className="flex justify-between items-center mb-10">
        <span className="text-sm text-zinc-500">
          {number}
        </span>

        <span className="text-xs text-[#9C83EE] uppercase tracking-wider">
          {category}
        </span>
      </div>

      <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#9C83EE] transition">
        {title}
      </h3>

      {description && (
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          {description}
        </p>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white hover:text-[#9C83EE] transition"
        >
          View repository
          <ArrowUpRight size={16} />
        </a>
      )}
    </motion.div>
  );
}
