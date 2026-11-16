import React from 'react'
import Counter from "./components/counter";

export default function App() {
    const [value, setValue] = React.useState(0)

    function plus(event) {
        setValue((oldValue) => oldValue + 1)
    }

    function minus(event) {
        setValue(function (prevValue) {
            return prevValue - 1
        })
    }

    return (
        <main>
            <div>
                <button onClick={minus}>-</button>
                <Counter number={value}></Counter>
                <button onClick={plus}>+</button>
            </div>
        </main>
    )
}