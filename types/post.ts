import { User } from "@/types/user";
import { Workout } from "./workout";

export type Post = {
  id: number;
  type: "image" | "workout" | "achievement";
  user: User;
  caption?: string;
  likeCount: number;
  commentCount: number;
  image?: string;
  workout?: Workout;
  achievement?: string;
};
