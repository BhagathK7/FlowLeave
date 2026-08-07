import { useEffect, useState } from "react";
import "./LeaveHistory.css";
import { getCurrentUser } from "../../utils/auth";
import { getEmployeeLeaveHistory, cancelLeave } from "../../services/leaveService";

function LeaveHistory() {

    const user = getCurrentUser();

    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshFlag, setRefreshFlag] = useState(0);

    useEffect(() => {

        let active = true;

        async function loadHistory() {

            try {

                const data = await getEmployeeLeaveHistory(user.id);

                if (active) {
                    setLeaves(data);
                }

            } catch (error) {

                console.error("Failed to load leave history", error);

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        }

        loadHistory();

        return () => {
            active = false;
        };

    }, [refreshFlag]);

    async function handleCancel(id) {

        if (!window.confirm("Cancel this leave request?")) {
            return;
        }

        try {

            await cancelLeave(id);
            setRefreshFlag((f) => f + 1);

        } catch (error) {

            console.error(error);
            alert("Failed to cancel leave");

        }

    }

    return (

        <div className="history-page">

            <h1>Leave History</h1>

            <div className="history-table">

                <table>

                    <thead>

                    <tr>

                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        leaves.length > 0 ? (

                            leaves.map((leave) => (

                                <tr key={leave.id}>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>{leave.reason}</td>

                                    <td>

                                        <span className={`status-badge status-${leave.status.toLowerCase()}`}>
                                            {leave.status}
                                        </span>

                                    </td>

                                    <td>

                                        {

                                            leave.status === "PENDING" ? (

                                                <button
                                                    className="cancel-btn"
                                                    onClick={() => handleCancel(leave.id)}
                                                >
                                                    Cancel
                                                </button>

                                            ) : (

                                                "-"

                                            )

                                        }

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="6">
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

export default LeaveHistory;