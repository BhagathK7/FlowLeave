import { useEffect, useState } from "react";
import "./Reports.css";
import { getAllLeaves } from "../../services/leaveService";

const FILTERS = ["ALL", "PENDING", "APPROVED", "REJECTED", "CANCELLED"];

function Reports() {

    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("ALL");

    useEffect(() => {

        let active = true;

        async function loadLeaves() {

            try {

                const data = await getAllLeaves();

                if (active) {
                    setLeaves(data);
                }

            } catch (error) {

                console.error("Failed to load reports", error);

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        }

        loadLeaves();

        return () => {
            active = false;
        };

    }, []);

    const filteredLeaves = filter === "ALL"
        ? leaves
        : leaves.filter((leave) => leave.status === filter);

    const summary = {
        total: leaves.length,
        pending: leaves.filter((l) => l.status === "PENDING").length,
        approved: leaves.filter((l) => l.status === "APPROVED").length,
        rejected: leaves.filter((l) => l.status === "REJECTED").length,
        cancelled: leaves.filter((l) => l.status === "CANCELLED").length
    };

    return (

        <div className="reports-page">

            <h1>Reports</h1>

            <div className="summary-grid">

                <div className="summary-card">
                    <h3>Total</h3>
                    <h2>{loading ? "-" : summary.total}</h2>
                </div>

                <div className="summary-card">
                    <h3>Pending</h3>
                    <h2>{loading ? "-" : summary.pending}</h2>
                </div>

                <div className="summary-card">
                    <h3>Approved</h3>
                    <h2>{loading ? "-" : summary.approved}</h2>
                </div>

                <div className="summary-card">
                    <h3>Rejected</h3>
                    <h2>{loading ? "-" : summary.rejected}</h2>
                </div>

                <div className="summary-card">
                    <h3>Cancelled</h3>
                    <h2>{loading ? "-" : summary.cancelled}</h2>
                </div>

            </div>

            <div className="filter-tabs">

                {

                    FILTERS.map((item) => (

                        <button
                            key={item}
                            className={filter === item ? "tab-active" : ""}
                            onClick={() => setFilter(item)}
                        >
                            {item.charAt(0) + item.slice(1).toLowerCase()}
                        </button>

                    ))

                }

            </div>

            <div className="reports-table">

                <table>

                    <thead>

                    <tr>

                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        filteredLeaves.length > 0 ? (

                            filteredLeaves.map((leave) => (

                                <tr key={leave.id}>

                                    <td>

                                        {leave.employee
                                            ? `${leave.employee.firstName} ${leave.employee.lastName}`
                                            : "-"}

                                    </td>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>

                                        <span className={`status-badge status-${leave.status.toLowerCase()}`}>
                                            {leave.status}
                                        </span>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="5">
                                    {loading ? "Loading..." : "No Records Found"}
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

export default Reports;