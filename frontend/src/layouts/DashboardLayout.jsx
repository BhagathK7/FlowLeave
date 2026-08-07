import { LayoutDashboard, Users, Building2 } from "lucide-react";
import { useState } from "react";

import "./DashboardLayout.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Dashboard from "../pages/admin/Dashboard";
import EmployeeList from "../pages/admin/EmployeeList";
import DepartmentList from "../pages/admin/DepartmentList";
import AddEmployee from "../pages/admin/AddEmployee";
import AddDepartment from "../pages/admin/AddDepartment";

const adminLinks = [
    { to: "", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "employees", icon: <Users size={20} />, label: "Employees" },
    { to: "departments", icon: <Building2 size={20} />, label: "Departments" }
];

function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="dashboard">

            <Sidebar
                basePath="/admin"
                links={adminLinks}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="dashboard-content">

                <Navbar onMenuClick={() => setSidebarOpen(true)} />

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