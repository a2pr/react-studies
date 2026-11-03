export default function Joke(props) {
    return (
        <div>
            <h2>{props.setup === '' ? '' : props.setup}</h2>
            <h3>{props.punchline}</h3>
            <span>Upvotes: {props.upvotes ? props.upvotes : 0}</span>
            <br/>
            <b>joke is a pun {props.isPun ? ':checked:' :''}</b>
            <hr/>
        </div>
    )
}