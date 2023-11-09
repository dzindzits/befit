'use client'

import { users } from "@/data/users";
import { User } from "@/types/user";
import { redirect, usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext<{
    user: User | undefined,
    auth: (username: string, password: string) => boolean
}>({ user: {} as User, auth: () => false });

export function UserProvider({children}: {children: React.ReactNode}) {
    const saveUserToLocalStorage = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
    }

    const [user, setUser] = useState<User>();


    const auth = (username: string, password: string) => {
        const authUser = users.find((user) => user.username === username);

        if (!authUser) return false;

        if (password !== 'my-pass') return false;

        setUser(authUser);
        saveUserToLocalStorage(authUser);

        return true;
    }

    const pathname = usePathname();

    useEffect(() => {
        const getUserFromLocalStorage = () => {
            const userData = localStorage.getItem('user');
        
            if (!userData) return;
        
            return JSON.parse(userData);
        }
        
        const localStorageUser = getUserFromLocalStorage();

        if (!user && localStorageUser) return setUser(localStorageUser);

        if (!user && pathname !== '/auth') redirect('/auth')
    }, [user, pathname])
      

    return (
        <UserContext.Provider value={{user, auth}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;