import React, { useContext } from 'react'
import { CounterContext } from '../../../App'

function ComponentA() {
    const countContext = useContext(CounterContext)
    return (
        <div>
            <div>ComponentA - {countContext.ContextCount}</div>
            <div>
                <button onClick={() => countContext.ContextDispatch('increment')}>increment</button>
                <button onClick={() => countContext.ContextDispatch('decrement')}>decrement</button>
                <button onClick={() => countContext.ContextDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentA