import type { Metadata } from "next";
import {
  CaseStudyCopy,
  CaseStudyLayout,
  CaseStudySection,
  ScreenshotGallery,
  type Screenshot,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "OnChainWallet Profiler | Thinley Dhendup",
  description:
    "A frontend development case study about making Ethereum wallet activity and the evidence behind behavioural profiles easier to review.",
};

const prototypeScreens: Screenshot[] = [
  ["wallet-input.png", "Landing Page & Wallet Input", "Ethereum wallet address field and analysis period selector"],
  ["overview.png", "Wallet Overview", "Behavioural profile card with a classification and trading activity summary"],
  ["balances.png", "Balances", "Token holdings with individual and total values in US dollars"],
  ["activity.png", "Activity & Heatmap", "Daily activity heatmap above the wallet’s transaction history"],
  ["token-movements.png", "Token Movements", "Incoming and outgoing transfers grouped by token"],
  ["fund-flows.png", "Fund Flows", "Counterparties with incoming and outgoing totals"],
  ["protocols.png", "Protocols Used", "Ranking of protocols the wallet interacted with and a list of DeFi positions"],
  ["risk-indicators.png", "Risk Indicators", "Behavioural signals with detection status and measured values"],
  ["profile-evidence.png", "Profile Evidence", "Classification rules, measured values, missing inputs, and data coverage"],
];

export default function OnChainWalletProfilerCaseStudy() {
  return (
    <CaseStudyLayout
      title="OnChainWallet Profiler"
      intro="A web application that turns public Ethereum wallet activity into a behavioural profile and shows the evidence behind each result."
      tags={["Frontend Development", "Data Visualization", "Blockchain Analytics"]}
      details={[
        ["My Role", "Frontend Developer"],
        ["Project Type", "CSC410 Final-Year Capstone, GCIT"],
        ["Users", "Investors, Traders & Security Specialists"],
        ["Duration", "Autumn 2026"],
      ]}
    >
      <CaseStudySection id="overview" number="01" title="Project Overview">
        <div className="grid gap-12 md:grid-cols-2">
          <CaseStudyCopy title="The Problem">
            Raw wallet records can make it time-consuming to see patterns across
            trades, transfers, counterparties, and protocol interactions. A
            profile is only useful if a reviewer can see what supports it.
          </CaseStudyCopy>
          <CaseStudyCopy title="The Product">
            A reviewer enters an Ethereum address and chooses a 30-, 90-, or
            180-day window. The profiler summarizes activity and lets the
            reviewer inspect the rules, measured values, and data coverage
            behind the result.
          </CaseStudyCopy>
          <CaseStudyCopy title="My Responsibilities">
            I worked in a five-person capstone team and built the profiler
            interface, charts, and tab routing. I also integrated the frontend
            with the analysis API.
          </CaseStudyCopy>
          <CaseStudyCopy title="Technology">
            The frontend uses React, Vite, Tailwind CSS, and Recharts. A
            Fastify API provides analysis results and uses Redis to reuse
            recent snapshots.
          </CaseStudyCopy>
        </div>
      </CaseStudySection>

      <CaseStudySection id="takeaways" number="02" title="Outcome & Next Steps">
        <div className="grid gap-12 md:grid-cols-2">
          <CaseStudyCopy title="What We Built">
            The MVP connects wallet lookup to a tabbed dashboard for balances,
            activity, token movements, fund flows, and protocol usage. Reviewers
            can inspect behavioural risk signals and the evidence for each
            profile.
          </CaseStudyCopy>
          <CaseStudyCopy title="Handling Incomplete Evidence">
            Active Trader was the only profile the MVP could fully assess on
            live wallet data. The interface identifies missing inputs when a
            classification cannot be assessed. Adding verified sources for those
            inputs would expand live profile coverage.
          </CaseStudyCopy>
        </div>
      </CaseStudySection>

      <CaseStudySection id="prototype" number="03" title="High-Fidelity Prototype">
        <p className="max-w-2xl leading-relaxed text-zinc-400">
          The final interface takes reviewers from wallet lookup to a summary
          of activity, then into the evidence behind the wallet’s profile.
        </p>
        <ScreenshotGallery project="onchain-wallet-profiler" screens={prototypeScreens} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
