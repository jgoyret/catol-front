import React from "react";
import { pressContent } from "../data/data.ts";

const InterviewsAndPress: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-mattoneBold">
          INTERVIEWS AND PRESS
        </h1>
      </div>

      <div className="space-y-12">
        {pressContent.map((section, index) => (
          <section key={index} className="bg-slate-100 p-6 text-center">
            <h2 className="text-2xl font-bold font-mattoneRegular mb-6 text-black border-b pb-2">
              {section.title}
            </h2>

            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-8 last:mb-0">
                {subsection.title && (
                  <h3 className="text-xl font-mattoneRegular  font-semibold mb-4 text-gray-700">
                    {subsection.title}
                  </h3>
                )}
                <ul className="space-y-3 divide-y divide-gray-100">
                  {subsection.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="group pt-2 first:pt-0">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 border-b-2 border-transparent hover:border-catolHoverLight  transition-all"
                        aria-label={`Read ${link.title} (opens in new tab)`}
                      >
                        <span className="font-chuchi text-xl text-catolHoverLight group-hover:tracking-widest transition-all">
                          {link.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default InterviewsAndPress;
