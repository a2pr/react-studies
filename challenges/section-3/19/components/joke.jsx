import React from 'react'

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function showPunchLine() {
        setIsShown((prev) => !prev)
    }

    const punchline = isShown ? <h3>{props.punchline}</h3> : ''
    console.log(isShown)
    return (
        <div>
            <h2>{props.setup === '' ? '' : props.setup}</h2>
            {punchline}
            <span>Upvotes: {props.upvotes ? props.upvotes : 0}</span>
            <br/>
            <b>joke is a pun {props.isPun ? ':checked:' : ''}</b>
            <hr/>
            <button onClick={showPunchLine}>Show punchline</button>
        </div>
    )
}