import api from "./api";

export const applyLeave = async (leaveRequest) => {
    const response = await api.post("/leaves/apply", leaveRequest);
    return response.data;
};

export const getEmployeeLeaveHistory = async (employeeId) => {
    const response = await api.get(`/leaves/employee/${employeeId}`);
    return response.data;
};

export const getLeave = async (id) => {
    const response = await api.get(`/leaves/${id}`);
    return response.data;
};

export const cancelLeave = async (id) => {
    const response = await api.put(`/leaves/${id}/cancel`);
    return response.data;
};

export const getAllLeaves = async () => {
    const response = await api.get("/leaves");
    return response.data;
};

export const approveLeave = async (id) => {
    const response = await api.put(`/leaves/${id}/approve`);
    return response.data;
};

export const rejectLeave = async (id, remarks) => {
    const response = await api.put(`/leaves/${id}/reject`, null, {
        params: { remarks }
    });
    return response.data;
};