export default function Pad(props){
    return (
        <>
            <button key={props.key} style={{backgroundColor: props.color}}>Color: {props.color}</button>
        </>
    )
}