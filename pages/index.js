import Head from "next/head";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <Head>
        <title>pragyan's corner</title>
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col items-center px-6 py-20">

        {/* Main Section: Photo + Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center max-w-5xl w-full">

          {/* Photo */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-blue-400 overflow-hidden bg-gray-200 dark:bg-gray-800 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
            <img src="/PIC.jpg" alt="Me" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-6xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">
              PRAGYAN YADAV
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hey! I’m Pragyan, 
              studying Physics and Computer Science at the University of Connecticut. 
              I’m curious about how computation can unlock new ways of understanding the universe.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am currently working with Prof. Daniel Anglés-Alcázar's {" "}
              <a
                href="https://angles-alcazar.physics.uconn.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Computational Galaxy Formation Group
              </a>{" "}
              at UConn on computational cosmology research, while also exploring the intersection of{" "}
              machine learning with astrophysics. 
              I also serve as the Director of Journalism for the{" "}
              <a
                href="https://uconnusj.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-600 hover:underline font-medium"
              >
                UConn Undergraduate Science Journal
              </a>.
            </p>
          </div>
        </div> {/* <-- Close Main Section flex div */}



{/* Contact Me Section */}
<div className="mt-16 text-left max-w-2xl w-full">
  <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
    Contact Me
  </h2>
  <p className="text-gray-600 dark:text-gray-300 mb-6">
    I’m always happy to chat — feel free to reach out!
  </p>

  <div className="flex space-x-8 text-3xl">
    <a
      href="https://www.linkedin.com/in/pragyan-yadav/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 transition-colors"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/ypragyan"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 transition-colors"
    >
      <FaGithub />
    </a>
    <a
      href="mailto:pragyan.yadav@uconn.edu"
      className="hover:text-blue-500 transition-colors"
    >
      <FaEnvelope />
    </a>
  </div>
</div>


      </div> {/* <-- Close outer min-h-screen div */}
    </>
  );
}
