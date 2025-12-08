import React from "react";
import { Layers, Zap, Smartphone, Palette, Layout, Shield } from "lucide-react";
const features = [
  {
    name: "Utility-First",
    description:
      "Style your elements by applying pre-existing classes directly in your HTML.",
    icon: Layers,
    color: "bg-blue-500",
  },
  {
    name: "Responsive Design",
    description:
      "Build mobile-first layouts using simple prefixes like sm:, md:, lg:, and xl:.",
    icon: Smartphone,
    color: "bg-green-500",
  },
  {
    name: "Component Friendly",
    description:
      "Extract repeating utility patterns into custom component classes or React components.",
    icon: Layout,
    color: "bg-purple-500",
  },
  {
    name: "Dark Mode",
    description:
      "Style your site for dark mode just by adding the dark: prefix to any utility.",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    name: "Customization",
    description:
      "Easily customize the framework to match your brand colors, fonts, and spacing.",
    icon: Palette,
    color: "bg-pink-500",
  },
  {
    name: "Modern Features",
    description:
      "Cutting-edge CSS features like Grid, Transforms, and Filters out of the box.",
    icon: Shield,
    color: "bg-indigo-500",
  },
];
console.log(features);

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A better way to build
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            Stop fighting with custom CSS files. Rapidly build modern websites
            without leabing your HTML.
          </p>
        </div>
        {/* 响应式网格：1 col 手机，2 col 平板，3 col 桌面 */}
        {/* 优化：自动调整行高 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(0,1fr)">
          {features.map((feature) => (
            <div
              key={feature.name}
              // “group组”类允许子元素根据父游标状态进行样式化
              // 采用 flex 布局，最后一个子项目使用 mt-auto 充满剩余空间
              className="flex flex-col group relative p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-gradient-to-br from-transparent to-slate-200/50 dark:to-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div> */}
              {/* 图标 */}
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${feature.color}`}
                // className={`flex items-center justify-center h-12 w-12 rounded-xl text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.name}
              </h3>
              <p className=" text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                {feature.description}
              </p>
              <div className="mt-auto flex items-center text-brand-600 dark:text-brand-400 font-medium group-hover:translate-x-2 cursor-pointer">
                {/* <div className="mt-6 flex items-center text-brand-600 dark:text-brand-400 font-medium group-hover:translate-x-2 transition-transform cursor-pointer"> */}
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// 箭头图标的辅助组件
function ArrowRight(props: React.SVGProps<SVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
