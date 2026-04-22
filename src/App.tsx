/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { workoutPlan } from "./data/workoutPlan";
import { useWorkoutStore } from "./hooks/useWorkoutStore";
import { Header } from "./components/layout/Header";
import { DayNav } from "./components/layout/DayNav";
import { ProgressBar } from "./components/ui/ProgressBar";
import { ResetButton } from "./components/ui/ResetButton";
import { WarmupSection } from "./components/warmup/WarmupSection";
import { ExerciseList } from "./components/exercise/ExerciseList";

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const { 
    getDayProgress, 
    toggleWarmup, 
    toggleSet, 
    toggleExercise,
    resetDay, 
    getDayCompletion 
  } = useWorkoutStore();

  const dayPlan = workoutPlan[activeDay];
  const dayProgress = getDayProgress(activeDay);
  const { percent } = getDayCompletion(activeDay);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans p-4 md:p-6 flex flex-col">
      <Header 
        title={dayPlan.title} 
        dayNumber={activeDay}
      />
      
      <div className="flex flex-col md:flex-row flex-1 gap-6 md:gap-8 min-h-0">
        {/* Sidebar Nav & Warmup */}
        <aside className="w-full md:w-64 flex flex-col gap-6 flex-none">
          <DayNav 
            activeDay={activeDay} 
            onDayChange={(idx) => setActiveDay(idx)} 
            getCompletion={getDayCompletion}
          />

          <WarmupSection 
            items={dayPlan.warmup} 
            completedItems={dayProgress.warmup}
            onToggle={(idx) => toggleWarmup(activeDay, idx)}
          />
        </aside>

        {/* Exercise Grid */}
        <main className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 border-b border-zinc-800 pb-4">
             <div className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest order-2 sm:order-1">
              [ Training Session Active ]
            </div>
            <div className="w-full sm:w-auto order-1 sm:order-2">
              <ProgressBar percent={percent} />
            </div>
          </div>

          <ExerciseList 
            exercises={dayPlan.exercises} 
            completedSets={dayProgress.exercises}
            onToggle={(eIdx) => toggleExercise(activeDay, eIdx)}
          />

          <footer className="mt-auto flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-center sm:text-left">
              [ System State: Persisted to local_storage ]
            </div>
            {!dayPlan.isRestDay && (
              <ResetButton onReset={() => resetDay(activeDay)} />
            )}
          </footer>
        </main>
      </div>
    </div>
  );
}


