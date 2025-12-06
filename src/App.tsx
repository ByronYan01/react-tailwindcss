import { useState } from "react";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDark = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <button onClick={toggleDark}>Toggle Dark Mode</button>
      <Navbar isDarkMode={isDarkMode} toggleDark={toggleDark} />
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 font-sans dark:bg-slate-900 dark:text-slate-100 selection:bg-brand-500 selection:text-white">
        222
      </div>
    </div>
  );
}
