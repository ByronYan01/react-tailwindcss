import React from "react";

// Using placeholder images
const images = [
  {
    url: "https://picsum.photos/id/1015/600/600",
    span: "col-span-1 md:col-span-2 row-span-2",
    title: "Nature",
  },
  {
    url: "https://picsum.photos/id/1016/400/300",
    span: "col-span-1",
    title: "Canyon",
  },
  {
    url: "https://picsum.photos/id/1018/400/300",
    span: "col-span-1",
    title: "Mountains",
  },
  {
    url: "https://picsum.photos/id/1019/400/600",
    span: "col-span-1 row-span-2",
    title: "Ocean",
  },
  {
    url: "https://picsum.photos/id/1020/400/300",
    span: "col-span-1",
    title: "Forest",
  },
  {
    url: "https://picsum.photos/id/1021/400/300",
    span: "col-span-1",
    title: "Fog",
  },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Built with Utility Classes
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              A responsive masonry-like layout using grid row/col spans.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors">
            View All Work
          </button>
        </div>
        {/* 网格中填充密集填料以填补空隙 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-xl shadow-md ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* 悬停时的叠加 */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
