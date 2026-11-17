import React from 'react'
import pads from './pads'
import Pad from "./components/Pad";

export default function App(props) {


    const [entries, setEntries] = React.useState(pads)

    function toggle(id) {
        setEntries((prevEntries) => prevEntries.map(function (entry) {
            if (entry.id === id) {
                return {...entry, on: !entry.on}
            }
            return entry
        }))
    }

    let buttons = entries.map((entry) => <Pad key={entry.id} id={entry.id} color={entry.color} turnedOn={entry.on}
                                              handleClick={toggle}></Pad>)
    return (
        <main>
            <div>
                {buttons}
            </div>
        </main>
    )
}