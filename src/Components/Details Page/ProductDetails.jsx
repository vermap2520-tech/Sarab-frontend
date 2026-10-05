import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    ChevronLeft, ChevronRight, Clock3, Flame, Heart, Minus, Plus, ShoppingBag, Star, Truck, Utensils,
} from "lucide-react";
import api from "../../api/api";

export default function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    // Get Single Product
    const getProduct = async () => {
        try {
            setLoading(true);

            const res = await api.get(`/api/product/singleProduct/${id}`);
            console.log("Product Data:", res.data);

            setProduct(res.data.data || res.data.product || res.data);
        } catch (error) {
            console.error("Error fetching product:", error.res?.data || error.message);

            setProduct(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity(
            (previousQuantity) =>
                previousQuantity + 1
        );
    };

    const decreaseQuantity = () => {
        setQuantity(
            (previousQuantity) =>
                previousQuantity > 1
                    ? previousQuantity - 1
                    : 1
        );
    };

    const addToCart = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please log in to add products to the cart.");
                return;
            }

            const res = await api.post(`/api/cart/addtocart`,
                { id: product._id, quantity: 1, },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                }
            );
            console.log("Cart Response:", res.data);
            alert(`${product.title} added to cart`);
        } catch (error) {
            console.error(
                "Error adding product to cart:", error.res?.data || error.message);

            alert(
                "Product could not be added to cart"
            );
        }
    };

    if (loading) {
        return (
            <div className="grid min-h-screen place-items-center bg-[#fffaf5]">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-600" />

                    <p className="mt-4 text-lg font-bold">
                        Loading product...
                    </p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="grid min-h-screen place-items-center bg-[#fffaf5]">
                <div className="text-center">
                    <h1 className="text-3xl font-black">
                        Product Not Found
                    </h1>

                    <Link
                        to="/"
                        className="mt-5 inline-block rounded-full bg-orange-600 px-6 py-3 font-bold text-white"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Product values
    const price =
        Number(product.price) || 0;

    const discount =
        Number(product.discount) || 0;

    const oldPrice =
        discount > 0
            ? price / (1 - discount / 100)
            : price;

    const productImage = product.image
        ? `http://localhost:5000/image-uploads/${product.image}`
        : "https://placehold.co/800x800?text=Food";

    return (
        <main className="min-h-screen bg-[#fffaf5]">

            {/* Top Offer */}
            <div className="bg-[#f4511e] px-4 py-3 text-center text-sm font-semibold text-white">
                🔥 Free delivery on orders above ₹500
                — Order now!
            </div>

            {/* Breadcrumb */}
            <section className="border-b border-orange-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-5">
                    <div className="flex flex-wrap items-center gap-2 text-sm">

                        <Link
                            to="/"
                            className="text-slate-500 hover:text-orange-600"
                        >
                            Home
                        </Link>

                        <ChevronRight
                            size={16}
                            className="text-slate-400"
                        />

                        <span className="text-slate-500">
                            Menu
                        </span>

                        <ChevronRight
                            size={16}
                            className="text-slate-400"
                        />

                        <span className="font-semibold text-orange-600">
                            {product.title}
                        </span>

                    </div>
                </div>
            </section>

            {/* Product Details */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid items-start gap-10 lg:grid-cols-2">

                    {/* Product Image */}
                    <div>
                        <div className="relative overflow-hidden rounded-[2rem] bg-orange-100">

                            <img
                                src={productImage}
                                alt={product.title}
                                className="h-[400px] w-full object-cover sm:h-[550px]"
                                onError={(event) => {
                                    event.currentTarget.src =
                                        "https://placehold.co/800x800?text=Food";
                                }}
                            />

                            {discount > 0 && (
                                <div className="absolute left-5 top-5">
                                    <span className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2 text-sm font-bold text-white">
                                        <Flame size={17} />

                                        {discount}% OFF
                                    </span>
                                </div>
                            )}

                            <button
                                onClick={() =>
                                    setIsFavorite(
                                        !isFavorite
                                    )
                                }
                                className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white shadow-md"
                            >
                                <Heart
                                    size={21}
                                    className={
                                        isFavorite
                                            ? "fill-red-500 text-red-500"
                                            : "text-slate-700"
                                    }
                                />
                            </button>

                            <button
                                type="button"
                                className="absolute left-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-md"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                type="button"
                                className="absolute right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-md"
                            >
                                <ChevronRight size={22} />
                            </button>

                        </div>

                        {/* Thumbnail */}
                        <div className="mt-5">
                            <img
                                src={productImage}
                                alt={product.title}
                                className="h-24 w-24 rounded-2xl border-2 border-orange-600 object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="lg:pt-4">

                        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                            {product.category || "Food"}
                        </span>

                        <h1 className="mt-5 text-4xl font-black sm:text-5xl">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="mt-5 flex flex-wrap items-center gap-4">

                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(
                                    (star) => (
                                        <Star
                                            key={star}
                                            size={20}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    )
                                )}
                            </div>

                            <span className="font-bold">
                                5.0/5
                            </span>

                            <span className="text-slate-500">
                                (20 Reviews)
                            </span>

                        </div>

                        {/* Price */}
                        <div className="mt-7 flex flex-wrap items-end gap-4">

                            <span className="text-4xl font-black text-orange-600">
                                ₹{price.toFixed(2)}
                            </span>

                            {discount > 0 && (
                                <span className="text-xl font-semibold text-slate-400 line-through">
                                    ₹{oldPrice.toFixed(2)}
                                </span>
                            )}

                            {discount > 0 && (
                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                                    {discount}% OFF
                                </span>
                            )}

                        </div>

                        {/* Description */}
                        <p className="mt-7 text-base leading-8 text-slate-600">
                            {product.description ||
                                "Delicious food prepared with fresh ingredients."}
                        </p>

                        {/* Information Cards */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <Clock3
                                    className="text-orange-600"
                                    size={24}
                                />

                                <p className="mt-3 text-sm text-slate-500">
                                    Preparation
                                </p>

                                <p className="font-bold">
                                    15–20 min
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <Truck
                                    className="text-orange-600"
                                    size={24}
                                />

                                <p className="mt-3 text-sm text-slate-500">
                                    Delivery
                                </p>

                                <p className="font-bold">
                                    20–25 min
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <Utensils
                                    className="text-orange-600"
                                    size={24}
                                />

                                <p className="mt-3 text-sm text-slate-500">
                                    Serving
                                </p>

                                <p className="font-bold">
                                    1 Person
                                </p>
                            </div>

                        </div>

                        {/* Quantity */}
                        <div className="mt-9">

                            <p className="mb-3 text-sm font-bold uppercase">
                                Select Quantity
                            </p>

                            <div className="flex flex-wrap items-center gap-5">

                                <div className="flex items-center rounded-full border border-orange-200 bg-white p-1">

                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        className="grid h-11 w-11 place-items-center rounded-full hover:bg-orange-100"
                                    >
                                        <Minus size={19} />
                                    </button>

                                    <span className="w-12 text-center text-lg font-black">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={increaseQuantity}
                                        className="grid h-11 w-11 place-items-center rounded-full bg-orange-600 text-white"
                                    >
                                        <Plus size={19} />
                                    </button>

                                </div>

                                <span className="text-sm text-slate-500">
                                    Total:

                                    <strong className="ml-2 text-lg text-slate-950">
                                        ₹{(
                                            price * quantity
                                        ).toFixed(2)}
                                    </strong>
                                </span>

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                            <button
                                type="button"
                                onClick={addToCart}
                                className="flex flex-1 items-center justify-center gap-3 rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-orange-700"
                            >
                                <ShoppingBag size={21} />

                                Add to Cart
                            </button>

                            <button
                                type="button"
                                className="rounded-full border-2 border-orange-600 px-8 py-4 font-bold text-orange-600"
                            >
                                Order Now
                            </button>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
