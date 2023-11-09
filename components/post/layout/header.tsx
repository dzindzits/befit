import UserDisplay from "@/components/user/display";
import { User } from "@/types/user";

export default function PostHeader({ user, caption, hideUser = false }: {user: User, caption?: string, hideUser?: boolean}) {
    return (
        <>
            {!hideUser && <UserDisplay user={user} useLink />}
            <div className="caption">
                {caption}
            </div>
        </>
    )
}