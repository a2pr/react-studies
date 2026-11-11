import React from 'react'

export default function App() {
    const [value, setValue] = React.useState(0)

    function plus(event) {
        setValue(value + 1)

    }

    function minus(event) {
        setValue(value - 1)

    }

    return (
        <main>
            <h1>How many times will Bob say 'state' in this section?</h1>
            <div>
                <button onClick={minus}>-</button>
                <h2>{value}</h2>
                <button onClick={plus}>+</button>
            </div>
        </main>
    )
}