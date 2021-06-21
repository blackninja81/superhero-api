import "../App.css";
import Searchbox from "../layouts/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const API = "https://superheroapi.com/api.php/875892883204575/search/";

function Homepage() {
    const [hero, setHero] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        fetch(API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setHero(data.results);
            });
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // useEffect(() => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.results);
    //             setHero(data.results);
    //         });
    // }, []);

    return (
        <div className="mainPage">
            <h1>SuperHero Search</h1>
            <div class="container container-fluid">
                <br />
                <br />
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <form class="card card-sm navigation" onSubmit={handleOnSubmit}>
                            <div class="card-body row no-gutters align-items-center">
                                <div class="col-auto">
                                    <i class="fas fa-search h4 text-body"></i>
                                </div>
                                <div class="col">
                                    <input
                                        type="search"
                                        value={searchTerm}
                                        onChange={handleOnChange}
                                        class="form-control form-control-lg form-control-borderless"
                                        placeholder="Search Superhero"
                                    />
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-outline-light" type="submit">Search</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
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