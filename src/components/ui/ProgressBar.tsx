import React from "react";
import { motion } from "motion/react";

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="text-right">
      <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1 tracking-widest">
        Completion Status
      </div>
      <div className="flex items-center gap-4">
        <div className="w-48 h-3 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.4)]"
          />
        </div>
        <span className="text-xl font-mono font-bold text-teal-400 w-12">
          {percent}%
        </span>
      </div>
    </div>
  );
};

