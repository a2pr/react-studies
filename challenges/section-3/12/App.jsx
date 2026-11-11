import React from 'react'

export default function App() {
    const isGoingOut = true
    let answer = isGoingOut ? 'yes' : 'no'
    return (
        <main>
            <h1>Do I feel Like going out tonight?</h1>
            <button>{answer}</button>
        </main>
    )
}