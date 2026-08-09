import { useEffect, useState } from "react";
import "./PendingRequests.css";
import { getLeavesByStatus, approveLeave, rejectLeave } from "../../services/leaveService";

function PendingRequests() {

    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshFlag, setRefreshFlag] = useState(0);

    useEffect(() => {

        let active = true;

        async function loadPending() {

            try {

                const data = await getLeavesByStatus("PENDING");

                if (active) {
                    setLeaves(data);
                }

            } catch (error) {

                console.error("Failed to load pending requests", error);

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        }

        loadPending();

        return () => {
            active = false;
        };

    }, [refreshFlag]);

    async function handleApprove(id) {

        if (!window.confirm("Approve this leave request?")) {
            return;
        }

        try {

            await approveLeave(id);
            setRefreshFlag((f) => f + 1);

        } catch (error) {

            console.error(error);
            alert("Failed to approve leave");

        }

    }

    async function handleReject(id) {

        const remarks = window.prompt("Reason for rejection:");

        if (remarks === null || remarks.trim() === "") {
            return;
        }

        try {

            await rejectLeave(id, remarks);
            setRefreshFlag((f) => f + 1);

        } catch (error) {

            console.error(error);
            alert("Failed to reject leave");

        }

    }

    return (

        <div className="pending-page">

            <h1>Pending Requests</h1>

            <div className="pending-table">

                <table>

                    <thead>

                    <tr>

                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Reason</th>
                        <th>Actions</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        leaves.length > 0 ? (

                            leaves.map((leave) => (

                                <tr key={leave.id}>

                                    <td>

                                        {leave.employee
                                            ? `${leave.employee.firstName} ${leave.employee.lastName}`
                                            : "-"}

                                    </td>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>{leave.reason}</td>

                                    <td className="action-cell">

                                        <button
                                            className="approve-btn"
                                            onClick={() => handleApprove(leave.id)}
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="reject-btn"
                                            onClick={() => handleReject(leave.id)}
                                        >
                                            Reject
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="6">
                                    {loading ? "Loading..." : "No Pending Requests"}
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

export default PendingRequests;