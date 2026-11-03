export default function Contact(props) {
    return (
        <div>
            <article>
                <img src={props.img} alt="cat image"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone.webp" alt="phone icon"/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail.png" alt="mail img"/>
                    <p>{props.email}</p>
                </div>
            </article>
        </div>
    )
}