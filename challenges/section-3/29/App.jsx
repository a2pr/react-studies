import React from 'react'
import pads from './pads'
import Pad from "./components/Pad";

export default function App(props){

    const [entries, setEntries] = React.useState(pads)
    let style = {
        backgroundColor: props.darkMode ? '#222222':'#cccccc'
    }
    let buttons = entries.map((entry)=> <Pad key={entry.id} color={entry.color}></Pad>)
    return (
        <main>
            <div>
                {buttons}
            </div>
        </main>
    )
}