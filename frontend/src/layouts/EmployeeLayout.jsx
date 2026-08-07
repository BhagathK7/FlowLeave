import { LayoutDashboard, CalendarPlus, History, UserCircle } from "lucide-react";
import { useState } from "react";

import "./DashboardLayout.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/employee/Dashboard";
import ApplyLeave from "../pages/employee/ApplyLeave";
import LeaveHistory from "../pages/employee/LeaveHistory";
import Profile from "../pages/employee/Profile";

const employeeLinks = [
    { to: "", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "apply", icon: <CalendarPlus size={20} />, label: "Apply Leave" },
    { to: "history", icon: <History size={20} />, label: "Leave History" },
    { to: "profile", icon: <UserCircle size={20} />, label: "Profile" }
];

function EmployeeLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="dashboard">

            <Sidebar
                basePath="/employee"
                links={employeeLinks}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="dashboard-content">

                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                <section className="page-content">

                    <Routes>

                        <Route
                            index
                            element={<Dashboard />}
                        />

                        <Route
                            path="apply"
                            element={<ApplyLeave />}
                        />

                        <Route
                            path="history"
                            element={<LeaveHistory />}
                        />

                        <Route
                            path="profile"
                            element={<Profile />}
                        />

                    </Routes>

                </section>

            </main>

        </div>

    );

}

export default EmployeeLayout;