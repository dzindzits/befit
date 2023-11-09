import { TrainingCardLarge } from "@/components/training/card";
import { trainings } from "@/data/trainings";
import Link from "next/link";

export default function Workouts() {
    return (
        <div className="p-4 flex flex-col gap-8">
            <h1 className="text-4xl font-semibold">Workout</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">Your workout stats</h2>
                <div className="flex gap-8 text-center">
                    <div className="flex flex-col items-start gap-0.5 p-2">
                        <p className="text-sm text-left">Workouts done</p>
                        <span className="text-xl">3</span>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 p-2">
                        <p className="text-sm text-left">Calories burned</p>
                        <span className="text-xl">1374</span>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 p-2">
                        <p className="text-sm text-left">Time spent</p>
                        <span className="text-xl">4:24:32</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Top workout programs</h2>
                <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-4 gap-3">
                    {trainings.map((training, first) => (
                        <TrainingCardLarge key={training.id} training={training} isLarge={!first} />
                    ))}
                </div>
                <Link href='/' className="underline text-yellow-400">Explore more workouts</Link>
            </div>
        </div>
    )
}