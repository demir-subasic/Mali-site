import React, { useState } from "react";
import malikidslogo from "../assets/malikidslogo.png";
import "./navbar.scss";
import { FaUserLarge } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [isDropVisible, setIsDropVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsDropVisible(true);
    }

    const handleMouseLeave = () => {
        setIsDropVisible(false)
    }

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
                    <li className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Oprema za bebu
                        {isDropVisible && (
                            <div className="dropdown-content">
                                <li className="drop-li">Igracke za ucenje</li>
                                <li className="drop-li">Decje knjige</li>
                                <li className="drop-li">Bojanke i olovke</li>
                                <li className="drop-li">Sprtska oprema</li>
                            </div>
                        )}
                    </li>
                    <li className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Za nju
                        {isDropVisible && (
                            <div className="dropdown-content">
                                <li className="drop-li">Puzzle i slagalice</li>
                                <li className="drop-li">Kreativni materijali</li>
                                <li className="drop-li">Vrtić ili kućna bašta</li>
                            </div>
                        )}
                    </li>
                    <li className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Za njega
                        {isDropVisible && (
                            <div className="dropdown-content">
                                 <li className="drop-li">Puzzle i slagalice</li>
                                <li className="drop-li">Kreativni materijali</li>
                                <li className="drop-li">Vrtić ili kućna bašta</li>
                            </div>
                        )}
                    </li>
                    <li className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Igracke
                        {isDropVisible && (
                            <div className="dropdown-content">
                                <li className="drop-li">Puzzle i slagalice</li>
                                <li className="drop-li">Kreativni materijali</li>
                                <li className="drop-li">Vrtić ili kućna bašta</li>
                                <li className="drop-li">Igracke za ucenje</li>
                                <li className="drop-li">Decje knjige</li>
                                <li className="drop-li">Bojanke i olovke</li>
                                <li className="drop-li">Sprtska oprema</li>
                            </div>
                        )}
                    </li>
                    <li className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Ostalo
                        {isDropVisible && (
                            <div className="dropdown-content">
                                <li className="drop-li">Edukativne igre na računaru ili tabletu</li>
                                <li className="drop-li">Vrtić ili kućna bašta</li>
                                <li className="drop-li">Narukvice</li>
                                <li className="drop-li">Lampe</li>
                                <li className="drop-li">Narukvice</li>
                                <li className="drop-li">Lampe</li>
                            </div>
                        )}
                    </li>
                    <li className="dropdown">Na akciji</li>
                    <li className="dropdown">Kontakt</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
