import React from "react";

const Home = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light " id="home">
            <div className="container-fluid">
                <a className="navbar-brand text-primary fs-4 mx-2 fw-bold" href="#home">LEAD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mx-3">
                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#notes">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contact Us</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Home;
