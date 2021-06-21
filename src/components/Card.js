import "../App.js"

function Card({ name, image, id, appearance, biography, work }) {
    return (
        <div className="superInfo container-fluid">
            <div className="superCard">
                <div className="front">
                    <img src={image.url} alt="superhero image" />
                    <div className="card-name">
                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
            <div className="stats">
                <h5>Gender: {appearance.gender}</h5>
                <h5>Race: {appearance.race}</h5>
                <h5>Height: {appearance.height[0]}</h5>
                <h5>Aliases: {biography.aliases}</h5>
                {/* <h5>Alignment: {biography.alignment}</h5> */}
                <h5>Occupation: {work.occupation}</h5>
            </div>
        </div>
    )
}
export default Card;