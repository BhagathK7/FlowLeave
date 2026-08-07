import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, X } from "lucide-react";

import "./Sidebar.css";
import Logo from "./Logo";
import { logout } from "../../utils/auth";

function Sidebar({ basePath, links, isOpen, onClose }) {

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (

        <>

            <div
                className={`sidebar-backdrop ${isOpen ? "visible" : ""}`}
                onClick={onClose}
            />

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>

                <div className="sidebar-top">

                    <Logo />

                    <button
                        className="sidebar-close"
                        onClick={onClose}
                        aria-label="Close menu"
                    >

                        <X size={22} />

                    </button>

                </div>

                <nav className="sidebar-menu">

                    {

                        links.map((link) => (

                            <NavLink
                                key={link.to}
                                to={link.to === "" ? basePath : `${basePath}/${link.to}`}
                                end={link.to === ""}
                                className="sidebar-item"
                                onClick={onClose}
                            >

                                {link.icon}

                                <span>{link.label}</span>

                            </NavLink>

                        ))

                    }

                </nav>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >

                    <LogOut size={20} />

                    <span>Logout</span>

                </button>

            </aside>

        </>

    );

}

export default Sidebar;