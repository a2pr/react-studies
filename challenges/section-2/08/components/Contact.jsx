export default function Contact({img, name,phone,email}) {
    return (
        <div>
            <article>
                <img src={img} alt="cat image"/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone.webp" alt="phone icon"/>
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail.png" alt="mail img"/>
                    <p>{email}</p>
                </div>
            </article>
        </div>
    )
}