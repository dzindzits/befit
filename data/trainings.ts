import { Training } from "@/types/training";
import { users } from "./users";

export const trainings: Training[] = [
  {
    id: "mindfulness-stretch",
    title: "Mindfulness stretch",
    image: "/mindfulness-stretch.jpg",
    author: users[1],
    exercises: [],
    isPremium: true,
    rating: 4.9,
  },
  {
    id: "resnajiem",
    title: "Resnajiem",
    image: "/resnajiem.png",
    author: users[0],
    exercises: [
      { name: "Jumping jacks", sets: 3, reps: 30 },
      { name: "Squats", sets: 3, reps: 30 },
      { name: "Mountain climbers", sets: 3, reps: 30 },
      { name: "Burpees", sets: 3, reps: 30 },
      { name: "Plank", sets: 3, reps: 30 },
    ],
    isPremium: false,
    rating: 4.7,
  },
  {
    id: "izturiba",
    title: "Izturība",
    image: "/izturiba.jpg",
    author: users[2],
    exercises: [],
    isPremium: true,
    rating: 4.2,
  },
  {
    id: "speks-3000",
    title: "Spēks 3000",
    image: "/speks-3000.jpg",
    author: users[0],
    exercises: [],
    isPremium: true,
    rating: 3.8,
  },
  {
    id: "audzejam-krutis",
    title: "Audzējam krūtis",
    image: "/audzejam-krutis.jpg",
    author: users[0],
    exercises: [],
    isPremium: false,
    rating: 3.5,
  },
];
