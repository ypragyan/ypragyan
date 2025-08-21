import Head from "next/head";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Investigating the Morphological Footprints of Cosmology",
      subtitle: "UConn Galaxy Formation Group",
      description:
        "We use saliency maps to analyze neural networks trained on large-scale cosmological simulations, revealing which features drive predictions and improving transparency and reliability in cosmology.",
      image: "./XAI.png",
    },
    {
      title: "Network Theory Analysis of the Cosmic Web",
      subtitle: "UConn Galaxy Formation Group",
      description:
        "Analyzing the structure of the cosmic web in cosmological simulations through a network theory perspective, and investigating the properties of dark matter halos within the large-scale structure of the universe.",
      image: "./LSS.png",
    },
    {
      title: "Exploring Solar Complexity through Image Analysis",
      subtitle: "Wolfram Student Ambassador",
      description:
        "Developed Wolfram Language code for analyzing high-resolution solar images. Analyzed fractal dimension to study the complexity of solar flares. Working on advanced image processing techniques for solar physics research.",
      image: "./Fractal.jpg",
    },
    {
      title: "Probing Solar Flare Dynamics via Explainable AI Techniques",
      subtitle: "Independent Research",
      description:
        "Wrote code to process space weather data and solar imagery. Implemented machine learning models to predict space weather events. Discovered unique pre-flaring patterns across different solar wavelengths using explainable AI techniques.",
      image: "./Solar.png",
    },
    {
      title: "Analyzing Cosmic Rays Using the Pixet Particle Detector",
      subtitle: "Wolfram High School Summer Research Program",
      description:
        "Employed Wolfram Language to process data from the Pixet particle detector. Designed and conducted experiments to detect and analyze subatomic particles. Developed algorithms for particle detection and cosmic ray analysis.",
      image: "./3D.png",
    },
  ];

  return (
    <>
      <Head>
        <title>pragyan&apos;s corner</title> {/* */}
      </Head>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">RESEARCH &amp; PROJECTS</h1> {/*  */}
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              Major Projects and In Progress
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:bg-gray-700 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="mb-4 w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Title */}
                <h2 className="text-lg font-bold text-black dark:text-white mb-1">
                  {project.title}
                </h2>

                {/* Project Subtitle */}
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Project Description */}
                <p className="text-black dark:text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
