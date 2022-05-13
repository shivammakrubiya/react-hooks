import React, { useContext } from 'react'
import { CounterContext } from '../../../App'

function ComponentF() {
    const countContext = useContext(CounterContext)

    return (
        <div>
            <div>ComponentF - {countContext.ContextCount}</div>
            <div>
                <button onClick={() => countContext.ContextDispatch('increment')}>increment</button>
                <button onClick={() => countContext.ContextDispatch('decrement')}>decrement</button>
                <button onClick={() => countContext.ContextDispatch('reset')}>Reset</button>
            </div>
        </div>)
}

export default ComponentF