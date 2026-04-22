import { useState, useEffect, useCallback } from "react";
import { workoutPlan, WorkoutDay } from "../data/workoutPlan";
import { loadProgress, saveProgress, clearDayProgress, ProgressState, DayProgress } from "../utils/storage";

export const useWorkoutStore = () => {
  const [progress, setProgress] = useState<ProgressState>({});

  // Initialize from localStorage
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const getDayProgress = useCallback((dayIndex: number, currentState?: ProgressState): DayProgress => {
    const day = workoutPlan[dayIndex];
    const targetProgress = currentState || progress;
    const existing = targetProgress[dayIndex.toString()];

    if (existing) return existing;

    // Default state if no progress saved
    return {
      warmup: new Array(day.warmup.length).fill(false),
      exercises: day.exercises.map((ex) => new Array(ex.sets).fill(false)),
    };
  }, [progress]);

  const toggleWarmup = (dayIndex: number, itemIndex: number) => {
    setProgress((prev) => {
      const dayKey = dayIndex.toString();
      const current = getDayProgress(dayIndex, prev);
      
      const nextWarmup = [...current.warmup];
      nextWarmup[itemIndex] = !nextWarmup[itemIndex];

      const nextProgress = {
        ...prev,
        [dayKey]: { ...current, warmup: nextWarmup },
      };
      saveProgress(nextProgress);
      return nextProgress;
    });
  };

  const toggleSet = (dayIndex: number, exerciseIndex: number, setIndex: number) => {
    setProgress((prev) => {
      const dayKey = dayIndex.toString();
      const current = getDayProgress(dayIndex, prev);

      const nextExercises = current.exercises.map((sets, idx) => {
        if (idx !== exerciseIndex) return sets;
        const nextSets = [...sets];
        nextSets[setIndex] = !nextSets[setIndex];
        return nextSets;
      });

      const nextProgress = {
        ...prev,
        [dayKey]: { ...current, exercises: nextExercises },
      };
      saveProgress(nextProgress);
      return nextProgress;
    });
  };
  
  const toggleExercise = (dayIndex: number, exerciseIndex: number) => {
    setProgress((prev) => {
      const dayKey = dayIndex.toString();
      const current = getDayProgress(dayIndex, prev);
      
      const isCurrentlyDone = current.exercises[exerciseIndex].every(Boolean);
      
      const nextExercises = current.exercises.map((sets, idx) => {
        if (idx !== exerciseIndex) return sets;
        return new Array(sets.length).fill(!isCurrentlyDone);
      });

      const nextProgress = {
        ...prev,
        [dayKey]: { ...current, exercises: nextExercises },
      };
      saveProgress(nextProgress);
      return nextProgress;
    });
  };

  const resetDay = (dayIndex: number) => {
    setProgress((prev) => {
      const nextProgress = clearDayProgress(prev, dayIndex);
      return nextProgress;
    });
  };

  const getDayCompletion = (dayIndex: number) => {
    const current = getDayProgress(dayIndex);
    const day = workoutPlan[dayIndex];
    
    if (day.isRestDay) return { completed: 0, total: 0, percent: 100 };

    const totalWarmup = current.warmup.length;
    const completedWarmup = current.warmup.filter(Boolean).length;

    // Treat each exercise as a single unit or all sets?
    // Let's count exercises as units for the progress bar if they are "swiped"
    const totalExercises = current.exercises.length;
    const completedExercises = current.exercises.filter(sets => sets.every(Boolean)).length;

    const total = totalWarmup + totalExercises;
    const completed = completedWarmup + completedExercises;
    const percent = total === 0 ? 100 : Math.round((completed / total) * 100);

    return { completed, total, percent };
  };

  return {
    progress,
    getDayProgress,
    toggleWarmup,
    toggleSet,
    toggleExercise,
    resetDay,
    getDayCompletion,
  };
};
