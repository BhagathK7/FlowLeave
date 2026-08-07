import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import "./Navbar.css";
import { getCurrentUser } from "../../utils/auth";

const PAGE_TITLES = {
    "": "Dashboard",
    "employees": "Employees",
    "employees/new": "Add Employee",
    "departments": "Departments",
    "departments/new": "Add Department",
    "apply": "Apply Leave",
    "history": "Leave History",
    "profile": "My Profile",
    "pending": "Pending Requests",
    "reports": "Reports"
};

const ROLE_LABELS = {
    ADMIN: "Administrator",
    MANAGER: "Manager",
    EMPLOYEE: "Employee"
};

function getPageTitle(pathname) {

    const parts = pathname.split("/").filter(Boolean);

    const subPath = parts.slice(1).join("/");

    return PAGE_TITLES[subPath] || "Dashboard";

}

function Navbar({ onMenuClick }) {

    const location = useLocation();
    const user = getCurrentUser();

    const [darkMode, setDarkMode] = useState(false);

    function toggleTheme() {

        document.body.classList.toggle("dark");

        setDarkMode(!darkMode);

    }

    const pageTitle = getPageTitle(location.pathname);

    const displayName = user
        ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User"
        : "Guest";

    const displayRole = user && ROLE_LABELS[user.role]
        ? ROLE_LABELS[user.role]
        : "Guest";

    const initial = displayName.charAt(0).toUpperCase() || "U";

    return (

        <header className="navbar">

            <div className="navbar-left">

                <button
                    className="menu-btn"
                    onClick={onMenuClick}
                    aria-label="Toggle menu"
                >

                    <Menu size={22} />

                </button>

                <h2>{pageTitle}</h2>

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

                        {initial}

                    </div>

                    <div className="profile-text">

                        <h4>{displayName}</h4>

                        <p>{displayRole}</p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;