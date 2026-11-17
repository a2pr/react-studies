import React from 'react'
import pads from './pads'

export default function App(){

    const [entries, setEntries] = React.useState(pads)
    let buttons = entries.map((entries)=> <button key={entries.id}>Color {entries.color}</button>)
    return (
        <main>
            <div>
                {buttons}
            </div>
        </main>
    )
}