import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, ArrowRight } from "lucide-react";
import api from "../../api/api";

export default function HomeMenu() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            setLoading(true);

            const res = await api.get("/api/product/all");

            // Only first 3 products for Home page
            setProducts(res.data.data.slice(0, 3));
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}
                <div className="text-center">
                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Delicious Menu
                    </p>

                    <h2 className="mt-3 text-4xl font-black text-stone-950 md:text-5xl">
                        Popular Food Items
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Discover our most popular and delicious food items,
                        freshly prepared just for you.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="py-20 text-center">
                        <p className="text-lg font-semibold text-gray-500">
                            Loading delicious food...
                        </p>
                    </div>
                )}

                {/* Products */}
                {!loading && (
                    <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {products.map((product) => (
                            <article
                                key={product._id}
                                className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Product Image */}
                                <Link to={`/product/${product._id}`}>
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={`http://localhost:5000/image-uploads/${product.image}`}
                                            alt={product.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </Link>

                                {/* Product Content */}
                                <div className="p-6">

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <Star
                                            size={17}
                                            fill="currentColor"
                                        />

                                        <span className="font-bold">
                                            4.8
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <Link to={`/product/${product._id}`}>
                                        <h3 className="mt-3 text-2xl font-black text-stone-950 transition hover:text-orange-600">
                                            {product.title}
                                        </h3>
                                    </Link>

                                    {/* Description */}
                                    {product.description && (
                                        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                                            {product.description}
                                        </p>
                                    )}

                                    {/* Price + Cart */}
                                    <div className="mt-5 flex items-center justify-between">

                                        <p className="text-xl font-black text-orange-600">
                                            ₹ {product.price}
                                        </p>

                                        <button
                                            type="button"
                                            className="rounded-full bg-stone-950 p-3 text-white transition hover:bg-orange-600"
                                        >
                                            <ShoppingCart size={20} />
                                        </button>

                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>
                )}

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 font-bold text-white transition hover:bg-stone-950"
                    >
                        View All Menu
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
