import React from 'react'

export default function App() {
    function handleClick(event){
        setResult("Definitely")
    }
    let [result, setResult] = React.useState('yes')
    console.log(result)
    return (
        <main>
            <h1>Is state important to know?</h1>
            <button onClick={handleClick}>{result}</button>
        </main>
    )
}