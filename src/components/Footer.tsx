import React from "react";
import { Github, Twitter, Linkedin, Wind } from "lucide-react";

export const Footer: React.FC = () => {
  const linkObj = {
    Product: ["Features", "Integrations", "Documentation", "Pricing"],
    Company: ["About", "Blog", "Jobs", "Partners"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 上 */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌 */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Wind className="h-6 w-6 text-brand-500" />
              <span className="font-bold text-xl">TailwindUI</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Making the web look better, one utility class at a time. Designed
              for developers, by developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* 链接 */}
          {Object.keys(linkObj).map((key) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {key}
              </h3>
              <ul className="space-y-2 text-sm">
                {linkObj[key].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-brand-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* 下 */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Tailwind Mastery Studio. All
            rights reserved.
          </p>
          <div className="mt-4 md:mt-0">Designed with ❤️ and Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
};
