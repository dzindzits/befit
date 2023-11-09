import { Post } from "@/types/post";
import { users } from "@/data/users";
import { workouts } from "@/data/workouts";

export const posts: Post[] = [
  {
    id: 102,
    type: "workout",
    user: users[2],
    likeCount: 25,
    commentCount: 1,
    workout: workouts[0],
  },
  {
    id: 101,
    type: "achievement",
    user: users[1],
    likeCount: 12,
    commentCount: 0,
    achievement: "Finished cycling season",
  },
  {
    id: 100,
    type: "image",
    user: users[0],
    caption: "Sodien resnejam",
    likeCount: 114,
    commentCount: 6,
    image: "/davis-ed.png",
  },
];
