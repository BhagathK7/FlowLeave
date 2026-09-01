import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyLeave.css";
import { getCurrentUser } from "../../utils/auth";
import { applyLeave } from "../../services/leaveService";

function ApplyLeave() {

    const navigate = useNavigate();
    const user = getCurrentUser();

    const [form, setForm] = useState({
        leaveType: "CASUAL",
        startDate: "", 
        endDate: "",
        reason: ""
    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await applyLeave({

                leaveType: form.leaveType,
                startDate: form.startDate,
                endDate: form.endDate,
                reason: form.reason,
                employee: { id: user.id }

            });

            alert("Leave Applied Successfully");

            navigate("/employee/history");

        } catch (error) {

            console.error(error);

            alert("Failed to Apply Leave");

        }

    }

    return (

        <div className="apply-leave">

            <h2>Apply Leave</h2>

            <form onSubmit={handleSubmit}>

                <select
                    name="leaveType"
                    value={form.leaveType}
                    onChange={handleChange}
                >

                    <option value="CASUAL">Casual Leave</option>
                    <option value="SICK">Sick Leave</option>
                    <option value="EARNED">Earned Leave</option>

                </select>

                <input
                    name="startDate"
                    type="date"
                    value={form.startDate}
                    onChange={handleChange}
                    required
                />

                <input
                    name="endDate"
                    type="date"
                    value={form.endDate}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="reason"
                    placeholder="Reason for leave"
                    value={form.reason}
                    onChange={handleChange}
                    required
                />

                <button>

                    Submit Application

                </button>

            </form>

        </div>

    );

}

export default ApplyLeave;
