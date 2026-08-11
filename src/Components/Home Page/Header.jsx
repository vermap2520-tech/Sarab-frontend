import { useState } from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";

import {
    Menu,
    X,
    Search,
    ShoppingBag, Utensils
} from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] =
        useState(false);

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Menu",
            path: "/menu",
        },
        {
            name: "Chefs",
            path: "/chefs",
        },
        {
            name: "Reservation",
            path: "/reservation",
        },
        {
            name: "Reviews",
            path: "/reviews",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                {/* Logo */}
                <Link to="/" className="inline-block">
                    <div className="flex items-center gap-4 px-7 py-5">
                        {/* Icon */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4511e] shadow-lg shadow-orange-200">
                            <Utensils
                                size={25}
                                strokeWidth={2.5}
                                className="text-white"
                            />
                        </div>

                        {/* Brand Text */}
                        <div>
                            <h1 className="font-serif text-[28px] font-bold leading-none tracking-tight text-[#252525]">
                                Sar<span className="text-[#e94b2b]">ab</span>
                            </h1>

                            <p className="mt-2 text-[9px] font-semibold tracking-[3px] text-[#8d8d96]">
                                FAST FOOD & RESTAURANT
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-6 lg:flex">

                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `font-semibold transition ${isActive
                                    ? "text-orange-600"
                                    : "text-gray-700 hover:text-orange-600"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </div>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-4 lg:flex">

                    <button>
                        <Search size={21} />
                    </button>

                    <button>
                        <ShoppingBag size={21} />
                    </button>

                    <Link
                        to="/orders"
                        className="rounded-full bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
                    >
                        Order Now
                    </Link>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() =>
                        setIsOpen(!isOpen)
                    }
                    className="lg:hidden"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t bg-white px-5 py-6 lg:hidden">

                    <div className="flex flex-col gap-5">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className="font-bold text-gray-700"
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/reservation"
                            onClick={() =>
                                setIsOpen(false)
                            }
                            className="rounded-xl bg-red-600 py-3 text-center font-bold text-white"
                        >
                            Book a Table
                        </Link>

                    </div>

                </div>
            )}

        </header>
    );
}