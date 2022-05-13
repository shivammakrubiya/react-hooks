
import React, { useState, useEffect } from 'react'

function UseEffectInterval() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        function doSomthing() {
            console.log(count);
        }
        doSomthing()
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffectInterval