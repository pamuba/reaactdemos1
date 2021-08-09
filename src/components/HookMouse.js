import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    //componentDidMount + componetWillUnmount
    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        //return a function
        return () => {
            console.log('Component unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])
    return (
        <>
            X - {x} Y - {y}
        </>
    )
}

export default HookMouse
