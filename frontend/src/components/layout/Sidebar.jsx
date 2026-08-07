import {
    LayoutDashboard,
    Users,
    Building2,
    LogOut
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Logo from "./Logo";

function Sidebar() {

    return (

        <aside className="sidebar">

            <Logo />

            <nav className="sidebar-menu">

                <NavLink
                    to="/dashboard"
                    end
                    className="sidebar-item"
                >

                    <LayoutDashboard size={20}/>

                    <span>Dashboard</span>

                </NavLink>

                <NavLink
                    to="/dashboard/employees"
                    className="sidebar-item"
                >

                    <Users size={20}/>

                    <span>Employees</span>

                </NavLink>

                <NavLink
                    to="/dashboard/departments"
                    className="sidebar-item"
                >

                    <Building2 size={20}/>

                    <span>Departments</span>

                </NavLink>

            </nav>

            <button className="logout-btn">

                <LogOut size={20} />

                <span>Logout</span>

            </button>

        </aside>

    );

}

export default Sidebar;