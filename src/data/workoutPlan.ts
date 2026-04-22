export interface WarmupItem {
  name: string;
  detail: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  isCompound: boolean;
}

export interface WorkoutDay {
  id: number;
  title: string;
  subtitle: string;
  isRestDay: boolean;
  warmup: WarmupItem[];
  exercises: Exercise[];
}

export const workoutPlan: WorkoutDay[] = [
  {
    id: 0,
    title: "Day 1 – Push",
    subtitle: "Chest, Shoulders & Triceps",
    isRestDay: false,
    warmup: [
      { name: "Arm circles", detail: "2 min" },
      { name: "Shoulder dislocations", detail: "15 reps" },
      { name: "Light push-ups", detail: "2 sets of 10" }
    ],
    exercises: [
      { name: "Incline DB Press", sets: 4, reps: "8–12", isCompound: true },
      { name: "Flat Bench Press", sets: 4, reps: "8–12", isCompound: true },
      { name: "Overhead Press", sets: 4, reps: "8–12", isCompound: true },
      { name: "Lateral Raises", sets: 3, reps: "12–15", isCompound: false },
      { name: "Tricep Pushdowns", sets: 3, reps: "10–12", isCompound: false }
    ]
  },
  {
    id: 1,
    title: "Day 2 – Pull",
    subtitle: "Back & Biceps",
    isRestDay: false,
    warmup: [
      { name: "Dead hangs", detail: "1 min" },
      { name: "Scapular pulls", detail: "15 reps" },
      { name: "Face pulls (light)", detail: "20 reps" }
    ],
    exercises: [
      { name: "Pull-Ups / Lat Pulldown", sets: 4, reps: "8–10", isCompound: true },
      { name: "Barbell Rows", sets: 4, reps: "8–12", isCompound: true },
      { name: "Face Pulls", sets: 3, reps: "15–20", isCompound: false },
      { name: "Hammer Curls", sets: 3, reps: "10–12", isCompound: false },
      { name: "Barbell Bicep Curls", sets: 3, reps: "10–12", isCompound: false }
    ]
  },
  {
    id: 2,
    title: "Day 3 – Legs",
    subtitle: "Quads, Hamstrings & Calves",
    isRestDay: false,
    warmup: [
      { name: "Leg swings", detail: "1 min each leg" },
      { name: "Bodyweight squats", detail: "20 reps" },
      { name: "Cossack squats", detail: "10 reps each side" }
    ],
    exercises: [
      { name: "Barbell Back Squats", sets: 4, reps: "6–10", isCompound: true },
      { name: "Romanian Deadlifts", sets: 4, reps: "8–12", isCompound: true },
      { name: "Leg Press", sets: 4, reps: "10–12", isCompound: true },
      { name: "Leg Extensions", sets: 3, reps: "12–15", isCompound: false },
      { name: "Standing Calf Raises", sets: 3, reps: "15–20", isCompound: false }
    ]
  },
  {
    id: 3,
    title: "Day 4 – Rest",
    subtitle: "Active Recovery",
    isRestDay: true,
    warmup: [],
    exercises: []
  },
  {
    id: 4,
    title: "Day 5 – Chest/Back/Arms",
    subtitle: "Hypertrophy Focus",
    isRestDay: false,
    warmup: [
      { name: "Dynamic stretches", detail: "5 min" },
      { name: "Light band pull-aparts", detail: "25 reps" }
    ],
    exercises: [
      { name: "DB Flyes", sets: 3, reps: "12–15", isCompound: false },
      { name: "Seated Cable Rows", sets: 4, reps: "10–12", isCompound: true },
      { name: "Dips", sets: 4, reps: "AMRAP", isCompound: true },
      { name: "Incline Bicep Curls", sets: 3, reps: "12–15", isCompound: false },
      { name: "Skull Crushers", sets: 3, reps: "10–12", isCompound: false }
    ]
  },
  {
    id: 5,
    title: "Day 6 – Shoulders/Legs",
    subtitle: "Full Body Finish",
    isRestDay: false,
    warmup: [
      { name: "Shoulder press (empty bar)", detail: "20 reps" },
      { name: "Glute bridges", detail: "20 reps" }
    ],
    exercises: [
      { name: "DB Shoulder Press", sets: 4, reps: "10–12", isCompound: true },
      { name: "Bulgarian Split Squats", sets: 4, reps: "8–10 per leg", isCompound: true },
      { name: "Upright Rows", sets: 3, reps: "12–15", isCompound: false },
      { name: "Lying Leg Curls", sets: 3, reps: "12–15", isCompound: false },
      { name: "Reverse Pec Deck", sets: 3, reps: "15–20", isCompound: false }
    ]
  },
  {
    id: 6,
    title: "Day 7 – Rest",
    subtitle: "Mental & Physical Reset",
    isRestDay: true,
    warmup: [],
    exercises: []
  }
];
