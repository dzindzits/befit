import { Post } from "@/types/post";

export default function ImagePost({ image }: Post) {
    return (
        <div className="rounded-xl overflow-hidden border border-yellow-400 flex aspect-[4/3]">
            <img src={image} className="flex-1 object-cover" />
        </div>
    )
}