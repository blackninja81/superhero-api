import '../App.css';

function Searchbox() {
    return (
        <div class="container container-fluid">
            <br />
            <br />
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <form class="card card-sm navigation">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto">
                                <i class="fas fa-search h4 text-body"></i>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Superhero"/>
                                <div class="col-auto">
                                    <button class="btn btn-lg btn-outline-light" type="submit">Search</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Searchbox;
