const STORAGE_KEY = "workout_progress_v1";

export interface DayProgress {
  warmup: boolean[];
  exercises: boolean[][];
}

export interface ProgressState {
  [dayIndex: string]: DayProgress;
}

export const loadProgress = (): ProgressState => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error("Failed to load progress", e);
    return {};
  }
};

export const saveProgress = (progress: ProgressState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
};

export const clearDayProgress = (progress: ProgressState, dayIndex: number): ProgressState => {
  const newProgress = { ...progress };
  delete newProgress[dayIndex.toString()];
  saveProgress(newProgress);
  return newProgress;
};
