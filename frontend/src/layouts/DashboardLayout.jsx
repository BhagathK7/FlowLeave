import "./DashboardLayout.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/admin/Dashboard";
import EmployeeList from "../pages/admin/EmployeeList";
import DepartmentList from "../pages/admin/DepartmentList";

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
                            path="departments"
                            element={<DepartmentList />}
                        />

                    </Routes>

                </section>

            </main>

        </div>

    );

}

export default DashboardLayout;