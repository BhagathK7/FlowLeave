import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentList.css";
import { getDepartments } from "../../services/departmentService";

function DepartmentList() {

    const navigate = useNavigate();

    const [departments, setDepartments] = useState([]);

    async function loadDepartments() {

        try {

            const data = await getDepartments();

            setDepartments(data);

        } catch (error) {

            console.error("Failed to load departments", error);

        }

    }

    useEffect(() => {
        loadDepartments();
    }, []);

    return (

        <div className="department-page">

            <div className="page-header">

                <h1>Departments</h1>

                <button onClick={() => navigate("/dashboard/departments/new")}>
                    Add Department
                </button>

            </div>

            <div className="department-grid">

                {

                    departments.length > 0 ? (

                        departments.map((department) => (

                            <div
                                className="department-card"
                                key={department.id}
                            >

                                <h3>

                                    {department.departmentName}

                                </h3>

                                <p>

                                    {department.description}

                                </p>

                            </div>

                        ))

                    ) : (

                        <p>No Departments Found</p>

                    )

                }

            </div>

        </div>

    );

}

export default DepartmentList;