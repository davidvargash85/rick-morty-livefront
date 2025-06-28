import Link from 'next/link';
import ThemeToggle from '@/components/atoms/ThemeToggle';

export default function Header() {
  return (
    <>
      <a 
        href="#main-content" 
        className="absolute left-[-9999px] focus:left-0 focus:top-0 bg-blue-600 text-white px-4 py-2 z-50 focus:z-50 rounded-br-md transition-all focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <header 
        className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-lg focus:outline-none"
              aria-label="Rick and Morty Characters - Home"
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">R&M</div>
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Rick & Morty
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <nav 
                className="hidden md:flex space-x-8" 
                role="navigation" 
                aria-label="Main navigation"
              >
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded focus:outline-none px-2 py-1"
                >
                  Characters
                </Link>
              </nav>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 