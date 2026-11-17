export default function Header(props){
    return (
        <header>
            <img src ="./images/images.png" alt="cheff"/>
            <p>{props.username}</p>
        </header>
    )
}