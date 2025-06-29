"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/atoms/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Characters", href: "/" },
    { label: "Episodes", href: "/episodes" },
  ];

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
          <div className="flex items-center justify-between h-16 gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-lg focus:outline-none"
              aria-label="Rick and Morty Characters - Home"
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                R&M
              </div>
              <span className="hidden sm:inline text-lg font-medium text-gray-900 dark:text-gray-100">
                Rick & Morty
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <nav
                className="flex space-x-6"
                role="navigation"
                aria-label="Main navigation"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-2 py-1 font-medium rounded ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
