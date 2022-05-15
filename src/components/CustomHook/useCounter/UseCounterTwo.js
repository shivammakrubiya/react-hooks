
import React, { useState } from 'react'
import useCounter from './Hooks/useCounter'

function UseCounterTwo() {

    const [count, incrementCount, decrementCount, reset] = useCounter(10, 10)

    return (
        <div>
            <h1>Count - {count}</h1>
            <div>
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default UseCounterTwo