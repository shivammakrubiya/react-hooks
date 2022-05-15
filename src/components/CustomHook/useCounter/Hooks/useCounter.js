import { useState } from 'react'

function useCounter(initialValue = 0, value) {
    const [count, setCount] = useState(initialValue)

    const incrementCount = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialValue)
    }
    return [count, incrementCount, decrementCount, reset]
}


export default useCounter