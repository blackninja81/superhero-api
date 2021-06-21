import "../App.js"
import { Link } from "react-dom";

function Card({ name, image, id, appearance, biography, work, connections }) {
    return (
        <div className="superInfo">
            <div className="superCard">
                <div className="front">
                    <img src={image.url} alt="superhero image" />
                    <div className="card-name">
                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
            <div className="stats">
                <h4>Gender: {appearance.gender}</h4>
                <h4>Race: {appearance.race}</h4>
                <h4>Height: {appearance.height[0]}</h4>
                <h4>Aliases: {biography.aliases}</h4>
                <h4>Alignment: {biography.alignment}</h4>
                <h4>Occupation: {work.occupation}</h4>
            </div>
        </div>
    )
}
export default Card;