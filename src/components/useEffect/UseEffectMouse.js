import React, { useState, useEffect } from 'react'

function UseEffectMouse() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Moved');
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect render');
        window.addEventListener('mousemove', logMousePosition)

        // Use to ComponentWillUnMount - Event , Subcription, Timer
        return () => {
            console.log("MOuse Rendering Called");
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks  X - {X} Y- {Y}
        </div>
    )
}

export default UseEffectMouse