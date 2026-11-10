export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className='main-image-container'>
                <img className="main-image"
                     src={props.img.src}
                     alt={props.img.alt}/>
            </div>
            <div>
                <img className="icon-img" src="images/marker.avif"/>
                <span>{props.title}</span>
                <a href={props.mapsRef}> View
                    on Google Maps</a>
                <h2>{props.subTitle}</h2>
                <b>{props.dateInterval}</b>
                <p>{props.description}</p>
            </div>
        </article>
    )
}