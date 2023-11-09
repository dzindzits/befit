'use client'

import UserContext from "@/context/user"
import { useContext } from "react"
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import Post from "@/components/post";

export default function Account() {
    const {user} = useContext(UserContext);

    if (!user) notFound();

    return (
        <div className="px-4">
            <div className="flex gap-8 py-4">
                <div className="relative flex items-center justify-center rounded-full overflow-hidden h-24 aspect-square bg-yellow-400/25">
                    {user?.profilePic ? <img src={user.profilePic} alt="" className="absolute inset-0 w-full h-full object-cover" /> : <Icon size="4xl">person</Icon>}
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-end gap-2">
                        <span className="text-xl">{user.name}</span>
                        <span className="text-base text-white/50">@{user.username}</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-end gap-2">
                            <span className="text-base">{user.followers}</span>
                            <span className="text-sm">followers</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-base">{user.following}</span>
                            <span className="text-sm">following</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <ul className="[&>*:not(:first-child)]:border-t border-t border-yellow-400/[.08]">
                {posts.filter((post) => post.user.username === user.username).map(post => (
                    <li key={post.id} className="py-4 border-yellow-400/[.08]">
                        <Post post={post} hideUser />
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}