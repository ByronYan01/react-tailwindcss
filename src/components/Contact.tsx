import React from "react";
import { Mail, MapPin, Phone, Upload } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 默认纵向布局，lg 后则横向布局 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* info side */}
          <div className="lg:w-5/12 bg-brand-600 p-10 text-white flex flex-col justify-between">
            {/* 文字 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-brand-100 mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-brand-200" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-brand-200" />
                  <span>support@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-brand-200" />
                  <span>123 Tailwind Blvd, CSS City</span>
                </div>
              </div>
            </div>
            {/* 装饰圆形：相对定位 */}
            <div className="relative mt-12 lg:mt-0">
              <div className="w-24 h-24 bg-brand-500 rounded-full opacity-50 absolute -bottom-10 -right-10"></div>
              <div className="w-16 h-16 bg-brand-400 rounded-full opacity-50 absolute bottom-10 right-10"></div>
            </div>
          </div>
          {/* 
            form side 
            注意：
               很多 bg、border、text 样式无法覆盖原生 input 
          */}
          <div className="lg:w-7/12 p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    First Name
                  </label>
                  {/* caret-brand-500: 更改闪烁光标的颜色 */}
                  {/* 问题：默认输入框点击时，边框颜色如何覆盖 */}
                  <input
                    type="text"
                    id="first-name"
                    className=" w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm  py-2 px-3 sm:text-sm"
                    placeholder="John"
                  />
                  {/* className=" w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-brand-500 focus:ring-brand-500 caret-brand-500 py-2 px-3 sm:text-sm" */}
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-brand-500 focus:ring-brand-500 caret-brand-500 py-2 px-3 sm:text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                {/* valid: & invalid: modifiers for form validation states */}
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-brand-500 focus:ring-brand-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-2 px-3 sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>
              {/* input 文件框样式修改：修改器 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Attachment
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-slate-700 dark:file:text-brand-400 dark:hover:file:bg-slate-600"
                />
              </div>
              {/* 文本框 */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-brand-500 focus:ring-brand-500 caret-brand-500 py-2 px-3 sm:text-sm resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              {/* 同伴修饰符 Peer Modifier 示例：复选框控制兄弟姐妹风格 */}
              <div className="group flex flex-col gap-1 justify-end">
                <div className="flex items-center gap-2">
                  {/* 
                    peer: 标记此元素为同伴，供兄弟姐妹引用
                    accent: 颜色原生复选框 */}
                  <input
                    id="terms"
                    type="checkbox"
                    className="peer h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
                  />
                  <label
                    htmlFor="terms"
                    className=" ml-2 block text-sm text-slate-700 dark:text-slate-300 peer-checked:text-brand-600 peer-checked:font-bold transition-colors"
                  >
                    I agree to the
                    <a href="#" className="underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                {/* 通过 peer-checked 检查勾选时出现的隐形免责声明 */}
                {/* <p className="mt-1 text-xs text-brand-600 invisible group-has-[:checked]:visible"> */}
                <p className="mt-1 text-xs text-brand-600 hidden group-has-[:checked]:block">
                  Thank you for agreeing!
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className=" py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
