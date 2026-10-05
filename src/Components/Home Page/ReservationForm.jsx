import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function ReservationForm() {
    const [message, setMessage] = useState("");
    const [reservations, setReservations] = useState([]);

    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        guests: "",
        reservationDate: "",
        reservationTime: "",
        tableNumber: "",
        status: "",
        specialRequest: "",
    });

    const getReservations = async () => {
        try {
            const res = await api.get("/api/reservation/all");

            setReservations(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/api/reservation/add", formData);
            setMessage(res.data.message);

            setFormData({
                fullname: "",
                phone: "",
                email: "",
                guests: "",
                reservationDate: "",
                reservationTime: "",
                tableNumber: "",
                status: "",
                specialRequest: "",
            });

            getReservations();
        } catch (error) {
            console.log(error)
            setMessage("Something went wrong!");
        }
    };

    useEffect(() => {
        getReservations();
    }, []);

    return (
        <section className="min-h-screen bg-[#f8f5ef] py-10">
            <div className="mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-8 lg:grid-cols-[340px_1fr]">

                    {/* Left Side */}
                    <div className="rounded-3xl bg-[#1f1f1f] p-8 text-white shadow-2xl">

                        <h3 className="mb-3 text-2xl font-bold">
                            Contact Info
                        </h3>

                        <p className="mb-8 text-gray-400">
                            We're happy to help you plan the perfect dining
                            experience.
                        </p>

                        <div className="space-y-6">

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl">
                                    🕒
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase">
                                        Opening Hours
                                    </h4>
                                    <p className="text-gray-300">
                                        Wed - Sun
                                    </p>

                                    <p className="text-gray-300">
                                        9 AM - 11 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl">
                                    📞
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase">
                                        Booking
                                    </h4>
                                    <p className="text-gray-300">
                                        +91 9876543210
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl">
                                    👥
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase">
                                        Group Dining
                                    </h4>
                                    <p className="text-gray-300">
                                        Special menus for 10+ guests
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl">
                                    📍
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase">
                                        Location
                                    </h4>
                                    <p className="text-gray-300">
                                        42 Food Street, NY
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right Side Form */}

                    <div className="rounded-3xl bg-white p-10 shadow-2xl">

                        <h3 className="text-3xl font-bold text-gray-900">
                            Book a Table
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Fill in the details below.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
                        >

                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            />

                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            >
                                <option value="">Guests</option>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3-4 People</option>
                                <option>5-6 People</option>
                                <option>7-10 People</option>
                                <option>10+ People</option>
                            </select>

                            <input
                                type="date"
                                name="reservationDate"
                                value={formData.reservationDate}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            />

                            <select
                                name="reservationTime"
                                value={formData.reservationTime}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            >
                                <option value="">Select Time</option>
                                <option>08:00 AM</option>
                                <option>10:00 AM</option>
                                <option>12:00 PM</option>
                                <option>02:00 PM</option>
                                <option>04:00 PM</option>
                                <option>06:00 PM</option>
                                <option>08:00 PM</option>
                                <option>10:00 PM</option>
                                <option>12:00 AM</option>
                                <option>02:00 AM</option>
                                <option>04:00 AM</option>
                                <option>06:00 AM</option>
                            </select>

                            <input
                                type="Number"
                                name="tableNumber"
                                value={formData.tableNumber}
                                onChange={handleChange}
                                placeholder="Table Number"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            />

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder="Status"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 outline-none"
                            >
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>

                            <textarea
                                rows="5"
                                name="specialRequest"
                                value={formData.specialRequest}
                                onChange={handleChange}
                                placeholder="Special Request..."
                                className="col-span-full rounded-xl border border-gray-300 p-4 outline-none focus:border-orange-500"
                            />

                            {message && (
                                <div className="col-span-full rounded-xl bg-green-100 p-4 text-center font-semibold text-green-700">
                                    {message}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="col-span-full rounded-xl bg-red-500 py-4 text-lg font-bold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
                            >
                                Confirm Reservation
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}