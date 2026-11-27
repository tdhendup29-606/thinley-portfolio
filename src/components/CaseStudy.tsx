import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import * as motion from "framer-motion/client";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const container = "max-w-7xl mx-auto px-6 md:px-16";
export type Screenshot = readonly [file: string, caption: string, alt: string];

export function CaseStudyLayout({
  title,
  intro,
  tags,
  details,
  preview,
  children,
}: {
  title: string;
  intro: string;
  tags: string[];
  details: [label: string, value: string][];
  preview?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md">
        <div className={`${container} flex items-center justify-between gap-4 py-5`}>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#9C83EE]"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <span className="text-right text-sm font-semibold tracking-wider">
            {title.toUpperCase()}
          </span>
        </div>
      </header>

      <section className={`${container} pb-28 pt-24`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#9C83EE]">
            Featured Project / Case Study
          </p>
          <h1 className="mb-8 text-5xl font-semibold tracking-tight md:text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
            {intro}
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {tags.map((item) => (
              <li key={item} className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <dl className={`mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8 ${details.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {details.map(([label, value]) => (
            <div key={label}>
              <dt className="mb-2 text-xs uppercase tracking-wider text-zinc-500">{label}</dt>
              <dd className="text-sm">{value}</dd>
            </div>
          ))}
        </dl>

        {preview}
      </section>

      {children}

      <section className="border-t border-zinc-800 py-24">
        <div className={`${container} text-center`}>
          <h2 className="mb-6 text-4xl font-semibold md:text-5xl">Let’s connect.</h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-zinc-400">
            I’d love to hear your feedback on {title} or talk about
            more of my work.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#9C83EE] px-7 py-4 text-zinc-950 transition hover:bg-[#b39df5]"
          >
            Get in touch <ArrowUpRight size={18} />
          </Link>
          <div className="mt-16">
            <Link href="/" className="text-sm text-zinc-500 transition hover:text-[#9C83EE]">
              ← Return to main portfolio
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Thinley Dhendup. All rights reserved.
      </footer>
    </main>
  );
}

export function CaseStudySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-zinc-800 py-24">
      <div className={container}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-4 text-sm uppercase tracking-widest text-[#9C83EE]">{number} / Case Study</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function CaseStudyCopy({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-zinc-400">{children}</p>
    </div>
  );
}

export function ScreenshotGallery({
  project,
  screens,
  showPlaceholders = false,
}: {
  project: string;
  screens: Screenshot[];
  showPlaceholders?: boolean;
}) {
  const imageDirectory = `images/${project}`;
  const availableScreens = screens.map(([file, caption, alt]) => ({
    src: `/${imageDirectory}/${file}`,
    caption,
    alt,
    available: existsSync(path.join(process.cwd(), "public", imageDirectory, file)),
  })).filter(({ available }) => available || showPlaceholders);

  if (availableScreens.length === 0) return null;

  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {availableScreens.map(({ src, caption, alt, available }) => (
        <figure key={src}>
          <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            {available ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            ) : (
              <p className="grid h-full place-items-center text-sm text-zinc-400">Screenshot pending</p>
            )}
          </div>
          <figcaption className="mt-4 text-sm text-zinc-400">{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
