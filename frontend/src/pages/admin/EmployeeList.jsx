import "./EmployeeList.css";

function EmployeeList() {

    const employees = [

        {
            id:1,
            code:"EMP001",
            name:"John Carter",
            department:"IT",
            role:"Employee"
        },
        {
            id:2,
            code:"EMP002",
            name:"Emma Watson",
            department:"HR",
            role:"Manager"
        },
        {
            id:3,
            code:"EMP003",
            name:"David Miller",
            department:"Finance",
            role:"Employee"
        }

    ];

    return (

        <div className="employee-page">

            <div className="page-header">

                <h1>Employees</h1>

                <button>Add Employee</button>

            </div>

            <div className="employee-table">

                <table>

                    <thead>

                    <tr>

                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        employees.map(employee=>(

                            <tr key={employee.id}>

                                <td>{employee.id}</td>
                                <td>{employee.code}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.role}</td>

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default EmployeeList;