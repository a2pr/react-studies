import React from 'react'

export default function App() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
    const allFavoriteThings = [1, 2, 3, 4, 5, 6]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings((prev) => [...prev, 'test'])
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live='polite'>
                {thingsElements}
            </section>
        </main>
    )
}