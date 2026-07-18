export type CurriculumDay = {
  week: number;
  day: number;
  time: string;
  theme: string;
  title: string;
  insight: string;
  tasks: string[];
  resources: string[];
  outcomes: string[];
};

export type BookTier = "essential" | "important" | "optional";

export type LibraryBook = {
  title: string;
  author: string;
  tier: BookTier;
  desc: string;
  link?: string;
};
