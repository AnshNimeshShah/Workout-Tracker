import React from "react";
import { WarmupItem } from "../../data/workoutPlan";

interface WarmupSectionProps {
  items: WarmupItem[];
  completedItems: boolean[];
  onToggle: (index: number) => void;
}

export const WarmupSection: React.FC<WarmupSectionProps> = ({ items, completedItems, onToggle }) => {
  if (items.length === 0) return null;

  return (
    <div className="border border-zinc-800 bg-zinc-950 p-4">
      <div className="text-[10px] font-mono uppercase text-zinc-600 mb-4 tracking-widest">
        Warm-up Protocol
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => {
          const isDone = completedItems[idx];
          return (
            <li 
              key={idx}
              onClick={() => onToggle(idx)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className={`
                w-5 h-5 border-2 flex items-center justify-center transition-all duration-200
                ${isDone 
                  ? "border-teal-400 bg-teal-400/20" 
                  : "border-zinc-700 bg-transparent group-hover:border-zinc-500"
                }
              `}>
                {isDone && <div className="w-2 h-2 bg-teal-400"></div>}
              </div>
              <div className="flex-1">
                <div className={`text-xs font-bold uppercase transition-colors ${isDone ? "text-zinc-500" : "text-zinc-100"}`}>
                  {item.name}
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  {item.detail}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

