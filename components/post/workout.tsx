import { Post } from "@/types/post";

export default function WorkoutPost({workout}: Post) {
    return (
        <>
            <div className="rounded-xl overflow-hidden border border-yellow-400 flex aspect-video">
                <img src='/map.png' className="flex-1 w-0 object-cover" />
                <img src='/tjum-wheelie.png' className="flex-1 w-0 object-cover" />
            </div>
            <div className="flex justify-evenly gap-8 text-center">
                <div className="flex flex-col items-center gap-0.5 p-2">
                    <span className="text-sm">Workout Time</span>
                    <span className="text-xl">{`${Math.round((workout?.duration || 0) / 60)}:${(workout?.duration || 0) % 60}`}</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 p-2">
                    <span className="text-sm">Distance</span>
                    <span className="text-xl">{((workout?.distance || 0) / 1000).toFixed(2)} km</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 p-2">
                    <span className="text-sm">Total Kilocalories</span>
                    <span className="text-xl">{workout?.calories || 0}</span>
                </div>
            </div>
        </>
    )
}