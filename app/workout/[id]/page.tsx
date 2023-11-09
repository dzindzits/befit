import Icon from "@/components/icon";
import Rating from "@/components/rating";
import { trainings } from "@/data/trainings";
import Link from "next/link";
import { notFound } from 'next/navigation'

export default function Workout({ params }: { params: { id: string } }) {
    const workout = trainings.find(({id}) => id === params.id);

    if (!workout) notFound();

    return (
        <div className="relative h-full">
            {workout.isPremium && <div className="absolute inset-0 w-full h-full flex justify-center items-center text-4xl text-bold backdrop-blur-sm z-10">This is premium program</div>}
            <div className="flex flex-col justify-end relative m-4 rounded-lg border border-yellow-400 bg-yellow-400/[.08] aspect-[3/1] overflow-hidden">
                <h1 className='p-3 backdrop-blur-sm bg-yellow-400/[.08] text-xl'>
                    <div className="flex gap-1 items-center">
                        <span>
                            {workout.title}
                        </span>
                        <span>
                            {workout.isPremium && <Icon size="base">workspace_premium</Icon>}
                        </span>
                    </div>
                    <span>
                        <Rating rating={workout.rating} />
                    </span>
                </h1>
                <img src={workout.image} alt="" className="absolute inset-0 w-full h-full object-cover scale-105 z-[-1] opacity-50" />
            </div>
            <div className="px-4">
                <p>
                    <span>by </span>
                    <Link href={`/user/${workout.author.username}`} className="underline text-white/50">@{workout.author.username}</Link>
                </p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl pb-4">Workout program</h2>
                <ul className="flex flex-col gap-6">
                    {workout.exercises.map((exercise) => (
                        <li key={exercise.name} className="flex flex-col gap-2">
                            <p className="text-lg">{exercise.name}</p>
                            <div className="flex gap-8">
                                <div className="flex gap-1 items-center">
                                    <Icon size="2xl">refresh</Icon>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs uppercase text-white/50 !leading-none">Sets</span>
                                        <span className="text-lg text-bold !leading-none">{exercise.sets}</span>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Icon size="2xl">schedule</Icon>
                                    <div className="flex flex-col gap-0.5">
                                    <span className="text-xs uppercase text-white/50 !leading-none">Set duration</span>
                                    <span className="text-lg text-bold !leading-none">{exercise.reps}s</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link className="relative top-8 rounded-lg bg-yellow-400/50 hover:bg-yellow-400/75 p-2 mt-8" href={`/workout/in-progress/${workout.id}`}>Start workout</Link>
            </div>
        </div>
    )
}