import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import api from "../../api/api";


const filters = [
    "All",
    "Burgers",
    "Pizza",
    "Chicken",
    "Wraps",
    "Desserts",
    "Pasta",
];

export default function MenuProducts() {
    const [searchParams] = useSearchParams();

    const [products, setProducts] = useState([]);
    console.log(products, "products");
    const [activeFilter, setActiveFilter] = useState(searchParams.get("category") || "All");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Get Products
    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await api.get("/api/product/all");
            console.log(res);
            setProducts(res.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError("Failed to fetch products. Please try again later.");
            setProducts([]);
        }
    };

    const addToCart = async (product) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please log in to add items to your cart.");
                return;
            };

            console.log("Adding product to cart:", product._id);

            const res = await api.post("/api/cart/addtocart",
                { id: product._id, quantity: 1 },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                }
            );
            console.log(res.data);
            alert(`${product.title} added to cart successfully!`);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    // Load Products
    useEffect(() => {
        getProducts();
    }, []);

    // Category Filter
    useEffect(() => {
        setActiveFilter(searchParams.get("category") || "All");
    }, [searchParams]);

    const filteredProducts =
        activeFilter === "All" ? products : products.filter(
            (product) => product.category === activeFilter);


    return (
        <section className="py-10">

            <div className="mx-auto max-w-7xl px-5">

                <div className="text-center">

                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Delicious Menu
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                        Popular Food Items
                    </h2>

                </div>

                {/* Filters */}
                <div className="my-10 flex flex-wrap justify-center gap-3">

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() =>
                                setActiveFilter(filter)
                            }
                            className={`rounded-full px-5 py-3 font-bold transition ${activeFilter === filter
                                ? "bg-orange-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}

                </div>

                {/* Products */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                    {filteredProducts.map(
                        (product) => (
                            <article
                                key={product._id}
                                className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <Link to={`/product/${product._id}`}>
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={`http://localhost:5000/image-uploads/${product.image}`}
                                            alt={product.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-1 text-orange-500">
                                            <Star size={17} fill="currentColor" />
                                            <span className="font-bold">
                                                4.8
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-2xl font-black"> {product.title} </h3>
                                        <div className="mt-5 flex items-center justify-between">
                                            <p className="text-xl font-black text-orange-600"> ₹ {product.price} </p>
                                            <button className="rounded-full bg-stone-950 p-3 text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    addToCart(product);
                                                }}
                                            >
                                                <ShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}