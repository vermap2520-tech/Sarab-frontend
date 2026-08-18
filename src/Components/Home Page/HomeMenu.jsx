import axios from "axios";
import { Star, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeMenu() {
    const [products, setProducts] = useState([
        {
            _id: "1",
            title: "Grilled Chicken",
            image: "https://themewagon.github.io/sarab/img/menu/1.jpg",
            description:
                "Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
            price: 299,
            discount: 10,
        },
        {
            _id: "2",
            title: "Margherita Royale",
            image: "https://themewagon.github.io/sarab/img/menu/2.jpg",
            description:
                "San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base.",
            price: 299,
            discount: 29,
        },
        {
            _id: "3",
            title: "Loaded Fajita Wrap",
            image: "https://themewagon.github.io/sarab/img/menu/3.jpg",
            description:
                "Grilled chicken strips, sauteed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.",
            price: 349,
            discount: 16,
        },
    ]);

    const getProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/product/all"
            );

            if (res.data?.data?.length > 0) {
                setProducts(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const getDiscountedPrice = (price, discount) => {
        return Math.round(price - (price * discount) / 100);
    };

    return (
        <section className="bg-stone-50 py-20">
            <div className="mx-auto max-w-7xl px-5">

                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[5px] text-orange-500">
                        Our Special Menu
                    </p>

                    <h2 className="text-4xl font-extrabold text-lime-950 sm:text-5xl">
                        Delicious Food For You
                    </h2>

                    <p className="mt-5 leading-7 text-gray-500">
                        Enjoy freshly prepared food made with quality ingredients
                        and delicious flavors.
                    </p>
                </div>

                {/* Products */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {products.slice(0, 3).map((product) => {
                        const finalPrice = getDiscountedPrice(
                            product.price,
                            product.discount || 0
                        );

                        return (
                            <div
                                key={product._id}
                                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Product Image */}
                                <Link to={`/product/${product._id}`}>
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                            // onError={(e) => { e.currentTarget.src = "https://themewagon.github.io/sarab/img/menu/1.jpg" }}
                                        />

                                        {/* Rating */}
                                        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-lime-950 shadow">
                                            <Star
                                                size={16}
                                                className="fill-orange-400 text-orange-400"
                                            />
                                            4.8
                                        </div>

                                        {/* Discount */}
                                        {product.discount > 0 && (
                                            <div className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-2 text-xs font-bold text-white">
                                                {product.discount}% OFF
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                {/* Product Details */}
                                <div className="p-6">
                                    <Link to={`/product/${product._id}`}>
                                        <h3 className="text-xl font-bold text-lime-950 transition hover:text-orange-500">
                                            {product.title}
                                        </h3>
                                    </Link>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                                        {product.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between gap-3">

                                        {/* Price */}
                                        <div>
                                            <span className="text-2xl font-extrabold text-orange-500">
                                                ₹{finalPrice}
                                            </span>

                                            {product.discount > 0 && (
                                                <span className="ml-2 text-sm text-gray-400 line-through">
                                                    ₹{product.price}
                                                </span>
                                            )}
                                        </div>

                                        {/* Cart Button */}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                console.log(
                                                    "Add to cart:",
                                                    product
                                                );
                                            }}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-950 text-white transition hover:bg-orange-500"
                                        >
                                            <ShoppingCart size={19} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View Full Menu */}
                <div className="mt-12 text-center">
                    <Link
                        to="/menu"
                        className="inline-flex items-center justify-center rounded-full bg-orange-500 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-lime-950"
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}