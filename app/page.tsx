"use client";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";
export default function LandingPage() {
  const AboutCards = [
    {
      id: 1,
      title: "Seamless Workflow Orchestration",
      desc: "Design and manage your workflow from start to finish. Stay aligned, organized, and efficient without unnecessary complexity.",
    },
    {
      id: 2,
      title: "Quick Setup, Zero Hassle",
      desc: "Start in minutes with an intuitive interface. No complicated onboarding, just instant productivity.",
    },
    {
      id: 3,
      title: "Effortless Team Collaboration",
      desc: "Collaborate, communicate, and execute tasks smoothly. Keep everyone in sync with minimal effort.",
    },
    {
      id: 4,
      title: "Organized & Scalable Productivity",
      desc: "Whether you're managing small projects or scaling operations, maintain clarity and control at every stage.",
    },
  ];
  return (
    <main className="bg-white">
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-10"
      >
        <div className="mx-0 my-3 w-full text-center rounded-2xl bg-linear-to-b from-amber-100 via-orange-200 to-orange-300">
          <div className="min-h-160 items-center justify-center flex flex-col space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Elevate your projects with precision.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              A modern platform that simplifies tasks, boosts focus, and drives
              results. Streamline smarter. Achieve faster.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 text-white text-sm sm:text-base hover:bg-orange-700 transition"
            >
              Learn More <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section
        id="about"
        className="px-6 sm:px-10 md:px-20 py-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Empowering Teams to Stay Organized & Achieve More
          </h2>

          <p className="text-orange-600 text-sm sm:text-base">
            From task management to workflow clarity, everything works together
            seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {AboutCards.map((card) => (
            <div
              key={card.id}
              className="border border-orange-500 rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-orange-800 text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
