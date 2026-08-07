import { useEffect, useState } from "react";
import "./Profile.css";
import { getCurrentUser } from "../../utils/auth";
import { getEmployee, updateEmployee } from "../../services/employeeService";

function Profile() {

    const user = getCurrentUser();

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {

        let active = true;

        async function loadProfile() {

            try {

                const data = await getEmployee(user.id);

                if (active) {
                    setProfile(data);
                }

            } catch (error) {

                console.error("Failed to load profile", error);

            } finally {

                if (active) {
                    setLoading(false);
                }

            }

        }

        loadProfile();

        return () => {
            active = false;
        };

    }, []);

    function handleChange(e) {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setSaving(true);

            const updated = await updateEmployee(profile.id, profile);

            localStorage.setItem("user", JSON.stringify(updated));

            alert("Profile Updated Successfully");

        } catch (error) {

            console.error(error);
            alert("Failed to Update Profile");

        } finally {

            setSaving(false);

        }

    }

    if (loading || !profile) {

        return (
            <div className="profile-page">
                <p>Loading profile...</p>
            </div>
        );

    }

    return (

        <div className="profile-page">

            <h1>My Profile</h1>

            <form
                className="profile-card"
                onSubmit={handleSubmit}
            >

                <div className="profile-field">

                    <label>Employee Code</label>

                    <input
                        value={profile.employeeCode || ""}
                        disabled
                    />

                </div>

                <div className="profile-field">

                    <label>First Name</label>

                    <input
                        name="firstName"
                        value={profile.firstName || ""}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="profile-field">

                    <label>Last Name</label>

                    <input
                        name="lastName"
                        value={profile.lastName || ""}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="profile-field">

                    <label>Email</label>

                    <input
                        name="email"
                        type="email"
                        value={profile.email || ""}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="profile-field">

                    <label>Designation</label>

                    <input
                        name="designation"
                        value={profile.designation || ""}
                        onChange={handleChange}
                    />

                </div>

                <div className="profile-field">

                    <label>Department</label>

                    <input
                        value={profile.department ? profile.department.departmentName : "-"}
                        disabled
                    />

                </div>

                <button
                    type="submit"
                    disabled={saving}
                >

                    {saving ? "Saving..." : "Save Changes"}

                </button>

            </form>

        </div>

    );

}

export default Profile;