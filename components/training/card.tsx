import { Training } from "@/types/training";
import Icon from "../icon";
import Link from "next/link";

export function TrainingCardSmall({ training }: {training: Training}) {
    return (
        <Link href={`/workout/${training.id}`}>
            <div className="flex gap-2 items-center">
                <div className="relative flex items-center justify-center rounded-lg overflow-hidden h-11 aspect-square bg-yellow-400/25">
                    {training?.image ? <img src={training.image} alt="" className="absolute inset-0 w-full h-full object-cover" /> : <Icon>exercise</Icon>}
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <span className="text-md">{training.title}</span>
                    {training.isPremium && <Icon size="base">workspace_premium</Icon>}
                </div>
            </div>
        </Link>
    )
}

export function TrainingCardLarge({ training, isLarge }: {training: Training, isLarge: boolean}) {
    return (
        <div className={`flex flex-col justify-end relative rounded-xl overflow-hidden bg-yellow-400/[.08] ${isLarge ? 'md:row-span-2 col-span-2' : 'aspect-square'}`}>
            {training.isPremium && <div className={`absolute top-0 left-0 z-[1] ${isLarge ? 'p-3' : 'p-2'}`}>
                <Icon size={isLarge ? '2xl' : 'lg'}>workspace_premium</Icon>
            </div>}
            <h3 className={`p-3 backdrop-blur-sm bg-yellow-400/[.08] ${isLarge ? 'text-xl' : 'text-sm'}`}>{training.title}</h3>
            {training?.image && <img src={training.image} alt="" className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-50" />}
            <Link href={`/workout/${training.id}`} className="absolute inset-0 w-full h-full z-[2]"></Link>
        </div>
    )
}