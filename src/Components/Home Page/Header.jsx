import { useEffect, useState } from "react";
import {
    Link,
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    Menu,
    X,
    Search,
    User,
    ShoppingBag,
    Utensils,
    UserCircle,
    LogOut,
} from "lucide-react";
import api from "../../api/api";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const navLinks = [
        { name: "Home", path: "/", },
        { name: "About", path: "/about", },
        { name: "Menu", path: "/menu", },
        { name: "Chefs", path: "/chefs", },
        { name: "Reservation", path: "/reservation", },
        { name: "Reviews", path: "/reviews", },
        { name: "Contact", path: "/contact", },
    ];

    // Fetch logged-in user's profile
    const getProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setUser(null);
                return;
            }
            const res = await api.get("/api/users/profile", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (res.data.success) {
                setUser(res.data.data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Error fetching profile:", error.response?.data || error.message);
            localStorage.removeItem("token");
            setUser(null);
        }
    };

    // Check login user
    useEffect(() => {
        getProfile();
    }, []);

    // useEffect(() => {
    //     const getUserToken = localStorage.getItem("token");

    //     if (getUserToken) {
    //         if (getUserToken) {
    //             setUser(true);
    //         }
    //     } else {
    //         setUser(null);
    //     }
    // }, []);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);
        setUserMenuOpen(false);

        navigate("/userlogin");
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                {/* Logo */}
                <Link to="/" className="inline-block">
                    <div className="flex items-center gap-4 px-7 py-5">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4511e] shadow-lg shadow-orange-200">
                            <Utensils
                                size={25}
                                strokeWidth={2.5}
                                className="text-white"
                            />
                        </div>

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

                    {/* USER */}
                    <div className="relative">

                        <button
                            onClick={() =>
                                setUserMenuOpen(!userMenuOpen)
                            }
                            className="flex items-center justify-center rounded-full p-1 transition hover:bg-gray-100"
                        >
                            <User size={21} />
                        </button>

                        {/* Dropdown */}
                        {userMenuOpen && (
                            <div className="absolute right-0 top-11 z-50 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">

                                {user ? (
                                    <>
                                        {/* User Info */}
                                        <div className="border-b bg-gray-50 px-4 py-3">
                                            <p className="font-semibold text-gray-800">
                                                {user?.fullname || "User"}
                                            </p>

                                            <p className="truncate text-sm text-gray-500">
                                                {user?.email || "user email"}
                                            </p>
                                        </div>

                                        {/* Profile */}
                                        <button
                                            onClick={() => {
                                                setUserMenuOpen(false);
                                                navigate("/profile");
                                            }}
                                            className="flex w-full items-center gap-3 px-4 py-3 text-left text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                                        >
                                            <UserCircle size={19} />
                                            <span>Profile</span>
                                        </button>

                                        {/* Logout */}
                                        <button
                                            onClick={handleLogout}
                                            className="flex w-full items-center gap-3 border-t px-4 py-3 text-left text-red-500 transition hover:bg-red-50"
                                        >
                                            <LogOut size={19} />
                                            <span>Logout</span>
                                        </button>
                                    </>
                                ) : (
                                    /* Login */
                                    <button
                                        onClick={() => {
                                            setUserMenuOpen(false);
                                            navigate("/userlogin");
                                        }}
                                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                                    >
                                        <User size={19} />
                                        <span>Login</span>
                                    </button>
                                )}

                            </div>
                        )}

                    </div>

                    {/* Search */}
                    <button onClick={() => navigate("/search")}>
                        <Search size={21} />
                    </button>

                    {/* Shopping Bag */}
                    <button onClick={() => navigate("/cart")}>
                        <ShoppingBag size={21} />
                    </button>

                    {/* Order Now */}
                    <Link
                        to="/orders"
                        className="rounded-full bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
                    >
                        Order Now
                    </Link>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
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
                                onClick={() => setIsOpen(false)}
                                className="font-bold text-gray-700"
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Mobile User */}
                        {user ? (
                            <>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate("/profile");
                                    }}
                                    className="flex items-center gap-3 font-bold text-gray-700"
                                >
                                    <UserCircle size={20} />
                                    Profile
                                </button>

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleLogout();
                                    }}
                                    className="flex items-center gap-3 font-bold text-red-500"
                                >
                                    <LogOut size={20} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate("/userlogin");
                                }}
                                className="flex items-center gap-3 font-bold text-gray-700"
                            >
                                <User size={20} />
                                Login
                            </button>
                        )}

                        <Link
                            to="/reservation"
                            onClick={() => setIsOpen(false)}
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