import { Post } from "@/types/post";
import Icon from "@/components/icon";

export default function AchievementPost({ achievement }: Post) {
    return (
        <div className="rounded-xl overflow-hidden border border-yellow-400 flex flex-col items-center gap-2 p-8">
            <span className="rounded-full w-10 h-10 p-2 bg-yellow-400/[.08]">
                <Icon>directions_bike</Icon>
            </span>
            <span className="text-xl font-semibold">{achievement}</span>
        </div>
    )
}