import React, { useReducer } from 'react'

//  Complex State & action
const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function ReducerCount2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement 5</button>
            </div>
            <div>Count - {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ReducerCount2