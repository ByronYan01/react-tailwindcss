import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for learning and personal projects.",
    features: [
      "5 Projects",
      "Community Support",
      "Basic Analytics",
      "48-hour response time",
    ],
    cta: "Start for Free",
    mostPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and teams.",
    features: [
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
      "1-hour response time",
      "Custom Domain",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large scale mission-critical systems.",
    features: [
      "Unlimited Projects",
      "24/7 Phone Support",
      "Custom Analytics",
      "Dedicated Manager",
      "SSO & SLA",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            No contracts. No surprise fees. Cancel anytime.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative w-full max-w-sm flex flex-col p-8 bg-white dark:bg-slate-800 rounded-2xl transition-all duration-300 ${
                plan.mostPopular
                  ? "border-2 border-brand-500 shadow-2xl lg:scale-110 z-10"
                  : "border border-slate-200 dark:border-slate-700 shadow-lg lg:hover:scale-105"
              }`}
            >
              {/* Popular 标签 */}
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 -mt-3 mr-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-500 text-white uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  /mo
                </span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900
                    ${
                      plan.mostPopular
                        ? "bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-500"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 focus:ring-offset-slate-500"
                    }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
