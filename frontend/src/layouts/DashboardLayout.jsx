import "./DashboardLayout.css";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout() {
    return (
        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Navbar />

                <section className="page-content">

                    <div className="welcome-card">

                        <h1>Welcome Back 👋</h1>

                        <p>
                            Smart Leave Management for Modern Workplaces.
                        </p>

                    </div>

                    <div className="dashboard-grid">

                        <div className="dashboard-card">
                            <h3>Employees</h3>
                            <span>150</span>
                        </div>

                        <div className="dashboard-card">
                            <h3>Pending Leaves</h3>
                            <span>12</span>
                        </div>

                        <div className="dashboard-card">
                            <h3>Approved</h3>
                            <span>36</span>
                        </div>

                        <div className="dashboard-card">
                            <h3>Departments</h3>
                            <span>8</span>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default DashboardLayout;