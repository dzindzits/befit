import Icon from "@/components/icon";
import { trainings } from "@/data/trainings";
import { users } from "@/data/users";
import Link from "next/link";
import Search from "./search";
import { TrainingCardLarge } from "@/components/training/card";

export default function Explore() {
    return (
        <>
            <div className="p-4 border-b border-yellow-400">
                <Search />
            </div>
            <div className="p-4 border-b border-yellow-400 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Top 5 workouts</h2>
                <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-4 gap-3">
                    {trainings.map((training, first) => (
                        <TrainingCardLarge key={training.id} training={training} isLarge={!first} />
                    ))}
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Top 3 users</h2>
                <div className="grid grid-cols-3 gap-3 items-end">
                    {[users[2], users[0], users[1]].map((user, index) => (
                        <Link key={user.username} href={`/user/${user.username}`}>
                            <div className={`rounded-md p-4 ${index === 1 ? 'pb-28 bg-yellow-400' : index === 0 ? 'pb-16 bg-stone-300' : 'pb-4 bg-amber-900'}`}>
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden h-11 aspect-square bg-yellow-400/25">
                                        {user?.profilePic ? <img src={user.profilePic} alt="" className="absolute inset-0 w-full h-full object-cover" /> : <Icon size="2xl">person</Icon>}
                                    </div>
                                    <span className="text-md mix-blend-difference">{user.name}</span>
                                    <span className="text-sm text-white/50 mix-blend-difference">@{user.username}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}