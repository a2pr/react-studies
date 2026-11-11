import React from 'react'

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeState(event) {
        setIsGoingOut((value) => !value)
    }

    return (
        <main>
            <h1>Do I feel Like going out tonight?</h1>
            <button
                aria-label={`Current answer is ${isGoingOut ? 'yes' : 'no'}. Click to change it.`}
                onClick={changeState}>{isGoingOut ? 'yes' : 'no'}
            </button>
        </main>
    )
}