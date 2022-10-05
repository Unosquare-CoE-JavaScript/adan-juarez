import { useCallback, useEffect, useRef } from 'react'


export const useClickOutsideListenerRef = () => {
    const ref = useRef(null)
    const escapeListener = useCallback((e) => {
        if(e.key === 'Escape'){
            onClose()
        }
    }, [])

    const clickListener = useCallback((e) => {
        if(!(ref.current).contains(e.target)){
            onClose?.()
        }
    }, [ref.current])

    useEffect(() => {
        document.addEventListener('click', clickListener)
        document.addEventListener('keyup', escapeListener)
        return () => {
            document.removeEventListener('click', clickListener)
            document.removeEventListener('keyup', escapeListener)
        }
    }, [])
    return ref
}


export const useClickOutside = (ref, callback) => {
    const handleClick = e => {
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    })
}