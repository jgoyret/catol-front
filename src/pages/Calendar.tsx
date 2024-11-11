import React from "react";
import TimelineCalendar from "../components/TimelineCalendar";
import { timelineData } from "../data/timelineCalendar";

const Calendar: React.FC = () => {
  const [expandedYear, setExpandedYear] = React.useState<string | null>(null);

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="mx-auto ">
      <div className="flex flex-col items-center mb-12 font-chuchi ">
        <h1 className="text-6xl lg:text-8xl 2xl:text-9xl  mb-4">CALENDAR</h1>
        <h2 className="text-4xl lg:text-6xl 2xl:text-7xl">
          _ UPCOMING AND PAST DATES _
        </h2>
      </div>

      <div className="space-y-4 text-center">
        {timelineData.map((yearData) => (
          <TimelineCalendar
            key={yearData.year}
            yearData={yearData}
            isExpanded={expandedYear === yearData.year}
            onToggle={() => toggleYear(yearData.year)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
