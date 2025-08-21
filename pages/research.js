import Head from "next/head";

export default function Research() {
  const researchProjects = [
    {
      title: " ",
      image: "/space-weather.jpg", 
      collaborators: " ",
      description: " "
    }
  ];

  return (
    <>
      <Head>
        <title>pragyan's corner</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">
            Research
          </h1>
          
          <div className="space-y-16">
            {researchProjects.map((project, index) => (
              <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-16">
                <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                  {project.title}
                </h2>
                
                <div className="mb-6">
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">[Research Image]</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <strong className="text-gray-700 dark:text-gray-300">Collaborators:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">{project.collaborators}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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