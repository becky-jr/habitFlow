export interface Habit {
  id: string;                  // crypto.randomUUID()
  name: string;                // "Fajr prayer"
  category: Category;          // "spiritual" | "health" | ...
  frequency: Frequency;        // which days it's active
  createdAt: string;           // ISO date
  archived: boolean;
}

export interface CheckIn {
  habitId: string;
  date: string;                // "2026-04-08" (YYYY-MM-DD)
}

export interface Settings {
  theme: "system" | "light" | "dark";
  accentColor: string;
  weekStartsOn: 0 | 1 | 6;    // Sun, Mon, Sat
  reminderEnabled: boolean;
  reminderTime: string;
  streakAlerts: boolean;
}

export type Category =
  | "spiritual"
  | "health"
  | "learning"
  | "lifestyle";

export interface Frequency {
  type: "daily" | "weekly";
  days?: number[];             // [1,3,5] for Mon/Wed/Fri
}