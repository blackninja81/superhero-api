import "../App.css";
import Searchbox from "../layouts/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const API = "https://superheroapi.com/api.php/875892883204575/";

function Homepage() {
    const [hero, setHero] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState([]);

    const errorDiv = error
        ? <div className="error">
            <i class="material-icons error-icon">No results</i>
            {error}
        </div>
        : '';

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setError(null);

        fetch(API + "search/" + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setHero(data.results);
            })
            .catch(
                res => {
                    setError(error);
                }
            )
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="mainPage container-fluid">
            <h1>SuperHero Search</h1>
            <div class="container container-fluid">
                <br />
                <br />
                <div>
                    <form class="card navigation" onSubmit={handleOnSubmit}>
                        <div class="card-body">
                            <div class="col">
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={handleOnChange}
                                    class="form-control form-control-lg form-control-borderless"
                                    placeholder="Search Superhero"
                                />
                                {errorDiv}
                                <div class="col-auto">
                                    <button class="btn btn-lg btn-outline-light" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            hero.map((info) => <Card {...info} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Homepage;