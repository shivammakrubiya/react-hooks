import React, { useState } from 'react'
import useDocumentTitle from './Hooks/useDocumentTitle'

function CounterTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default CounterTwo