import React from 'react'
import pads from './pads'

export default function App(props){

    const [entries, setEntries] = React.useState(pads)
    let style = {
        backgroundColor: props.darkMode ? '#222222':'#cccccc'
    }
    let buttons = entries.map((entries)=> <button style={style} key={entries.id}>Color {entries.color}</button>)
    return (
        <main>
            <div>
                {buttons}
            </div>
        </main>
    )
}