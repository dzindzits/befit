'use client'

import { TrainingCardSmall } from "@/components/training/card";
import UserDisplay from "@/components/user/display";
import { trainings } from "@/data/trainings";
import { users } from "@/data/users"
import { useState } from "react"

export default function Search() {
    const [query, setQuery] = useState('');

    const filteredUsers = users.filter(({username, name}) => username.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    const filteredWorkouts = trainings.filter(({title}) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    return (
        <div className="flex flex-col gap-3">
            <input
                type='search'
                placeholder="Search"
                className="w-full p-4 border border-yellow-400 rounded-full bg-yellow-400/[.08]"
                onInput={(event) => setQuery((event.target as HTMLInputElement)?.value)}
            />
            <h2 className="invisible absolute">Search results</h2>
            {(filteredUsers.length && query) ? <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Users</h3>
                <ul className="flex flex-col gap-2">
                    {filteredUsers.map((user) => (<li key={user.username}><UserDisplay user={user} useLink /></li>))}
                </ul>
            </div> : null}
            {(filteredWorkouts.length && query) ? <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Workouts</h3>
                <ul className="flex flex-col gap-2">
                    {filteredWorkouts.map((workout) => (<li key={workout.title}><TrainingCardSmall training={workout} /></li>))}
                </ul>
            </div> : null}
            {!filteredUsers.length && !filteredWorkouts.length ? <p>No results found</p> : null}
        </div>
    )
}