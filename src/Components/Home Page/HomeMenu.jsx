import axios from "axios";
import { Star, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeMenu() {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Grilled Chicken",
            image: "https://themewagon.github.io/sarab/img/menu/1.jpg",
            description: "Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
            price: 12.99,
            discountprice: 10.99,
        },
        {
            id: 2,
            title: "Margherita Royale",
            image: "https://themewagon.github.io/sarab/img/menu/2.jpg",
            description: "San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base.",
            price: 24.99,
            discountprice: 22.99,
        },
        {
            id: 3,
            title: "Loaded Fajita Wrap",
            image: "https://themewagon.github.io/sarab/img/menu/3.jpg",
            description: "Grilled chicken strips, sauted bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.",
            price: 34.99,
            discountprice: 30.99,
        },
    ]);

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/product/all");
            setProducts(res.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

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
                        Enjoy freshly prepared food made with quality ingredients and
                        delicious flavors.
                    </p>
                </div>

                {/* Products */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {products.slice(0, 3).map((product) => (
                        <Link to={`/product/${product._id}`} key={product._id}>
                            <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* Product Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-lime-950 shadow">
                                        <Star size={16} className="fill-orange-400 text-orange-400" />
                                        4.8
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-lime-950">
                                        {product.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {product.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-2xl font-extrabold text-orange-500">
                                            $ {product.price}
                                        </span>

                                        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-950 text-white transition hover:bg-orange-500">
                                            <ShoppingCart size={19} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View Full Menu Button */}
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
    )
}