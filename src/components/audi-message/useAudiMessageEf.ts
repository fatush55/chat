// Core
import {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEventListener} from "../../hooks/useEventListener";


export const useAudiMessageEf = () => {
    const audioRef = useRef<HTMLAudioElement>(null)

    const [mode, setMode] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)

    const handlerAction = () => {
        mode && audioRef.current && audioRef.current.play()
        !mode && audioRef.current && audioRef.current.pause()
    }

    useEventListener('playing', () => {
        setMode(false)
    }, audioRef)

    // useEventListener('pause', () => {
    //     setMode(true)
    // }, audioRef)

    audioRef.current && audioRef.current.addEventListener('pause', () => { setMode(true) })

    useEventListener('ended', () => {
        setMode(true)
        setProgress(0)
        setCurrentTime(0)
    }, audioRef)

    useEventListener('timeupdate', () => {
        if (audioRef.current) {
            const duration = audioRef.current && audioRef.current.duration || 0

            setCurrentTime(audioRef.current.currentTime)
            setProgress((audioRef.current.currentTime / duration) * 100)
        }
    }, audioRef)

    return {
        audioRef,
        mode,
        currentTime,
        progress,
        handlerAction,
    }
}
