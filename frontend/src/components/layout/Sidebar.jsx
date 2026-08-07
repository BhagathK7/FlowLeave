import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import "./Sidebar.css";
import Logo from "./Logo";
import { logout } from "../../utils/auth";

function Sidebar({ basePath, links }) {

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (

        <aside className="sidebar">

            <Logo />

            <nav className="sidebar-menu">

                {

                    links.map((link) => (

                        <NavLink
                            key={link.to}
                            to={link.to === "" ? basePath : `${basePath}/${link.to}`}
                            end={link.to === ""}
                            className="sidebar-item"
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

    );

}

export default Sidebar;