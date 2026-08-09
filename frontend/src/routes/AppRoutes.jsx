import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";

import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";
import ManagerLayout from "../layouts/ManagerLayout";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/admin/*"
                element={
                    <ProtectedRoute allowedRole="ADMIN">
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/employee/*"
                element={
                    <ProtectedRoute allowedRole="EMPLOYEE">
                        <EmployeeLayout />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/manager/*"
                element={
                    <ProtectedRoute allowedRole="MANAGER">
                        <ManagerLayout />
                    </ProtectedRoute>
                }
            />

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />

        </Routes>

    );

}

export default AppRoutes;