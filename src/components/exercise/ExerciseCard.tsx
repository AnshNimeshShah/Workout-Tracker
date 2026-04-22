import React from "react";
import { Exercise } from "../../data/workoutPlan";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Check } from "lucide-react";

interface ExerciseCardProps {
  index: number;
  exercise: Exercise;
  isDone: boolean;
  onToggle: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ index, exercise, isDone, onToggle }) => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [0, -100],
    ["rgba(10, 10, 10, 0)", "rgba(45, 212, 191, 0.2)"]
  );
  const opacity = useTransform(x, [0, -50, -100], [0, 0.5, 1]);

  return (
    <div className="relative overflow-hidden border border-zinc-800 bg-zinc-950">
      {/* Complete indicator background */}
      <motion.div 
        style={{ background, opacity }}
        className="absolute inset-y-0 right-0 w-24 flex items-center justify-center bg-teal-400"
      >
        <Check className="w-6 h-6 text-black" />
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -100 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) {
            onToggle();
          }
        }}
        style={{ x }}
        className={`
          relative z-10 p-5 transition-colors duration-300 cursor-grab active:cursor-grabbing
          ${isDone 
            ? "bg-teal-400/5" 
            : "bg-zinc-900/30"
          }
        `}
      >
        <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-zinc-800 tracking-tighter">
          E-0{index + 1}
        </div>
        <h3 className={`text-lg font-bold mb-1 tracking-tight uppercase ${isDone ? "text-teal-400" : "text-zinc-100"}`}>
          {exercise.name}
        </h3>
        <p className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center gap-2">
          <span>{exercise.sets} SETS × {exercise.reps} REPS</span>
          {exercise.isCompound && <span className="text-[10px] text-zinc-600 opacity-70 tracking-widest">• COMPOUND</span>}
          {isDone && <Check className="w-3 h-3 text-teal-400" />}
        </p>
      </motion.div>
    </div>
  );
};



