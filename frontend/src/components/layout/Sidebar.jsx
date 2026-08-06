import {
    LayoutDashboard,
    Users,
    Building2,
    CalendarDays,
    ClipboardList,
    BarChart3,
    Settings,
    LogOut
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Logo from "./Logo";
function Sidebar() {

    const menu = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={20} />
        },
        {
            title: "Employees",
            icon: <Users size={20} />
        },
        {
            title: "Departments",
            icon: <Building2 size={20} />
        },
        {
            title: "Leave Requests",
            icon: <CalendarDays size={20} />
        },
        {
            title: "Leave Balance",
            icon: <ClipboardList size={20} />
        },
        {
            title: "Reports",
            icon: <BarChart3 size={20} />
        },
        {
            title: "Settings",
            icon: <Settings size={20} />
        }
    ];

    return (

        <aside className="sidebar">

            <Logo />

            <nav className="sidebar-menu">

                <NavLink
                    to="/dashboard"
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