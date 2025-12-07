import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDark = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar isDarkMode={isDarkMode} toggleDark={toggleDark} />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Gallery />
        </main>
      </div>
    </div>
  );
}
