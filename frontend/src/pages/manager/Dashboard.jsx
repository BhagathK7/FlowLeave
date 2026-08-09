import { useEffect, useState } from "react";
import "./Dashboard.css";
import { getManagerDashboard } from "../../services/dashboardService";
import { getCurrentUser } from "../../utils/auth";

function Dashboard() {

    const user = getCurrentUser();

    const [stats, setStats] = useState({
        employees: 0,
        departments: 0,
        pendingLeaves: 0,
        approvedLeaves: 0
    });

    const [recentLeaves, setRecentLeaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let active = true;

        async function loadDashboard() {

            try {

                const data = await getManagerDashboard();

                if (!active) {
                    return;
                }

                setStats({
                    employees: data.employees,
                    departments: data.departments,
                    pendingLeaves: data.pendingLeaves,
                    approvedLeaves: data.approvedLeaves
                });

                setRecentLeaves(data.recentLeaves || []);

            } catch (error) {

                console.error("Failed to load manager dashboard", error);

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        }

        loadDashboard();

        return () => {
            active = false;
        };

    }, []);

    const cards = [
        { title: "Total Employees", value: stats.employees },
        { title: "Departments", value: stats.departments },
        { title: "Pending Approvals", value: stats.pendingLeaves },
        { title: "Approved Leaves", value: stats.approvedLeaves }
    ];

    return (

        <div className="dashboard-home">

            <h1>Welcome, {user ? user.firstName : "Manager"}</h1>

            <p>Here is what needs your attention.</p>

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