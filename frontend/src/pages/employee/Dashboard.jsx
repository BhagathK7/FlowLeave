import { useEffect, useState } from "react";
import "./Dashboard.css";
import { getCurrentUser } from "../../utils/auth";
import { getLeaveBalance } from "../../services/leaveBalanceService";
import { getEmployeeLeaveHistory } from "../../services/leaveService";

function Dashboard() {

    const user = getCurrentUser();

    const [balance, setBalance] = useState(null);
    const [recentLeaves, setRecentLeaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let active = true;

        async function loadDashboard() {

            try {

                const [balanceData, historyData] = await Promise.all([
                    getLeaveBalance(user.id),
                    getEmployeeLeaveHistory(user.id)
                ]);

                if (!active) {
                    return;
                }

                setBalance(balanceData);
                setRecentLeaves(historyData.slice(0, 5));

            } catch (error) {

                console.error("Failed to load employee dashboard", error);

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
        { title: "Casual Leave", value: balance ? balance.casualLeave : "-" },
        { title: "Sick Leave", value: balance ? balance.sickLeave : "-" },
        { title: "Earned Leave", value: balance ? balance.earnedLeave : "-" }
    ];

    return (

        <div className="dashboard-home">

            <h1>Welcome, {user ? user.firstName : "Employee"}</h1>

            <p>Here is your leave overview.</p>

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

                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        recentLeaves.length > 0 ? (

                            recentLeaves.map((leave) => (

                                <tr key={leave.id}>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>{leave.status}</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="4">
                                    {loading ? "Loading..." : "No Leave Requests Found"}
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