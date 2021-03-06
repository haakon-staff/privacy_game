import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Countdown = ({ secondsToCountdown }) => {
    const [secondsLeft, setSecondsLeft] = useState(secondsToCountdown) //6 minites default 360
    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsLeft === 0) {
                navigate('/final');
                return;
            }
            setSecondsLeft(secondsLeft - 1);
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [secondsLeft, navigate])


    return (
        <div className="countdown">
            <span>
                {zeroPadding(Math.floor(secondsLeft / 60))}
                :
                {zeroPadding(secondsLeft % 60)}
            </span>
        </div>
    )
}

export default Countdown


const zeroPadding = (number) => {
    return ("0" + number).slice(-2)
}

