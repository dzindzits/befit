import { User } from "@/types/user";

export const users: User[] = [
  {
    username: "fujax",
    name: "Dāvis",
    weight: 94,
    dateOfBirth: new Date(),
    profilePic: "/fujax.webp",
    followers: 39,
    following: 24,
  },
  {
    username: "dzindzits",
    name: "Kristers",
    weight: 67,
    dateOfBirth: new Date(2002, 7, 26),
    followers: 19,
    following: 27,
  },
  {
    username: "tjuuuum",
    name: "Tomass",
    weight: 89,
    dateOfBirth: new Date(2002, 1, 7),
    followers: 58,
    following: 17,
  },
];
