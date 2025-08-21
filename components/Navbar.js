import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //   label: "Research",
  //   href: "/research",
  // },
  // {
  //   label: "Bookshelf",
  //   href: "/bookshelf",
  // },
];

export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setShowMobile(false);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-4 px-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side - Empty for balance */}
        <div className="w-32"></div>
        
        {/* Center - Removed name */}
        <div className="flex-1"></div>

        {/* Right side - Navigation buttons and dark mode toggle */}
        <div className="flex items-center space-x-3">
          {/* Navigation buttons */}
          <div className="flex space-x-1">
            {links.map(({ label, href }) => (
              <Link key={label} href={href}>
                <span
                  className={
                    "px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium " +
                    (router.pathname === href
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white")
                  }
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ml-2"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800 to-gray-600' 
                : 'bg-gradient-to-r from-yellow-400 to-orange-500'
            }`}></div>
          </button>
        </div>
      </div>
    </div>
  );
}
