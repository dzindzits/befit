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
        <form>
            <h1>Login</h1>
            <p>Login with your username and password</p>
            <input name="username" value={form.username} onChange={onInput()} />
            <input name="password" value={form.password} onChange={onInput()} />
            <button onClick={onSubmit()}>Log in</button>
        </form>
    )
}