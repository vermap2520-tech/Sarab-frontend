import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";
import axios from "axios";
import api from "../../api/api";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    console.log(formData);


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending constact data:", formData);

        try {
            setLoading(true);
            const res = await api.post("/api/contact/create", formData);
            console.log(res.data);

            if (res.data.success) {
                alert(
                    res.data.message || "Your message has been sent successfully!"
                );

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            }

        } catch (error) {
            console.error("Contact Submit Error:", error.response?.data || error);

            alert(
                error.response?.data?.message || "Unable to send your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-10">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:px-10">

                {/* Contact Details */}
                <div className="rounded-[30px] bg-black text-white p-8 sm:p-10">

                    <h2 className="mb-4 text-4xl font-black tracking-[1px]">
                        Let's  Talk
                    </h2>
                    <p className="text-sm leading-6 text-gray-300">
                        We typically respond within 2 hours during business hours.
                    </p>
                    <div className="mt-10 space-y-7">
                        <div className="flex gap-4">
                            <MapPin className="mt-1 shrink-0 text-orange-600" />
                            <div>
                                <h3 className="text-sm font-bold">
                                    ADDRESS
                                </h3>
                                <p className="mt-1 text-sm  leading-6 text-gray-400">
                                    42 Flavor Street, Manhattan, New York, NY 10001
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="mt-1 shrink-0 text-orange-600" />
                            <div>
                                <h3 className="text-sm font-bold">
                                    PHONE
                                </h3>
                                <p className="mt-1 text-sm text-gray-400">
                                    +91 0123456789
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="mt-1 shrink-0 text-orange-600" />
                            <div>
                                <h3 className="text-sm font-bold">
                                    EMAIL
                                </h3>
                                <p className="mt-1 text-sm text-gray-400">
                                    hello@sarabfood.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Clock className="mt-1 shrink-0 text-orange-600" />
                            <div>
                                <h3 className="text-sm font-bold">
                                    WORKING HOURS
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-gray-400">
                                    Wed–Sun:
                                    9 AM–11 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-[35px] border border-orange-200 bg-orange-100 p-6 sm:p-10"
                >

                    <h2 className="text-3xl font-black text-gray-900">
                        Send a Message
                    </h2>

                    <div className="mt-7 space-y-5">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Name *
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border bg-white p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Email *
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@gmail.com"
                                    className="w-full rounded-xl border bg-white p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                />
                            </div>
                        </div>

                        {/* Phone + Subject */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Phone
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 0123456789"
                                    className="w-full rounded-xl border bg-white p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Subject *
                                </label>
                                <select
                                    required
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border bg-white p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
                                    <option value="">General Inquiry</option>
                                    <option value="Catering & Events">Catering & Events</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Partership">Partership</option>
                                    <option value="Media & Press">Media & Press</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block font-semibold text-gray-700">
                                Message *
                            </label>
                            <textarea
                                required
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                className="w-full rounded-xl border bg-white p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full rounded-xl py-4 font-black text-white transition ${loading
                                ? "cursor-not-allowed bg-orange-400"
                                : "bg-orange-600 hover:bg-orange-700"
                                }`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>

            </div >

        </section >
    );
}