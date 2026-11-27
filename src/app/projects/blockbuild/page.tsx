import * as motion from "framer-motion/client";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import {
  CaseStudyCopy,
  CaseStudyLayout,
  CaseStudySection,
  fadeUp,
  ScreenshotGallery,
  type Screenshot,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "BlockBuild | Thinley Dhendup",
  description:
    "A case study on designing and developing a 2D platformer that teaches blockchain ownership through play.",
};

const painPoints = [
  {
    title: "Transaction fees",
    description:
      "Repeated blockchain transactions can make routine play expensive. We kept only essential ownership data on-chain.",
  },
  {
    title: "Wallet complexity",
    description:
      "Wallet prompts can interrupt play and confuse beginners. A tutorial character and plain-language dialogs explain what to do and why.",
  },
  {
    title: "Scalability",
    description:
      "Writing every update to the blockchain would make the game harder to scale. Profiles, scores, and drafts are stored off-chain.",
  },
  {
    title: "Development scope",
    description:
      "We centered the game on land ownership, building development, and leaderboards so a four-person team could build the core experience.",
  },
];

const prototypeScreens: Screenshot[] = [
  ["land-purchase.png", "Land Purchase", "Grid of land plots a player can select to purchase"],
  ["building-management.png", "Building Management", "Panel for viewing and upgrading a building"],
  ["marketplace.png", "Marketplace Listing", "Marketplace screen for a listed in-game asset"],
  ["player-profile.png", "Player Profile", "Player profile screen with stats and achievements"],
];

const nextSteps = [
  "Add optional mini-games with extra rewards.",
  "Test the security and performance of the smart contracts and transaction validation.",
  "Run usability studies with beginners to refine the interface and wallet prompts.",
];

export default function BlockBuildCaseStudy() {
  return (
    <CaseStudyLayout
      title="BlockBuild"
      intro="A web-based 2D platformer that teaches digital ownership by letting players buy land, develop buildings, and manage in-game assets through a MetaMask wallet."
      tags={["UI/UX Design", "Full-Stack Development", "Blockchain Game"]}
      details={[
        ["My Role", "UI/UX Designer & Full-Stack Developer"],
        ["Project Type", "Web Game · PRJ303 Group 2, GCIT"],
        ["Users", "Students & Blockchain Beginners"],
        ["Duration", "February–June 2026"],
      ]}
    >
      <CaseStudySection id="overview" number="01" title="Project Overview">
        <div className="grid gap-12 md:grid-cols-2">
          <CaseStudyCopy title="The Product">
            BlockBuild is a browser-based 2D platformer where players use a
            MetaMask wallet to own virtual land and buildings as NFTs.
          </CaseStudyCopy>
          <CaseStudyCopy title="The Problem">
            Student blockchain projects often focus on theory or finance.
            Beginners need a hands-on way to learn how wallets, NFTs, and
            smart contracts work together.
          </CaseStudyCopy>
          <CaseStudyCopy title="The Goal">
            Design a beginner-friendly game where everyday actions, such as
            buying land and upgrading a building, introduce blockchain
            concepts through play.
          </CaseStudyCopy>
          <CaseStudyCopy title="My Responsibilities">
            I worked in a team of four on UI/UX design in Figma, system
            architecture, entity-relationship modeling, full-stack
            development, smart contracts, and testing.
          </CaseStudyCopy>
        </div>
      </CaseStudySection>

      <CaseStudySection id="research" number="02" title="Understanding the User">
        <div className="max-w-4xl">
          <CaseStudyCopy title="Research">
            We reviewed Axie Infinity and The Sandbox to see how blockchain
            games use NFTs, wallets, and smart contracts for ownership and
            rewards. The review highlighted tradeoffs around fees,
            scalability, and the complexity of onboarding.
          </CaseStudyCopy>
          <p className="mt-6 leading-relaxed text-zinc-400">
            We used land ownership, building upgrades, and leaderboards as
            the core loop. Each action gave players a concrete reason to
            learn the underlying blockchain concept.
          </p>
        </div>

        <h3 className="mb-8 mt-20 text-2xl font-semibold">Design Challenges</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {painPoints.map(({ title, description }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-zinc-800 p-7"
            >
              <p className="mb-6 text-sm text-[#9C83EE]">0{index + 1}</p>
              <h4 className="mb-3 text-xl font-semibold">{title}</h4>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <CaseStudyCopy title="User Persona">
            Pema is a first-year IT student who wants hands-on blockchain
            practice because the concepts feel abstract in class.
          </CaseStudyCopy>
          <CaseStudyCopy title="User Journey">
            A new player connects MetaMask, creates a character, learns the
            controls from Mira, then buys land, builds, and takes a job. The
            wallet prompts explain the transactions as the player encounters them.
          </CaseStudyCopy>
        </div>
        <ScreenshotGallery project="blockbuild" screens={[
          ["persona.png", "Pema’s Persona", "Persona card for Pema, a first-year IT student"],
          ["journey-map.png", "Player Journey", "New player journey from wallet connection to building and working"],
        ]} />
      </CaseStudySection>

      <CaseStudySection id="takeaways" number="03" title="Takeaways & Next Steps">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <CaseStudyCopy title="What We Shipped">
              The team deployed BlockBuild on Vercel with land and building
              NFTs, a marketplace, a work system, PvP challenges with
              escrow-backed wagers, and a leaderboard.
            </CaseStudyCopy>
            <CaseStudyCopy title="What I Learned">
              We combined a Phaser game, a Node.js backend, and Solidity
              contracts. Keeping routine game data off-chain reduced the
              need for paid transactions. Plain-language prompts helped
              explain what players were about to approve.
            </CaseStudyCopy>
          </div>
          <div>
            <h3 className="mb-8 text-2xl font-semibold">What’s Next?</h3>
            <ol className="space-y-7">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-5">
                  <span aria-hidden="true" className="text-sm text-[#9C83EE]">0{index + 1}</span>
                  <p className="leading-relaxed text-zinc-400">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection id="prototype" number="04" title="High-Fidelity Prototype">
        <p className="max-w-2xl leading-relaxed text-zinc-400">
          The final screens show how players purchase land, manage
          buildings, browse the marketplace, and challenge other players.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {[
            ["View Figma designs", "https://www.figma.com/design/VxMC596EHJZCcMdbdiu8Ca/Block-Build"],
            ["Open the live game", "https://block-build-99zy.vercel.app/"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-[#9C83EE]"
            >
              {label} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
        <ScreenshotGallery project="blockbuild" screens={prototypeScreens} showPlaceholders />
        <ScreenshotGallery project="blockbuild" screens={[
          ["high-fidelity-prototype.png", "Prototype Flow", "Connected polished screens for BlockBuild"],
        ]} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
