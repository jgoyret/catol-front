import React from "react";
import type { YearData } from "../data/timelineCalendar";
import useDeviceType from "../hooks/useDeviceType";

interface TimelineCalendarProps {
  yearData: YearData;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineCalendar: React.FC<TimelineCalendarProps> = ({
  yearData,
  isExpanded,
  onToggle,
}) => {
  const isMobile = useDeviceType();
  return (
    <div className="">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-center text-center focus:outline-none group"
      >
        <span
          className={`${
            isExpanded ? "border-b" : "border-b-0"
          } border-black w-full text-4xl xl:text-6xl font-chuchi transition-all group-hover:text-catolHover`}
        >
          {yearData.year}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 space-y-2">
          {yearData.events.map((event, index) => (
            <div key={index} className=" text-xl text-center mx-auto">
              <div className=" mb-2">
                <strong>{event.date}</strong> {!isMobile && <strong>→</strong>}{" "}
                {!isMobile && event.description}
              </div>
              {isMobile && <div className="">{event.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCalendar;
