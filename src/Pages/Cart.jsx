import { useEffect, useState } from "react";
import {
    Minus,
    Plus,
    Trash2,
    ShoppingBag,
    ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Cart() {
    // Static cart data
    const [cartItems, setCartItems] = useState([]);
    // console.log("cartItems", cartItems);

    // Get Cart
    const getCartData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setCartItems([]);
                return;
            }

            const res = await api.get("/api/cart/getcart", {
                headers: { Authorization: `Bearer ${token}` },
            });
            // console.log("Cart Data:", res.data);
            setCartItems(res.data.cartItems);
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setCartItems([]);
        }
    };

    useEffect(() => {
        getCartData();
    }, []);

    // Increase quantity
    const increaseQty = async (id) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                return;
            }

            const res = await api.post(`/api/cart/incQty/${id}`, {},
                { headers: { Authorization: `Bearer ${token}`, }, }
            );
            console.log("Increase:", res.data);
            getCartData();
        } catch (error) {
            console.error("Error increasing quantity:", error);
        }
    };

    // Decrease quantity
    const decreaseQty = async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first.");
                return;
            }

            const res = await api.post(`/api/cart/decQty/${id}`, {}, {
                headers: { Authorization: `Bearer ${token}`, },
            });
            console.log(res.data);
            getCartData();
        } catch (error) {
            console.error("Error decreasing quantity:", error);
            alert("Quantity cannot be less than 1.");
        }
    };

    // Remove Item
    const removeFromCart = async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first.");
                return;
            }

            const res = await api.delete(`/api/cart/removefromcart/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}`, },
                }
            );

            console.log("Remove", res.data);
            getCartData();
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + (item?.items?.price) * (item.quantity),
        0
    );

    const deliveryFee = subtotal > 0 ? 40 : 0;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + deliveryFee + tax;

    // setInterval(() => {

    // }, 2000); 

    // Razorpay Payment
    const handlePayment = async (amount) => {
        console.log(amount);
        try {

            // 1. Backend se Razorpay order create karo
            const { data } = await api.post("/api/payment/create-order", { amount: total, });

            const order = data.order;
            console.log(data);

            // 2. Razorpay checkout options
            const options = {
                key: "rzp_test_TfrrjJ7xJz5oD2",
                amount: order.amount,
                currency: order.currency,
                name: "Sarab Restaurant",
                description: "Food Order Payment",
                order_id: order.id,

                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999",
                },

                theme: {
                    color: "#F97316",
                },

                handler: async function (response) {
                    console.log("Razorpay Payment Response:", response);
                    try {
                        // Payment verify 
                        const verifyResponse = await api.post("/api/payment/verify-payment",
                            {
                                paymentId: response.razorpay_payment_id,
                            });
                        console.log("Payment Verify Response:", verifyResponse.data);

                        if (verifyResponse.data.success) {
                            alert("Payment successful!");
                        }
                    } catch (error) {
                        console.error("Payment verification error:",
                            error.response?.data || error.message);
                        alert("Payment verification failed.");
                    }
                },
            }
            // Razorpay popup open 
            const razorpay = new window.Razorpay(options);
            razorpay.on("payment.failed",
                function (response) {
                    console.error("Payment Failed:", response.error);
                    alert(response.error?.description || "Payment failed.");
                });
            razorpay.open();
        } catch (error) {
            console.log("Payment error:", error);
            alert(error.res?.data?.message || "Unable to create payment order.");
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Your Cart
                        </h1>
                        <p className="text-gray-500 mt-1">
                            {cartItems.length} items in your cart
                        </p>
                    </div>
                    <Link
                        to="/menu"
                        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                        <ArrowLeft size={18} />
                        Continue Shopping
                    </Link>
                </div>
                {cartItems?.length === 0 ? (
                    /* Empty Cart */
                    <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                        <ShoppingBag
                            size={70}
                            className="mx-auto text-gray-300 mb-5"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Your cart is empty
                        </h2>
                        <p className="text-gray-500 mt-2 mb-6">
                            Add some delicious food to your cart.
                        </p>
                        <Link
                            to="/menu"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
                        >
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">

                            {cartItems && cartItems?.map((product) => (
                                <div
                                    key={product._id}
                                    className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-5"
                                >
                                    {/* Image */}
                                    <img
                                        src={product?.items?.image
                                            ? `http://localhost:5000/image-uploads/${product.items.image}`
                                            : "https://via.placeholder.com/150"}
                                        // alt={product.title}
                                        className="w-full sm:w-32 h-32 object-cover rounded-xl"
                                    />

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between">

                                        <div className="flex justify-between gap-4">
                                            <div>
                                                <h2 className="text-lg font-semibold text-gray-900">
                                                    {product?.items?.title}
                                                </h2>

                                                <p className="text-orange-600 font-semibold mt-1">
                                                    ₹{Number(product?.items?.price || 0)}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    removeFromCart(product._id)}
                                                className="text-gray-400 hover:text-red-500 transition"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between mt-5">
                                            <div className="flex items-center border rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() =>
                                                        decreaseQty(product._id)
                                                    }
                                                    className="p-2 hover:bg-gray-100"
                                                >
                                                    <Minus size={16} />
                                                </button>

                                                <span className="px-4 font-medium">
                                                    {product?.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQty(product._id)
                                                    }
                                                    className="p-2 hover:bg-gray-100"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            <p className="font-bold text-gray-900">
                                                ₹{(product?.items?.price) * (product?.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-5">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4">

                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery Fee</span>
                                        <span>₹{deliveryFee}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (5%)</span>
                                        <span>₹{tax}</span>
                                    </div>

                                    <div className="border-t pt-4 flex justify-between">
                                        <span className="text-lg font-bold">
                                            Total
                                        </span>

                                        <span className="text-xl font-bold text-orange-600">
                                            ₹{total}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handlePayment(total)}
                                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                                >
                                    Proceed to Checkout
                                </button>

                                <p className="text-center text-sm text-gray-400 mt-4">
                                    Free delivery on orders above ₹500
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
