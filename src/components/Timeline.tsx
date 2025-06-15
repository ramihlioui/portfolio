import React from "react";

export interface TimelineItem {
  date: string;
  content: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => (
  <section className={`flex min-h-screen justify-center bg-gray-100 pt-20 ${className ?? ""}`}>
    <div className="w-80">
      <h2 className="text-xl text-gray-700 mb-7">Recent Updates</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="relative flex items-baseline gap-6 pb-5">
            <div className={i < items.length - 1
              ? "before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"
              : undefined
            }>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
