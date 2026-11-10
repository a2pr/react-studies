export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className='main-image-container'>
                <img className="main-image"
                     src={props.object.img.src}
                     alt={props.object.img.alt}/>
            </div>
            <div>
                <img className="icon-img" src="images/marker.avif"/>
                <span>{props.object.title}</span>
                <a href={props.object.mapsRef}> View
                    on Google Maps</a>
                <h2>{props.object.subTitle}</h2>
                <b>{props.object.dateInterval}</b>
                <p>{props.object.description}</p>
            </div>
        </article>
    )
}