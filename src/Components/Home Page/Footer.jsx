import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black py-16 text-white">

            <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">

                <div>

                    <h2 className="text-3xl font-black text-orange-500">
                        SARAB
                    </h2>

                    <p className="mt-5 max-w-sm leading-7 text-gray-400">
                        Fresh ingredients, delicious food
                        and memorable dining experiences.
                    </p>

                </div>

                <div>

                    <h3 className="text-xl font-bold">
                        Quick Links
                    </h3>

                    <div className="mt-5 flex flex-col gap-3 text-gray-400">

                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/menu">
                            Menu
                        </Link>

                        <Link to="/chefs">
                            Chefs
                        </Link>

                        <Link to="/reservation">
                            Reservation
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>

                </div>

                <div>

                    <h3 className="text-xl font-bold">
                        Contact
                    </h3>

                    <p className="mt-5 text-gray-400">
                        Jaipur, Rajasthan, India
                    </p>

                    <p className="mt-3 text-gray-400">
                        +91 98765 43210
                    </p>

                    <p className="mt-3 text-gray-400">
                        hello@foodie.com
                    </p>

                </div>

            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 px-5 pt-7 text-center text-gray-500">

                © 2026 FOODIE. All rights reserved.

            </div>

        </footer>
    );
}