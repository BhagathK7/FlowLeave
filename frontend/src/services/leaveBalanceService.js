import api from "./api";

export const getLeaveBalance = async (employeeId) => {
    const response = await api.get(`/leave-balances/${employeeId}`);
    return response.data;
};