import React from "react";
import malikidslogo from "../assets/malikidslogo.png";
import "./navbar.scss";
import { FaUserLarge } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="upper">
                <div className="navbar-contact-us">
                    <button>
                        Contact us{" "}
                        <span>
                            <FaPhone />
                        </span>{" "}
                        +381 66 512 7878
                    </button>
                </div>
                <div className="navbar-logo">
                    <img src={malikidslogo} alt="" />
                </div>
                <div className="navbar-icons">
                    <button className="navbar-user">
                        <span>
                            <FaUserLarge />
                        </span>
                        Korisnik
                    </button>
                    <button className="navbar-cart">
                        <span>
                            <FaBabyCarriage />
                        </span>
                        Korpa
                    </button>
                </div>
            </div>
            <div className="down-select">
                <div className="search-bar">
                    <div>
                        <input type="text" placeholder="Pretrazi" />
                        <button>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <ul>
                    <li>Na akciji</li>
                    <li>Oprema za bebe</li>
                    <li>Za nju</li>
                    <li>Za njega</li>
                    <li>Za veliku decu</li>
                    <li>Igracke</li>
                    <li>Ostalo</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
