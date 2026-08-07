import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDepartment } from "../../services/departmentService";
import "./AddDepartment.css";

function AddDepartment() {

    const navigate = useNavigate();

    const [department, setDepartment] = useState({
        departmentName: "",
        description: ""
    });

    function handleChange(e) {

        setDepartment({

            ...department,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await addDepartment(department);

            alert("Department Added Successfully");

            navigate("/admin/departments");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Department");

        }

    }

    return (

        <div className="add-department">

            <h2>Add Department</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="departmentName"
                    placeholder="Department Name"
                    onChange={handleChange}
                    required
                />

                <input
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <button>

                    Save Department

                </button>

            </form>

        </div>

    );

}

export default AddDepartment;