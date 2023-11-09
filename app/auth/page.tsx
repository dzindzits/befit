'use client'

import UserContext from "@/context/user";
import { redirect } from "next/navigation";
import { ChangeEvent, useContext, useState } from "react"

export default function Auth() {
    const { user, auth } = useContext(UserContext);

    if (user) redirect('/');

    const [form, setForm] = useState({username: '', password: ''});

    const onInput = () => (event: ChangeEvent) => {
        const { value, name } = event.target as HTMLInputElement;

        setForm((prevForm) => ({...prevForm, [name]: value}))
    }

    const onSubmit = () => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        const response = auth(form.username, form.password);

        if (!response) return console.debug('Failed login');
    }
    return (
        <form className="p-4 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-md text-white/50">Login with your username and password</p>
            <div className="flex flex-col gap-1">
                <input name="username" value={form.username} onChange={onInput()} placeholder="Username" className="p-2 bg-transparent border border-yellow-400 text-white rounded-lg" />
                <input name="password" type="password" value={form.password} onChange={onInput()} placeholder="Password" className="p-2 bg-transparent border border-yellow-400 text-white rounded-lg" />
            </div>
            <button onClick={onSubmit()} className="rounded-lg bg-yellow-400/50 hover:bg-yellow-400/75 p-2">Log in</button>
        </form>
    )
}