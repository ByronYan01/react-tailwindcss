import React from "react";

const testimonials = [
  {
    content:
      "Tailwind CSS completely transformed how I build websites. The utility-first approach seemed strange at first, but once you get used to it, you can't go back. It's incredibly fast.",
    author: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://picsum.photos/id/64/100/100",
  },
  {
    content:
      "I used to struggle with naming classes and maintaining massive CSS files. Tailwind solved all of that. The design system constraints actually make me more creative.",
    author: "Michael Chen",
    role: "Product Designer",
    image: "https://picsum.photos/id/91/100/100",
  },
  {
    content:
      "The ability to customize the theme configuration is a game changer. We built our entire internal design system on top of Tailwind in a matter of weeks.",
    author: "Emily Davis",
    role: "CTO",
    image: "https://picsum.photos/id/177/100/100",
  },
];

export const Testimonials: React.FC = () => {
  return (
    // bg-fixed：创建视差滚动效果
    // bg-cover & bg-center:确保图像正确覆盖区域
    <section
      id="testimonials"
      className="relative py-24 bg-fixed bg-cover bg-center bg-[url('https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill,q_80/sample.jpg')]"
    >
      {/* 叠加以加深背景以提升文本可读性 */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Loved by Developers
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            See what the community has to say about us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* 
                    grayscale: 使图像黑白
                    hover:grayscale-0: 悬停时，设置 grayscale 为 0，返回图片本身颜色
                    ring: 增加边框，并通过设置颜色增加光泽
                */}
                <img
                  src={item.image}
                  alt={item.author}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="text-lg font-bold text-brand-300">
                    {item.author}
                  </h4>
                  <p className=" text-white text-sm">{item.role}</p>
                </div>
              </div>
              {/* line-clamp-3: 在三行后截断文本并添加“...” */}
              <p className="text-slate-300 italic leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
