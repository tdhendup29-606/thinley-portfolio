
"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Download,
  Menu, 
  X 
} from "lucide-react";

import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#09090b] text-white">

      {/* Navigation */}
      <nav className="hidden md:flex items-center justify-between px-6 md:px-16 py-7 max-w-7xl mx-auto">

{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white"
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  {menuOpen ? <X size={26} /> : <Menu size={26} />}
</button>


{/* Mobile Navigation Menu */}
{menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-[#09090b] border-t border-zinc-800 px-6 py-6 flex flex-col gap-6">
    {[
      { name: "About", href: "#about" },
      { name: "Education", href: "#education" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ].map((item) => (
      <a
        key={item.name}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="text-zinc-300 hover:text-[#9C83EE] transition"
      >
        {item.name}
      </a>
    ))}
  </div>
)}

        <h1 className="text-lg font-semibold tracking-tight">
          TD<span className="text-[#9C83EE]">.</span>
        </h1>

        <div className="flex gap-6 text-sm text-zinc-400">
  <a href="#about" className="hover:text-[#9C83EE] transition">
    About
  </a>

  <a href="#education" className="hover:text-[#9C83EE] transition">
    Education
  </a>

  <a href="#skills" className="hover:text-[#9C83EE] transition">
    Skills
  </a>

  <a href="#projects" className="hover:text-[#9C83EE] transition">
    Projects
  </a>

  <a href="#contact" className="hover:text-[#9C83EE] transition">
    Contact
  </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 min-h-[75vh] flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#9C83EE] text-sm mb-6 tracking-widest uppercase">
            Hello, I'm
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Thinley
            <br />
            Dhendup<span className="text-[#9C83EE]">.</span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
            A Computer Science student passionate about
            technology, software development, and building
            meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#9C83EE] hover:text-white transition"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-full text-sm hover:border-[#9C83EE] transition"
            >
              Download CV
              <Download size={17} />
            </a>
          </div>

          {/* Social links */}
         <div className="flex gap-6 mt-16 text-zinc-500">

  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="hover:text-white transition font-bold text-sm"
  >
    GH
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="hover:text-white transition font-bold text-sm"
  >
    in
  </a>

  <a
    href="mailto:your-email@example.com"
    aria-label="Email"
    className="hover:text-white transition"
  >
    <Mail size={22} />
  </a>

</div>
        </motion.div>
      </section>


{/* About Section */}
<section
  id="about"
  className="max-w-7xl mx-auto px-6 md:px-16 py-24 border-t border-zinc-800"
>
  <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
    01 / About
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        A little about me.
      </h2>
    </div>

    <div className="space-y-5 text-zinc-400 leading-relaxed">
      <p>
        I'm a Computer Science student with a passion for technology,
        software development, and exploring how technology can solve
        real-world problems.
      </p>

      <p>
        My interests include blockchain technology, web development,
        and building interactive applications. I enjoy learning new
        technologies and turning ideas into practical projects.
      </p>

      <p>
        I'm always looking for opportunities to expand my knowledge,
        improve my skills, and take on new challenges.
      </p>
    </div>
  </div>
</section>

{/* Education Section */}
<section
  id="education"
  className="max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-zinc-800"
>
  <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
    Education
  </p>

  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
    <div>
      <h3 className="text-xl font-semibold">
        Bachelor's Degree in Computer Science with Blockchain Specialization
      </h3>

      <p className="text-zinc-400 mt-2">
        Gyalposhing College of Information Technology, Bhutan
      </p>
    </div>

    <p className="text-sm text-zinc-500">
      Summer 2023 - Summer 2027
    </p>
  </div>
</section>



{/* Skills & Technologies */}
<section
  id="skills"
  className="max-w-7xl mx-auto px-6 md:px-16 py-24 border-t border-zinc-800"
>
  <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
    02 / Technologies
  </p>

  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Tools of my trade.
  </h2>

  <p className="text-zinc-400 max-w-xl mb-12">
    Technologies and tools I've explored throughout
    my journey in software development.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Programming Languages */}
    <div>
      <h3 className="text-lg font-medium mb-5">
        Programming Languages
      </h3>

      <div className="flex flex-wrap gap-2">
        {["JavaScript", "TypeScript", "Java", "Solidity"].map((skill) => (
          <span key={skill} className="border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 hover:border-[#9C83EE] hover:text-white transition">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frameworks */}
    <div>
      <h3 className="text-lg font-medium mb-5">
        Frameworks & Libraries
      </h3>

      <div className="flex flex-wrap gap-2">
        {["Next.js", "React", "Tailwind CSS", "Phaser", "Hardhat"].map((skill) => (
          <span key={skill} className="border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 hover:border-[#9C83EE] hover:text-white transition">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-lg font-medium mb-5">
        Tools & Technologies
      </h3>

      <div className="flex flex-wrap gap-2">
        {["Git", "Docker", "Hyperledger Fabric", "VS Code"].map((skill) => (
          <span key={skill} className="border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 hover:border-[#9C83EE] hover:text-white transition">
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


{/* Featured Projects */}
<section
  id="projects"
  className="max-w-7xl mx-auto px-6 md:px-16 py-24 border-t border-zinc-800"
>
  <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
    02 / Projects
  </p>

  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Things I've built.
    </h2>
    <p className="text-zinc-400 mt-4 max-w-xl">
      A collection of projects and ideas I've explored
      throughout my development journey.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <ProjectCard
      number="01"
      title="BlockBuild"
      category="Blockchain Game"
    />

    <ProjectCard
      number="02"
      title="Homestay Booking System"
      category="Web Application"
    />

<a href="/projects/authentq" className="block">
  <ProjectCard
    number="03"
    title="AuthenTQ"
    category="NFT Marketplace"
  />
</a>

  </div>
</section>


  
{/* Contact Section */}
<section
  id="contact"
  className="max-w-7xl mx-auto px-6 md:px-16 py-24 border-t border-zinc-800"
>
  <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
    04 / Contact
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
        Let's build something together.
      </h2>

      <p className="text-zinc-400 mt-6 leading-relaxed max-w-md">
        Have a project in mind, an opportunity, or simply want to connect?
        Feel free to reach out. I'm always open to interesting conversations.
      </p>
    </div>

    <div className="flex flex-col justify-center gap-6">
      <a
        href="mailto:YOUR_EMAIL@example.com"
        className="group flex justify-between items-center border-b border-zinc-800 pb-4 hover:border-[#9C83EE] transition"
      >
        <span className="text-lg">Email me</span>
        <span className="text-[#9C83EE]">↗</span>
      </a>

      <a
        href="YOUR_LINKEDIN_URL"
        target="_blank"
        rel="noreferrer"
        className="group flex justify-between items-center border-b border-zinc-800 pb-4 hover:border-[#9C83EE] transition"
      >
        <span className="text-lg">LinkedIn</span>
        <span className="text-[#9C83EE]">↗</span>
      </a>

      <a
        href="YOUR_GITHUB_URL"
        target="_blank"
        rel="noreferrer"
        className="group flex justify-between items-center border-b border-zinc-800 pb-4 hover:border-[#9C83EE] transition"
      >
        <span className="text-lg">GitHub</span>
        <span className="text-[#9C83EE]">↗</span>
      </a>
    </div>
  </div>
</section>



{/* Footer */}
<footer className="border-t border-zinc-800 px-6 md:px-16 py-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
    <p>© 2026 Thinley Dhendup. All rights reserved.</p>

    <a
      href="#home"
      className="hover:text-[#9C83EE] transition"
    >
      Back to top ↑
    </a>
  </div>
</footer>

    </main>
  );
}
