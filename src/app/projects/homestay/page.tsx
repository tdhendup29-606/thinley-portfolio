import * as motion from "framer-motion/client";
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
  title: "Bhutan Homestays | Thinley Dhendup",
  description:
    "A UX case study about helping travelers find and request stays with local Bhutanese families.",
};

const painPoints = [
  {
    title: "Scattered listings",
    description:
      "Travelers had to piece together options from social media and agents. One searchable directory would make homestays easier to find.",
  },
  {
    title: "Missing details",
    description:
      "Travelers needed clear information about rooms, meals, and how to get to the village before they could choose a stay.",
  },
  {
    title: "Host tech barriers",
    description:
      "Hosts with limited digital experience needed simple, mobile-friendly tools for managing requests.",
  },
  {
    title: "Trust and safety",
    description:
      "Travelers felt unsure about booking an unfamiliar home. Visible reviews and clear policies could help them decide.",
  },
];

const nextSteps = [
  "Test with hosts in rural villages to see how the site works with limited internet access.",
  "Add tools for hosts to manage calendars and availability and respond to booking requests.",
  "Offer more languages and online payment options to reach more travelers.",
];

const prototypeScreens: Screenshot[] = [
  ["home.png", "Home Page", "Bhutan Homestays landing page with an entry point to search for stays"],
  ["search-results.png", "Search Results", "Homestay results with filters for region, price, and amenities"],
  ["listing.png", "Homestay Listing", "Listing with photos, host information, and a booking request action"],
  ["booking-request.png", "Booking Request", "Form for sending a stay request to a host"],
];

export default function HomestayCaseStudy() {
  return (
    <CaseStudyLayout
      title="Bhutan Homestays"
      intro="Helping travelers find authentic stays with Bhutanese families and giving local hosts a simple way to manage booking requests."
      tags={["UX Research", "UI Design", "Travel & Hospitality"]}
      details={[
        ["My Role", "Lead UX Designer & Researcher"],
        ["Project Type", "Homestay Booking Website"],
        ["Users", "Domestic and International Travelers, Host Families"],
      ]}
    >

      <CaseStudySection id="overview" number="01" title="Project Overview">
        <div className="grid gap-12 md:grid-cols-2">
          <CaseStudyCopy title="The Product">
            Bhutan Homestays is a website where travelers can discover stays
            with local Bhutanese families and send a booking request directly
            to a host.
          </CaseStudyCopy>
          <CaseStudyCopy title="The Problem">
            Homestay listings are scattered across social media and word of
            mouth. Many rural families have no online way to take bookings.
          </CaseStudyCopy>
          <CaseStudyCopy title="The Goal">
            Design a trustworthy website where travelers can discover and
            request stays and hosts can manage bookings with little technical effort.
          </CaseStudyCopy>
          <CaseStudyCopy title="My Responsibilities">
            User research, personas, journey mapping, paper and digital
            wireframes, low- and high-fidelity prototypes, usability studies,
            and accessibility.
          </CaseStudyCopy>
        </div>
      </CaseStudySection>

      <CaseStudySection id="research" number="02" title="Understanding the User">
        <div className="max-w-4xl">
          <CaseStudyCopy title="User Research">
            I interviewed travelers and homestay hosts and reviewed existing
            booking platforms. I initially assumed travelers cared most about
            price and hosts wanted more bookings.
          </CaseStudyCopy>
          <p className="mt-6 leading-relaxed text-zinc-400">
            Travelers prioritized authenticity, safety, and knowing what to
            expect. Hosts wanted an easy way to handle requests and share
            their home and culture. I focused the design on host stories,
            clear listing details, and a simple booking request.
          </p>
        </div>

        <h3 className="mb-8 mt-20 text-2xl font-semibold">User Pain Points</h3>
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
            Emma is traveling to Bhutan for the first time. She needs reliable
            details about each homestay so she knows what to expect when she arrives.
          </CaseStudyCopy>
          <CaseStudyCopy title="User Journey">
            I mapped Emma’s journey from discovering homestays to arriving at
            the home. Her biggest challenge was comparing options and trusting
            the details before booking. That shaped the listing design and
            request flow.
          </CaseStudyCopy>
        </div>
        <ScreenshotGallery project="homestay" screens={[
          ["persona.png", "Emma’s Persona", "Persona card for Emma, a first-time traveler to Bhutan"],
          ["journey-map.png", "Traveler Journey Map", "Emma’s journey from searching for a homestay to arriving at the home"],
        ]} />
      </CaseStudySection>

      <CaseStudySection id="takeaways" number="03" title="Takeaways & Next Steps">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <CaseStudyCopy title="Project Impact">
              In the final round, participants found a homestay and sent a
              booking request without assistance.
            </CaseStudyCopy>
            <CaseStudyCopy title="What I Learned">
              Real photos, clear details, and a simple request flow helped
              travelers feel comfortable choosing a homestay. The experience
              also had to work for the families receiving those requests.
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
          Travelers can search for a stay, review the home and host details,
          and send a booking request.
        </p>
        <ScreenshotGallery project="homestay" screens={prototypeScreens} showPlaceholders />
        <ScreenshotGallery project="homestay" screens={[
          ["high-fidelity-prototype.png", "Prototype Flow", "Connected polished screens from home search through booking request"],
        ]} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
