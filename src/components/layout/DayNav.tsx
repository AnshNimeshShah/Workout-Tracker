import React from "react";
import { workoutPlan } from "../../data/workoutPlan";

interface DayNavProps {
  activeDay: number;
  onDayChange: (index: number) => void;
  getCompletion: (index: number) => { percent: number };
}

export const DayNav: React.FC<DayNavProps> = ({ activeDay, onDayChange, getCompletion }) => {
  return (
    <nav className="border border-zinc-800 bg-zinc-950/50 p-2">
      <div className="text-[10px] font-mono uppercase text-zinc-600 mb-3 px-2 tracking-widest hidden md:block">
        Training Schedule
      </div>
      <div className="flex overflow-x-auto md:grid md:grid-cols-1 gap-1 no-scrollbar pb-1 md:pb-0">
        {workoutPlan.map((day, idx) => {
          const isActive = activeDay === idx;
          const { percent } = getCompletion(idx);
          const isDone = percent === 100;
          
          // Format label from "Day X – Title" to "0X TITLE"
          const displayTitle = day.title.split('–')[1]?.trim().toUpperCase() || day.title.toUpperCase();
          const labelFull = `0${idx + 1} ${displayTitle}`;
          const labelShort = `0${idx + 1}`;

          return (
            <button
              key={day.id}
              onClick={() => onDayChange(idx)}
              className={`
                flex items-center justify-between p-3 transition-all duration-200 text-xs font-bold tracking-tight shrink-0
                ${isActive 
                  ? "bg-teal-400 text-black shadow-lg" 
                  : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800"
                }
              `}
            >
              <span className="hidden md:inline">{labelFull}</span>
              <span className="md:hidden px-2">{labelShort}</span>
              {day.isRestDay ? null : (
                <div className={`
                  w-2 h-2 rounded-full transition-colors ml-2
                  ${isActive ? "bg-black" : isDone ? "bg-teal-400" : "border border-zinc-700"}
                `}></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

