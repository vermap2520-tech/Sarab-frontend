import { useState } from "react";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

export default function ContactSection() {
    const [success, setSuccess] =
        useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setSuccess(
            "Your message has been sent successfully!"
        );

        event.target.reset();
    };

    return (
        <section className="py-24">

            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">

                {/* Contact Details */}
                <div>

                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Contact Information
                    </p>

                    <h2 className="mt-4 text-5xl font-black">
                        We Would Love

                        <span className="block text-orange-600">
                            To Hear From You
                        </span>
                    </h2>

                    <div className="mt-10 space-y-7">

                        <div className="flex gap-4">

                            <MapPin className="text-orange-600" />

                            <div>

                                <h3 className="font-black">
                                    Address
                                </h3>

                                <p className="text-gray-600">
                                    Jaipur, Rajasthan, India
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Phone className="text-orange-600" />

                            <div>

                                <h3 className="font-black">
                                    Phone
                                </h3>

                                <p className="text-gray-600">
                                    +91 98765 43210
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Mail className="text-orange-600" />

                            <div>

                                <h3 className="font-black">
                                    Email
                                </h3>

                                <p className="text-gray-600">
                                    hello@foodie.com
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Clock className="text-orange-600" />

                            <div>

                                <h3 className="font-black">
                                    Opening Hours
                                </h3>

                                <p className="text-gray-600">
                                    Monday–Sunday:
                                    10 AM–11 PM
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-[35px] bg-orange-50 p-7 sm:p-10"
                >

                    <h2 className="text-3xl font-black">
                        Send a Message
                    </h2>

                    <div className="mt-7 space-y-5">

                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-xl border bg-white p-4 outline-orange-500"
                        />

                        <input
                            required
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-xl border bg-white p-4 outline-orange-500"
                        />

                        <input
                            required
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-xl border bg-white p-4 outline-orange-500"
                        />

                        <textarea
                            required
                            rows="6"
                            placeholder="Write your message"
                            className="w-full rounded-xl border bg-white p-4 outline-orange-500"
                        />

                        {success && (
                            <p className="rounded-lg bg-green-100 p-3 font-semibold text-green-700">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-orange-600 py-4 font-black text-white hover:bg-orange-700"
                        >
                            Send Message
                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
}