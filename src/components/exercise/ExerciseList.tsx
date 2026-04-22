import React from "react";
import { Exercise } from "../../data/workoutPlan";
import { ExerciseCard } from "./ExerciseCard";

interface ExerciseListProps {
  exercises: Exercise[];
  completedSets: boolean[][];
  onToggle: (exerciseIndex: number) => void;
}

export const ExerciseList: React.FC<ExerciseListProps> = ({ exercises, completedSets, onToggle }) => {
  if (exercises.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-zinc-800 bg-zinc-900/10">
        <div className="w-16 h-16 border border-zinc-700 flex items-center justify-center mb-4 text-zinc-700 font-mono text-xs uppercase tracking-widest">
          休
        </div>
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Active Recovery</h3>
        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] max-w-[240px]">
          [ System State: Rest ]
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
      {exercises.map((ex, idx) => (
        <ExerciseCard
          key={idx}
          index={idx}
          exercise={ex}
          isDone={completedSets[idx]?.every(Boolean) || false}
          onToggle={() => onToggle(idx)}
        />
      ))}
    </div>
  );
};



