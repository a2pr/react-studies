import React from 'react'

export default function App() {
    let [result, setResult] = React.useState('yes')
    console.log(result)
    return (
        <main>
            <h1>Is state important to know?</h1>
            <button>{result}</button>
        </main>
    )
}