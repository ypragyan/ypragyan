import Head from "next/head";

export default function Bookshelf() {
  const books = [
    {
      title: "The Bhabha and His Magnificent Obsessions",
      author: "",
      isbn: "",
      status: "Currently Reading",
      coverImage: "/placeholder-book.jpg"
    },
    {
      title: "Do Androids Dream of Electric Sheep?",
      author: "",
      isbn: "",
      status: "Currently Reading",
      coverImage: "/placeholder-book.jpg"
    },
    {
      title: "Descartes' Meditations",
      author: "",
      isbn: "",
      status: "Currently Reading",
      coverImage: "/placeholder-book.jpg"
    },
    {
      title: "Notes from the Underground",
      author: "",
      isbn: "",
      status: "Currently Reading",
      coverImage: "/placeholder-book.jpg"
    }
  ];

  const films = [
    { title: "DUNE", director: "", year: 2021, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" },
    { title: "Nayak the Hero", director: "", year: 2001, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" },
    { title: "Maqbool", director: "", year: 2003, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" },
    { title: "A Summer's Tale", director: "", year: 1996, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" },
    { title: "Chungking Express", director: "", year: 1994, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" },
    { title: "Inglorious Bastards", director: "", year: 2009, status: "Want to Watch", rating: "", coverImage: "/placeholder-film.jpg" }
  ];

  return (
    <>
      <Head>
        <title>pragyan&apos;s corner</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Bookshelf</h1>

          {/* Books Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-750 transition-colors duration-300">
                  {/* Book Cover */}
                  <div className="mb-4">
                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">[Book Cover]</span>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">{book.title}</h3>
                    {book.author && <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{book.author}</p>}
                    {book.status && (
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        book.status === 'Currently Reading'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {book.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Films Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">Movies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {films.map((film, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-750 transition-colors duration-300">
                  {/* Film Poster */}
                  <div className="mb-4">
                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">[Film Poster]</span>
                    </div>
                  </div>

                  {/* Film Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {film.title} {film.year && `(${film.year})`}
                    </h3>
                    {film.director && <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Directed by {film.director}</p>}
                    {film.status && (
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        film.status === 'Watched'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {film.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
