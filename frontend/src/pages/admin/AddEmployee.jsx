import { useState } from "react";
import { createEmployee } from "../../services/employeeService";
import "./AddEmployee.css";

function AddEmployee() {

    const [employee, setEmployee] = useState({

        employeeCode: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        designation: "",
        joiningDate: "",
        role: "EMPLOYEE"

    });

    function handleChange(e) {

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await createEmployee(employee);

            alert("Employee Added Successfully");

            window.location.reload();

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
                    name="role"
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