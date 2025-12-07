import { Moon, Sun, Wind, X, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];
  console.log(isDarkMode, toggleDark, navLinks);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="p-2 bg-brand-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Wind className="h-6 w-6 text-white"></Wind>
            </div>
            <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">
              TailwindUI
            </span>
          </div>
          {/* 默认隐藏，大于md显示 */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.name}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-500 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              );
            })}
            {/* 深浅主题 */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-sky-800 transitions-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {/* sr-only makes text invisible visually but available to screen readers */}
              <span className="sr-only">Toggle Dark Mode</span>
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
          {/* 移动端样式，默认显示，大于md隐藏 */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="sr-only">Toggle Dark Mode</span>
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>
            {/* 将菜单收入指定下拉 dom 中，由此按钮控制 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open Menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* menu 下拉 */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            return (
              <a
                href={link.href}
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800 transition-all"
              >
                {link.name}
              </a>
            );
          })}
          <button className="w-full mt-4 bg-brand-600 text-white px-3 py-2 rounded-md font-medium hover:bg-brand-900">
            {" "}
            Get Started{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
