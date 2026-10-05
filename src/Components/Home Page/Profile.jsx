import { useEffect, useState } from "react";
import { User, Mail, ShieldCheck, LogOut, Edit3 } from "lucide-react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await api.get("/api/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Profile:", res.data);

            if (res.data.success) {
                setUser(res.data.data);
            }
        } catch (error) {
            console.log(
                "Profile Error:",
                error.response?.data || error.message
            );
            // Token expired or invalid
            toast.error(
                error.response?.data?.message ||
                "Failed to fetch profile. Please log in again."
            );
            localStorage.removeItem("token");
            navigate("/userlogin");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

            {/* Main Container */}
            <div className="max-w-4xl mx-auto">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Profile
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage your personal information and account details.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400"></div>

                    {/* Profile Header */}
                    <div className="px-6 sm:px-10 pb-8">

                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">

                            {/* Avatar + Name */}
                            <div className="-mt-16 flex flex-col sm:flex-row sm:items-end gap-4">

                                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                                    <div className="w-full h-full rounded-full bg-orange-100 flex items-center justify-center">
                                        <User
                                            size={55}
                                            className="text-orange-500"
                                        />
                                    </div>
                                </div>

                                <div className="sm:mb-2">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {user?.fullname}
                                    </h2>

                                    <p className="text-gray-500">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            {/* Edit Button */}
                            <button
                                className="
                                    mt-5 sm:mt-0
                                    inline-flex items-center justify-center gap-2
                                    px-5 py-2.5
                                    rounded-lg
                                    bg-orange-500
                                    text-white
                                    font-medium
                                    hover:bg-orange-600
                                    transition
                                "
                            >
                                <Edit3 size={17} />
                                Edit Profile
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 mt-8 pt-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                Personal Information
                            </h3>

                            {/* Information Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {/* Full Name */}
                                <div className="rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center">
                                            <User
                                                size={21}
                                                className="text-orange-500"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Full Name
                                            </p>

                                            <p className="mt-1 font-semibold text-gray-900">
                                                {user?.fullname}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                                            <Mail
                                                size={21}
                                                className="text-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Email Address
                                            </p>

                                            <p className="mt-1 font-semibold text-gray-900 break-all">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Status */}
                                <div className="rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center">
                                            <ShieldCheck
                                                size={21}
                                                className="text-green-500"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Account Status
                                            </p>

                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>

                                                <p className="font-semibold text-green-600">
                                                    Active
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Account Actions */}
                        <div className="border-t border-gray-100 mt-8 pt-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-5">
                                Account
                            </h3>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    window.location.href = "/userlogin";
                                }}
                                className="
                                    flex items-center gap-3
                                    text-red-500
                                    font-medium
                                    hover:text-red-600
                                    transition
                                "
                            >
                                <LogOut size={19} />
                                Logout
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}