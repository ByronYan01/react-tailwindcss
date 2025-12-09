import React from "react";

export const TableSection: React.FC = () => {
  const tableRowList = [
    {
      Feature: "API Acces",
      Basic: "Limited",
      Pro: "Full",
      Enterprise: "Unlimited",
    },
    {
      Feature: "Users",
      Basic: "1",
      Pro: "5",
      Enterprise: "Unlimited",
    },
    {
      Feature: "Support",
      Basic: "Community",
      Pro: "Email",
      Enterprise: "24/7 Dedicated",
    },
  ];
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 介绍 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Compare Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A demonstration of Table layouts and List styles.
          </p>
        </div>

        {/* 带有 Overflow 的表,用于响应式横向滚动 */}
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-16">
          {/* table-auto：自动调整列宽 */}
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">Basic</th>
                <th className="px-6 py-4">Pro</th>
                <th className="px-6 py-4 text-brand-600 dark:text-brand-400">
                  Enterprise
                </th>
              </tr>
            </thead>
            {/* divide-y: 在行之间添加边界 */}
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {/* odd、even: 斑马条纹 */}
              {tableRowList.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-slate-900 odd:bg-white even:bg-slate-50 dark:odd:bg-slate-900 dark:even:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                    {item.Feature}
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                    {item.Basic}
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                    {item.Pro}
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                    {item.Enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 列表样式示例 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
              Ordered List (list-decimal)
            </h3>
            {/* list-decimal / list-inside / marker:color */}
            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300 marker:text-brand-500 marker:font-bold">
              <li>Sign up for an account</li>
              <li>Verify your email address</li>
              <li>Choose a pricing plan</li>
              <li>Start building your project</li>
            </ol>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
              Unordered List (list-disc)
            </h3>
            {/* list-disc / list-outside */}
            <ul className="list-disc list-outside space-y-2 text-slate-600 dark:text-slate-300 marker:text-brand-500">
              <li>Responsive layouts included</li>
              <li>Dark mode support out of the box</li>
              <li>Accessible components</li>
              <li>Performance optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
