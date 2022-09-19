import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css"

function Menu({setMenuOpened, menuOpened}) {
    const location = useLocation();
    const [menuOpen, toggleMenu] = useState(false);

    useEffect(() => toggleMenu(false), [location]);

    const menuClick = () => {
        toggleMenu(!menuOpen)
        setMenuOpened(!menuOpened)
    }

    return (
        <div>
            <div
                className={`menu-icon__container${menuOpen ? " menu-open" : ""}`}
                onClick={menuClick}>
                <div className="menu-icon">
                    <div />
                    <div />
                    <div />
                </div>
                <span className={`menu-icon-circle${menuOpen ? "" : " menu-open"}`} />
            </div>

            <div className={`menu-list-container ${menuOpen ? "menu-open" : ""}`}>
                <div className="menu-list">
                    <Link to="/" className="menu-item" onClick={() => setMenuOpened(false)}>
                        <div className="menu-item__title">Home</div>
                        <div className="menu-item__background" />
                        <div className="menu-item__subtitle">Start fresh</div>
                    </Link>
                    <Link to="/about" className="menu-item" onClick={() => setMenuOpened(false)}>
                        <div className="menu-item__title">About</div>
                        <div className="menu-item__background" />
                        <div className="menu-item__subtitle">Me, myself and I</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;
