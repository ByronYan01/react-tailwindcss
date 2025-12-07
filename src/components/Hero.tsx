import React from "react";
import { ArrowRight, Code2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32 lg:pt-32">
      {/* 装饰性背景斑点（绝对定位与动画） */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900 dark:opacity-30"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-2s dark:bg-yellow-900 dark:opacity-30"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-4s dark:bg-pink-900 dark:opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* 标签 */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-sm font-medium mb-8 hover:bg-brand-100 transition-colors cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-brand-300">
          <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
          v2.0 is now available
        </div>

        {/* 主标题及渐变文本 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Master the Art of
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600">
            Utility-First CSS
          </span>
        </h1>
        {/* 字幕宽度最大，便于阅读 */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
          Build modern websites rapidly without ever leaving your HTML. A
          utility-first CSS framework packed with classes that can be composed
          to build any design, directly in your markup.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Start Learning
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
          <button className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-base font-semibold rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 md:text-lg shadow-sm hover:shadow transition-all">
            View Documentation
            <Code2 className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
