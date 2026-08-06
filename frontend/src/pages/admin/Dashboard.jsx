import "./Dashboard.css";

function Dashboard() {

    const cards = [

        {
            title: "Employees",
            value: 152
        },
        {
            title: "Departments",
            value: 8
        },
        {
            title: "Pending Leaves",
            value: 12
        },
        {
            title: "Approved Leaves",
            value: 96
        }

    ];

    const requests = [

        {
            employee: "John Carter",
            type: "Casual Leave",
            status: "Pending"
        },

        {
            employee: "Emma Watson",
            type: "Sick Leave",
            status: "Approved"
        },

        {
            employee: "David Miller",
            type: "Earned Leave",
            status: "Pending"
        }

    ];

    return (

        <div className="dashboard-home">

            <h1>Dashboard</h1>

            <p>Welcome back to FlowLeave.</p>

            <div className="stats-grid">

                {

                    cards.map((card)=>(

                        <div
                            key={card.title}
                            className="stat-card"
                        >

                            <h3>{card.title}</h3>

                            <h2>{card.value}</h2>

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

                        requests.map((item,index)=>(

                            <tr key={index}>

                                <td>{item.employee}</td>

                                <td>{item.type}</td>

                                <td>{item.status}</td>

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Dashboard;