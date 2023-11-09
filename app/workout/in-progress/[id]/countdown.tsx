'use client'

import { useCallback, useEffect, useState } from "react";

export function useCountdown() {
    const [time, setTime] = useState(0);
    
    const decreaseNum = () => setTime((prev) => prev - 1);

    const setTimer = useCallback((seconds: number) => {
        setTime(seconds);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            decreaseNum();
            if (time === 0) {
                return;
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return {time, setTimer};
}

export default function Countdown({ time, limit }: { time: number, limit: number }) {
    
    
    return (
        <>
            <div className="timer flex items-center justify-center h-48 w-48 border-4 border-transparent transition rounded-full text-2xl text-semibold">{time}s</div>
            <style jsx>{`
                .timer {
                    background: linear-gradient(rgb(18, 18, 18), rgb(18, 18, 18)) content-box no-repeat,
                        conic-gradient(rgb(250 204 21) ${(time / limit) * 100}%, 0, rgb(18, 18, 18) ) border-box;
                }
            `}</style>
        </>
        
    );
}