import { User } from "@/types/user";

export type Training = {
  id: string;
  title: string;
  image?: string;
  author: User;
  exercises: Exercise[];
  isPremium: boolean;
  rating: number;
};

export type Exercise = {
  name: string;
  sets: number;
  reps: number;
};
