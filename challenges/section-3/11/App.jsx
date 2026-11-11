import React from 'react'

export default function App() {
    const isGoingOut = true
    return (
        <main>
            <h1>Do I feel Like going out tonight?</h1>
            <button>{isGoingOut ? 'yes' : 'no'}</button>
        </main>
    )
}