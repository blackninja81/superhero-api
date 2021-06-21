import "../App.js"

function Card({name, image}) {
    return (
        <>
            <div className="superCard">
                <div className="front">
                    <img src={image.url} alt="superhero image" />
                    <div className="card-name">
                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;