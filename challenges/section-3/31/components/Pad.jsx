import React from 'react'

export default function Pad(props) {

    return (
        <>
            <button onClick={() => props.handleClick(props.id)}
                    style={{backgroundColor: props.color,}}
                    className={props.turnedOn ? 'on' : ''}>Color: {props.color}</button>
        </>
    )
}