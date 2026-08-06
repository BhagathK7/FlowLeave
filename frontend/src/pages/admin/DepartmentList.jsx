import "./DepartmentList.css";

function DepartmentList(){

    const departments=[

        {
            id:1,
            name:"Information Technology"
        },
        {
            id:2,
            name:"Human Resources"
        },
        {
            id:3,
            name:"Finance"
        }

    ];

    return(

        <div className="department-page">

            <div className="page-header">

                <h1>Departments</h1>

                <button>Add Department</button>

            </div>

            <div className="department-grid">

                {

                    departments.map(department=>(

                        <div
                            className="department-card"
                            key={department.id}
                        >

                            <h3>{department.name}</h3>

                            <p>Department ID : {department.id}</p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default DepartmentList;