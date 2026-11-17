export default function Pad(props) {
    return (
        <>
            <button key={props.key}
                    style={{backgroundColor: props.color,}}
                    className={props.turnedOn ? 'on' : ''}>Color: {props.color}</button>
        </>
    )
}