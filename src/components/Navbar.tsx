import { Moon, Sun, Wind } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDark }) => {
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
          {/* 默认移动端隐藏 */}
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
        </div>
      </div>
    </nav>
  );
};
