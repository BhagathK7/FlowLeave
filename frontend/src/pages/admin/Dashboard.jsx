import { useEffect, useState } from "react";
import "./Dashboard.css";
import { getAdminDashboard } from "../../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState({
        employees: 0,
        departments: 0,
        pendingLeaves: 0,
        approvedLeaves: 0
    });

    const [recentLeaves, setRecentLeaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {

        try {

            const data = await getAdminDashboard();

            setStats({
                employees: data.employees,
                departments: data.departments,
                pendingLeaves: data.pendingLeaves,
                approvedLeaves: data.approvedLeaves
            });

            setRecentLeaves(data.recentLeaves || []);

        } catch (error) {

            console.error("Failed to load dashboard", error);

        } finally {

            setLoading(false);

        }

    }

    const cards = [
        { title: "Employees", value: stats.employees },
        { title: "Departments", value: stats.departments },
        { title: "Pending Leaves", value: stats.pendingLeaves },
        { title: "Approved Leaves", value: stats.approvedLeaves }
    ];

    return (

        <div className="dashboard-home">

            <h1>Dashboard</h1>

            <p>Welcome back to FlowLeave.</p>

            <div className="stats-grid">

                {

                    cards.map((card) => (

                        <div key={card.title} className="stat-card">

                            <h3>{card.title}</h3>

                            <h2>{loading ? "-" : card.value}</h2>

                        </div>

                    ))

                }

            </div>

            <div className="table-card">

                <h2>Recent Leave Requests</h2>

                <table>

                    <thead>

                    <tr>

                        <th>Employee</th>
                        <th>Leave</th>
                        <th>Status</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        recentLeaves.length > 0 ? (

                            recentLeaves.map((item, index) => (

                                <tr key={index}>

                                    <td>{item.employee}</td>

                                    <td>{item.type}</td>

                                    <td>{item.status}</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="3">
                                    {loading ? "Loading..." : "No Recent Leave Requests"}
                                </td>

                            </tr>

                        )

                    }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Dashboard;