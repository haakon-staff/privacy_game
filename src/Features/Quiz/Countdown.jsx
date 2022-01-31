import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Countdown = () => {
    const [secondsLeft, setSecondsLeft] = useState(5) //6 minites default 360
    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsLeft === 0){
                navigate('/final');
                return;
            }
            setSecondsLeft(secondsLeft - 1);
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [secondsLeft])


    return (
        <div>
            {Math.floor(secondsLeft / 60)}
            :
            {zeroPadding(secondsLeft % 60)}
        </div>
    )
}

export default Countdown


const zeroPadding = (number) => {
    return ("0" + number).slice(-2)
}

