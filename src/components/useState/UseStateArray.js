import React, { useState } from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])
    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Add Item</button>
            {
                items.map(item => <ul key={item.id}>
                    <li>{item.value}</li>
                </ul>)
            }
        </div>
    )
}

export default UseStateArray