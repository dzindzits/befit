'use client'

import { trainings } from "@/data/trainings";
import { Exercise } from "@/types/training";
import { notFound } from "next/navigation";
import Countdown, { useCountdown } from "./countdown";
import { useEffect, useState } from "react";


export default function WorkoutInProgress({ params }: { params: { id: string } }) {
    const workout = trainings.find(({id}) => id === params.id);

    if (!workout) notFound();

    const { time, setTimer } = useCountdown();
    const [timerLimit, setTimerLimit] = useState(0);
    const [restMessage, setRestMessage] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exercise, setExercise] = useState(workout.exercises[exerciseIndex]);
    const [repIndex, setRepIndex] = useState(0);

    useEffect(() => {
        if (time !== 0) return;

        const hasTimerEnded = () => new Promise<string>(resolve => {
            setTimerLimit(exercise.reps);
            setTimer(exercise.reps);
            setTimeout(() => {
                resolve('rep finished')
            }, exercise.reps * 1000);
        });

        hasTimerEnded().then(() => {
            const hasRestTimerEnded = () => new Promise<string>(resolve => {
                setRestMessage(true);
                setTimerLimit(120);
                setTimer(120);
                setTimeout(() => {
                    resolve('rest finished')
                    setRepIndex(repIndex + 1);
                    setRestMessage(false);
                }, 120 * 1000);
            });

            hasRestTimerEnded().then(() => hasTimerEnded());
        });
    }, [time, repIndex, exercise, setTimer]);

    return (
        <div className="p-4 flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">{workout.title}</h1>
            <div className="flex flex-col items-center gap-4">
                <Countdown time={time} limit={timerLimit} />
                <p className="text-lg text-center">{restMessage ? 'Rest' : `${exercise.name} (Rep: ${repIndex + 1})`}</p>
            </div>
        </div>
    )
}
