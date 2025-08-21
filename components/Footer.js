export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 py-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wider">
          © {new Date().getFullYear()} • Copyright <span className="font-semibold">Pragyan Yadav</span>
        </p>
      </div>
    </footer>
  );
}
