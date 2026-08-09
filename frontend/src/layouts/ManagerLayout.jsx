import { LayoutDashboard, ClipboardList, BarChart3 } from "lucide-react";
import { useState } from "react";

import "./DashboardLayout.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/manager/Dashboard";
import PendingRequests from "../pages/manager/PendingRequests";
import Reports from "../pages/manager/Reports";

const managerLinks = [
    { to: "", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "pending", icon: <ClipboardList size={20} />, label: "Pending Requests" },
    { to: "reports", icon: <BarChart3 size={20} />, label: "Reports" }
];

function ManagerLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="dashboard">

            <Sidebar
                basePath="/manager"
                links={managerLinks}
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
                            path="pending"
                            element={<PendingRequests />}
                        />

                        <Route
                            path="reports"
                            element={<Reports />}
                        />

                    </Routes>

                </section>

            </main>

        </div>

    );

}

export default ManagerLayout;