import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";
import { getEmployees } from "../../services/employeeService";

function EmployeeList() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    async function loadEmployees() {

        try {

            const data = await getEmployees();
            setEmployees(data);

        } catch (error) {

            console.error("Failed to load employees", error);

        }

    }

    useEffect(() => {
        loadEmployees();
    }, []);

    return (

        <div className="employee-page">

            <div className="page-header">

                <h1>Employees</h1>

                <button onClick={() => navigate("/dashboard/employees/new")}>
                    Add Employee
                </button>

            </div>

            <div className="employee-table">

                <table>

                    <thead>

                    <tr>

                        <th>ID</th>
                        <th>Employee Code</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        employees.length > 0 ? (

                            employees.map((employee) => (

                                <tr key={employee.id}>

                                    <td>{employee.id}</td>

                                    <td>{employee.employeeCode}</td>

                                    <td>

                                        {employee.firstName} {employee.lastName}

                                    </td>

                                    <td>

                                        {employee.department
                                            ? employee.department.departmentName
                                            : "-"}

                                    </td>

                                    <td>{employee.role}</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="5">

                                    No Employees Found

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

export default EmployeeList;