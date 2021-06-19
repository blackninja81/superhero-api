import "../App.css";
import Searchbox from "../layouts/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const API = "https://superheroapi.com/api.php/875892883204575/500";

function Homepage() {
    const [hero, setHero] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHero(data);
            });
    }, []);

    return (
        <div className="mainPage">
            <h1>SuperHero Search</h1>
            <Searchbox />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {hero.length > 0 && hero.map(
                                (info) => <Card key={info.id} {...info} />)}
                        </div>
                    </div>
                </div>   
        </div>
    );
}
export default Homepage;