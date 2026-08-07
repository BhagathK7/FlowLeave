import "./DashboardLayout.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/admin/Dashboard";
import EmployeeList from "../pages/admin/EmployeeList";
import DepartmentList from "../pages/admin/DepartmentList";
import AddEmployee from "../pages/admin/AddEmployee";
import AddDepartment from "../pages/admin/AddDepartment";

function DashboardLayout() {

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Navbar />

                <section className="page-content">

                    <Routes>

                        <Route
                            index
                            element={<Dashboard />}
                        />

                        <Route
                            path="employees"
                            element={<EmployeeList />}
                        />

                        <Route
                            path="employees/new"
                            element={<AddEmployee />}
                        />

                        <Route
                            path="departments"
                            element={<DepartmentList />}
                        />

                        <Route
                            path="departments/new"
                            element={<AddDepartment />}
                        />

                    </Routes>

                </section>

            </main>

        </div>

    );

}

export default DashboardLayout;