import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../services/employeeService";
import { getDepartments } from "../../services/departmentService";
import "./AddEmployee.css";

function AddEmployee() {

    const navigate = useNavigate();

    const [departments, setDepartments] = useState([]);

    const [employee, setEmployee] = useState({

        employeeCode: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        designation: "",
        joiningDate: "",
        role: "EMPLOYEE",
        departmentId: ""

    });

    useEffect(() => {

        let active = true;

        async function loadDepartments() {

            try {

                const data = await getDepartments();

                if (active) {
                    setDepartments(data);
                }

            } catch (error) {

                console.error("Failed to load departments", error);

            }

        }

        loadDepartments();

        return () => {
            active = false;
        };

    }, []);

    function handleChange(e) {

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const payload = {

                employeeCode: employee.employeeCode,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                password: employee.password,
                designation: employee.designation,
                joiningDate: employee.joiningDate,
                role: employee.role,
                department: employee.departmentId
                    ? { id: Number(employee.departmentId) }
                    : null

            };

            await createEmployee(payload);

            alert("Employee Added Successfully");

            navigate("/admin/employees");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Employee");

        }

    }

    return (

        <div className="add-employee">

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="employeeCode"
                    placeholder="Employee Code"
                    onChange={handleChange}
                    required
                />

                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />

                <input
                    name="designation"
                    placeholder="Designation"
                    onChange={handleChange}
                />

                <input
                    name="joiningDate"
                    type="date"
                    onChange={handleChange}
                />

                <select
                    name="departmentId"
                    value={employee.departmentId}
                    onChange={handleChange}
                >

                    <option value="">Select Department</option>

                    {

                        departments.map((department) => (

                            <option
                                key={department.id}
                                value={department.id}
                            >
                                {department.departmentName}
                            </option>

                        ))

                    }

                </select>

                <select
                    name="role"
                    value={employee.role}
                    onChange={handleChange}
                >

                    <option value="EMPLOYEE">Employee</option>
                    <option value="MANAGER">Manager</option>
                    <option value="ADMIN">Admin</option>

                </select>

                <button>

                    Save Employee

                </button>

            </form>

        </div>

    );

}

export default AddEmployee;