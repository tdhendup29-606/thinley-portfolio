
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";


const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const painPoints = [
  {
    number: "01",
    title: "Counterfeits",
    description:
      "Buyers cannot tell real cordyceps from fakes, so the verification result must be clear and instant.",
  },
  {
    number: "02",
    title: "Crypto jargon",
    description:
      "Wallets and minting confuse non-technical sellers, so the flow should hide blockchain complexity.",
  },
  {
    number: "03",
    title: "Copyable proof",
    description:
      "Paper certificates are easy to copy or lose, so each QR code should link to a tamper-proof record.",
  },
  {
    number: "04",
    title: "Low connectivity",
    description:
      "Sellers often work in remote areas, so pages must be light and work well on mobile.",
  },
];

const usabilityFindings = [
  "Sellers finished registration unaided.",
  "Buyers spotted the verification badge right away.",
  "Some users wanted printable QR label sizes.",
  "Sellers did not understand the term 'Mint NFT'.",
  "Buyers sometimes missed the verified badge.",
  "The QR download button was difficult to find.",
];

const accessibility = [
  "Verified and Unverified states use high-contrast colors, icons, and text, so status never depends on color alone.",
  "Large type and generous tap targets support mobile use, including for older users and in bright outdoor light.",
  "Plain labels replace crypto jargon, and the QR code and images include alt text for screen readers.",
];

const nextSteps = [
  "Test with harvesters and traders in the field to check scanning and low-connectivity performance.",
  "Add batch transfer so each new owner is recorded, extending the chain of custody from harvest to buyer.",
  "Offer multiple languages so more sellers and buyers can use AuthenTQ comfortably.",
];

export default function AuthenTQCaseStudy() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-[#9C83EE] transition flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <span className="text-sm font-semibold tracking-wider">
            AUTHENTQ
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#9C83EE] text-sm uppercase tracking-[0.25em] mb-6">
            Featured Project / Case Study
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            AuthenTQ
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Bringing authenticity and transparency to the cordyceps
            trade through blockchain-powered digital certificates.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {["UX Research", "UI Design", "Blockchain", "NFT Marketplace"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs text-zinc-300 border border-zinc-800 rounded-full px-4 py-2"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Project information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 mt-20 pt-8">

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
              My Role
            </p>
            <p className="text-sm">Lead UX Designer & Researcher</p>
          </div>

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Project Type
            </p>
            <p className="text-sm">Website / NFT Marketplace</p>
          </div>

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Users
            </p>
            <p className="text-sm">Harvesters, Traders & Buyers</p>
          </div>

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Duration
            </p>
            <p className="text-sm">Add project dates</p>
          </div>

        </div>
      </section>

      {/* Project Overview */}
      <section
        id="overview"
        className="border-t border-zinc-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <SectionHeading number="01" title="Project Overview" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">The Product</h3>

              <p className="text-zinc-400 leading-relaxed">
                AuthenTQ is a website that creates an NFT QR code for
                each cordyceps batch, allowing buyers to verify whether
                a product is genuine. The platform serves harvesters,
                traders, and buyers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">The Problem</h3>

              <p className="text-zinc-400 leading-relaxed">
                Cordyceps is rare and costly, making counterfeit and
                mislabeled products common. Buyers have no simple way
                to check where a product came from or how good it is.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">The Goal</h3>

              <p className="text-zinc-400 leading-relaxed">
                Design an easy-to-use website that gives every
                cordyceps batch a tamper-proof digital certificate,
                allowing buyers to verify it in seconds and honest
                sellers to prove authenticity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Responsibilities</h3>

              <p className="text-zinc-400 leading-relaxed">
                User research, personas, journey mapping, paper and
                digital wireframing, low- and high-fidelity
                prototyping, usability studies, and accessibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Understanding the User */}
      <section
        id="research"
        className="border-t border-zinc-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <SectionHeading number="02" title="Understanding the User" />

          <div className="mt-12 max-w-4xl">

            <h3 className="text-2xl font-semibold mb-5">
              User Research
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              I interviewed cordyceps sellers and buyers and reviewed
              existing product-authentication tools. Initially, I
              assumed buyers would trust a blockchain label on sight
              and that sellers would be comfortable using crypto wallets.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Research showed the opposite. Both groups wanted proof
              they could understand, such as origin, harvest date, and
              seller information. Technical jargon made them hesitate.
              This shifted the design towards plain language and a
              simple user flow.
            </p>

          </div>

          <h3 className="text-2xl font-semibold mt-20 mb-8">
            User Pain Points
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">

            {painPoints.map((point) => (
              <motion.div
                key={point.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-zinc-800 rounded-xl p-7"
              >
                <p className="text-[#9C83EE] text-sm mb-6">
                  {point.number}
                </p>

                <h4 className="text-xl font-semibold mb-3">
                  {point.title}
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}

          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-20">

            <div>
              <h3 className="text-2xl font-semibold mb-5">
                User Persona
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                <span className="text-white font-medium">Tenzin</span>{" "}
                is a cordyceps trader who needs to prove each batch
                is genuine because buyers distrust unverified claims.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">
                User Journey
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The journey follows Tenzin from harvesting a batch
                to a buyer verifying it. The biggest drop-off was
                the certificate step, where technical jargon caused
                doubt. This led to simplifying the process into a
                short, guided form.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Starting the Design */}
      <section
        id="design-process"
        className="border-t border-zinc-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <SectionHeading number="03" title="Starting the Design" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Paper Wireframes
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                I sketched five versions of the batch registration
                screen, including a single long form, a step-by-step
                flow, and a photo-first layout. I chose the
                step-by-step flow with a live QR preview to reduce
                effort and provide instant confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Digital Wireframes
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The batch registration wireframe splits the process
                into three short steps because sellers felt
                overwhelmed by long forms. A progress bar shows
                the remaining steps, while photo uploads provide
                visual proof of the batch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Verification Wireframe
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The buyer-facing verification page answers the
                most important question first: is this product real?
                A large Verified badge provides an instant answer,
                while origin and harvest date build trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Low-Fidelity Prototype
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The prototype demonstrates how a seller registers
                a batch and generates a QR code, which a buyer
                can scan to view the verified record.
              </p>
            </div>

          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-5">
              Usability Study
            </h3>

            <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">
              I conducted two rounds of moderated usability studies
              with sellers and buyers to test batch registration
              and QR verification.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

              {usabilityFindings.map((finding, index) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-lg p-5"
                >
                  <span className="text-[#9C83EE] text-sm">
                    0{index + 1}
                  </span>

                  <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                    {finding}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Refining the Design */}
      <section
        id="refinement"
        className="border-t border-zinc-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <SectionHeading number="04" title="Refining the Design" />

          <div className="grid md:grid-cols-2 gap-10 mt-12">

            <div>
              <p className="text-[#9C83EE] text-sm mb-4">
                Improvement 01
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Simplifying Registration
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The original "Mint NFT" button confused sellers.
                It was changed to "Add Product", accompanied
                by an explanation that the action generates a QR code which automatically becomes an NFT.
              </p>
            </div>

            <div>
              <p className="text-[#9C83EE] text-sm mb-4">
                Improvement 02
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Improving Verification
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The verification result was moved higher on the page and to the consumer view.
                A QR code now appears first, followed
                by the product's origin and harvest date and other details.
              </p>
            </div>

          </div>

          {/* High-Fidelity Prototype Gallery */}
          <div
            id="prototype"
            className="mt-28"
          >

            <p className="text-[#9C83EE] text-sm uppercase tracking-widest mb-4">
              Final Design
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-5">
              High-Fidelity Prototype
            </h3>

            <p className="text-zinc-400 max-w-2xl leading-relaxed mb-12">
              The final prototype allows users to create a certificate,
              download its QR code, and scan it to view a verified
              cordyceps record.
            </p>

            {/* Add your actual prototype images here later */}

            
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Home Screen */}
  <div>
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Image
        src="/images/authentq/home.png"
        alt="AuthenTQ home screen"
        width={1600}
        height={1000}
        className="w-full h-auto"
      />
    </div>
    <p className="text-sm text-zinc-400 mt-4">
      01 / Home Screen
    </p>
  </div>

  {/* Batch Registration */}
  <div>
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Image
        src="/images/authentq/registration.png"
        alt="AuthenTQ batch registration screen"
        width={1600}
        height={1000}
        className="w-full h-auto"
      />
    </div>
    <p className="text-sm text-zinc-400 mt-4">
      02 / Batch Registration
    </p>
  </div>

  {/* QR Code Generation */}
  <div>
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Image
        src="/images/authentq/qr-code.png"
        alt="AuthenTQ QR code generation screen"
        width={1600}
        height={1000}
        className="w-full h-auto"
      />
    </div>
    <p className="text-sm text-zinc-400 mt-4">
      03 / QR Code Generation
    </p>
  </div>

  {/* Verification Result */}
  <div>
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Image
        src="/images/authentq/verification.png"
        alt="AuthenTQ product verification result"
        width={1600}
        height={1000}
        className="w-full h-auto"
      />
    </div>
    <p className="text-sm text-zinc-400 mt-4">
      04 / Verification Result
    </p>
  </div>

</div>


          </div>

          {/* Accessibility */}
          <div className="mt-28">

            <h3 className="text-2xl font-semibold mb-8">
              Accessibility Considerations
            </h3>

            <div className="space-y-6">

              {accessibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 border-b border-zinc-800 pb-6"
                >
                  <span className="text-[#9C83EE] text-sm">
                    0{index + 1}
                  </span>

                  <p className="text-zinc-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Takeaways */}
      <section
        id="takeaways"
        className="border-t border-zinc-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <SectionHeading number="05" title="Takeaways & Next Steps" />

          <div className="grid md:grid-cols-2 gap-16 mt-12">

            <div>
              <h3 className="text-2xl font-semibold mb-5">
                Project Impact
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                In the final round, participants were able to
                register a batch and verify it without assistance.
              </p>

              <h3 className="text-2xl font-semibold mb-5">
                What I Learned
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Designing for trust means translating technical
                concepts like NFTs into plain language. Testing
                early showed me that a clear Verified badge matters
                more than showing the technology behind it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8">
                What's Next?
              </h3>

              <div className="space-y-7">

                {nextSteps.map((step, index) => (
                  <div key={index} className="flex gap-5">
                    <span className="text-[#9C83EE] text-sm">
                      0{index + 1}
                    </span>

                    <p className="text-zinc-400 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">

          <p className="text-[#9C83EE] text-sm uppercase tracking-widest mb-6">
            Thank You
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Let's connect.
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
            Thank you for reading the AuthenTQ case study.
            I would love to hear your feedback or talk about more
            of my work.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="inline-flex items-center gap-3 bg-[#9C83EE] text-white px-7 py-4 rounded-full hover:bg-[#876bdc] transition"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>

          <div className="mt-16">
            <Link
              href="/"
              className="text-sm text-zinc-500 hover:text-[#9C83EE] transition"
            >
              ← Return to main portfolio
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center text-sm text-zinc-500">
          © 2026 Thinley Dhendup. All rights reserved.
        </div>
      </footer>

    </main>
  );
}

/* Reusable Section Heading */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[#9C83EE] text-sm tracking-widest uppercase mb-4">
        {number} / Case Study
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold">
        {title}
      </h2>
    </motion.div>
  );
}
