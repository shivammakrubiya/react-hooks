import React, { useReducer } from 'react'

//  Initial State & action
const initialState = 0;
function reducer(state, action) {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function ReducerCount() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count - {count}
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCount