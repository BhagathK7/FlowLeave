import "./DashboardLayout.css";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/admin/Dashboard";

function DashboardLayout() {
    return (
        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Navbar />

                <section className="page-content">

                    <Dashboard />

                </section>

            </main>

        </div>
    );
}

export default DashboardLayout;