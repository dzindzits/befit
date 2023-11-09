import { User } from "@/types/user";
import Icon from "../icon";
import Link from "next/link";

function UserDisplayContent({user}: {user: User}) {
    return (
        <div className="flex gap-2">
            <div className="relative flex items-center justify-center rounded-full overflow-hidden h-11 aspect-square bg-yellow-400/25">
                {user?.profilePic ? <img src={user.profilePic} alt="" className="absolute inset-0 w-full h-full object-cover" /> : <Icon>person</Icon>}
            </div>
            <div className="flex flex-col">
                <span className="text-md">{user.name}</span>
                <span className="text-sm text-white/50">@{user.username}</span>
            </div>
        </div>
    )
}

export default function UserDisplay({ user, useLink = false }: { user: User, useLink?: boolean }) {
    return useLink ? <Link href={`/user/${user.username}`}>
        <UserDisplayContent user={user} />
    </Link> : <UserDisplayContent user={user} />

}