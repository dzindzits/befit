'use client'

import UserContext from "@/context/user"
import { useContext } from "react"
import { UserPageContent } from "../user/[id]/page";

export default function Account() {
    const {user} = useContext(UserContext);
    return (
        <UserPageContent id={user?.username as string}/>
    )
}