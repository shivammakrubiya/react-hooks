import React, { useState } from 'react'
import UseEffectMouse from './UseEffectMouse'

function HookMouse() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {
                display ? <UseEffectMouse /> : ''
            }
        </div>
    )
}

export default HookMouse