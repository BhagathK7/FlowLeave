import { Bell, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {

    const [darkMode, setDarkMode] = useState(false);

    function toggleTheme() {

        document.body.classList.toggle("dark");

        setDarkMode(!darkMode);

    }

    return (

        <header className="navbar">

            <div className="navbar-left">

                <h2>Dashboard</h2>

            </div>

            <div className="navbar-right">

                <div className="search-box">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search..."
                    />

                </div>

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                >

                    {

                        darkMode
                            ? <Sun size={20}/>
                            : <Moon size={20}/>

                    }

                </button>

                <button className="notification-btn">

                    <Bell size={20}/>

                </button>

                <div className="profile">

                    <div className="avatar">

                        B

                    </div>

                    <div>

                        <h4>Bhagath</h4>

                        <p>Administrator</p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;