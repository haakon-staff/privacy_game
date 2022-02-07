import { useRef } from 'react'

const useTimer = (params = {}) => {
    const autoStart = params.autoStart ?? false
    const getCurrentTime = () => new Date().getTime() / 1000


    const ref = useRef({ startTime: undefined })
    if (autoStart && ref.current.startTime === undefined) {
        ref.current.startTime = getCurrentTime()
    }

    const startTimer = () => {
        ref.current.startTime = getCurrentTime()
    }

    const getElapsedTime = () => {
        const currentTime = getCurrentTime()
        return currentTime - ref.current.startTime
    }

    return {
        startTimer,
        getElapsedTime
    }
}

export default useTimer
