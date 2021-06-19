import "../App.js"

function Card({name}) {
    return (
        <>
        <div className="superCard">
            <div className="card-image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.McoFxrPoHDAC1PDnm5g26wHaEK%26pid%3DApi&f=1" alt="superhero image" />
            </div>
            <div className="card-name">
                <h3>{name}</h3>
            </div>
        </div>
        </>
    )
}
export default Card;