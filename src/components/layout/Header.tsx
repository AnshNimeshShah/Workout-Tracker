import React from "react";

interface HeaderProps {
  title: string;
  dayNumber: number;
}

export const Header: React.FC<HeaderProps> = ({ title, dayNumber }) => {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-zinc-800 pb-4 mb-6 gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-6 bg-teal-400"></div>
          <h1 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500">
            Apex Architecture v1.0
          </h1>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase">
          {title.split('–')[1]?.trim() || title} <span className="text-teal-400">DAY 0{dayNumber + 1}</span>
        </h2>
      </div>
    </header>
  );
};

