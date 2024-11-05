import React from "react";
import { pressContent } from "../data/data.ts";

const InterviewsAndPress: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl lg:text-8xl 2xl:text-9xl text-center font-chuchi">
          INTERVIEWS & PRESS
        </h1>
        <h2 className="text-4xl lg:text-6xl 2xl:text-8xl text-center font-chuchi">
          _ SELECTED PRESS MATERIAL _
        </h2>
      </div>

      <div className="space-y-12">
        {pressContent.map((section, index) => (
          <section key={index} className="bg-slate-100 p-6 text-center">
            <h2 className="text-4xl font-chuchi  pb-2 uppercase">
              {section.title}
            </h2>

            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className=" last:mb-0">
                {subsection.title && (
                  <h3 className="text-xl font-chuchi mb-4 text-gray-700">
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
                        className="flex items-center justify-center p-2"
                        aria-label={`Read ${link.title} (opens in new tab)`}
                      >
                        <span className="text-xl font-bold hover:text-catolHover text-black transition-all">
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
