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
                <div className="border bg-black text-white px-10 m-20 w-sm">

                    <h2 className="mt-4 mb-4 text-4xl font-black  tracking-[1px]">
                        Let's  Talk
                    </h2>
                    <p className="text-white-600 text-sm">
                        We typically respond within 2 hours during business hours.
                    </p>
                    <div className="mt-10 space-y-4">
                        <div className="flex gap-4">
                            <MapPin className="text-orange-600" />
                            <div>
                                <h3 className="font-black">
                                    ADDRESS
                                </h3>
                                <p className="text-gray-600">
                                    42 Flavor Street, Manhattan, New York, NY 10001
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-orange-600" />
                            <div>
                                <h3 className="font-black">
                                    PHONE
                                </h3>
                                <p className="text-gray-600">
                                    +1 (800) 123-4567
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="text-orange-600" />
                            <div>
                                <h3 className="font-black">
                                    EMAIL
                                </h3>
                                <p className="text-gray-600">
                                    hello@sarabfood.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Clock className="text-orange-600" />
                            <div>
                                <h3 className="font-black">
                                    WORKING HOURS
                                </h3>
                                <p className="text-gray-600">
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
                    className="rounded-[35px] bg-orange-50 p-7 border sm:p-10"
                >

                    <h2 className="text-3xl font-black" Send a Message>
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

        </section >
    );
}