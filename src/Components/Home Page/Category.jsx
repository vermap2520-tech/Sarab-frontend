import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Category() {
    // const [products, setProducts] = useState([]);
    // console.log(products, "products");

    // const getProducts = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:5000/api/product/all");
    //         setProducts(res.data.data);
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //         setProducts([]);
    //     }
    // };

    // const filteredProducts = products.filter(
    //     (product) => product.category !== "All"
    // );

    // useEffect(() => {
    //     getProducts();
    // }, []);


    const categories = [
        {
            id: 1,
            image: "https://themewagon.github.io/sarab/img/category/1.jpg",
            name: "All",
            item: 20,
        },
        {
            id: 2,
            image: "https://themewagon.github.io/sarab/img/category/2.jpg",
            name: "Burgers",
            item: 10,
        },
        {
            id: 3,
            image: "https://themewagon.github.io/sarab/img/category/3.jpg",
            name: "Pizza",
            item: 15,
        },
        {
            id: 4,
            image: "https://themewagon.github.io/sarab/img/category/4.jpg",
            name: "Chicken",
            item: 12,
        },
        {
            id: 5,
            image: "https://themewagon.github.io/sarab/img/category/5.jpg",
            name: "Wraps",
            item: 8,
        },
        {
            id: 6,
            image: "https://themewagon.github.io/sarab/img/category/6.jpg",
            name: "Desserts",
            item: 10,
        },
    ]

    return (
        <section className="bg-orange-50 py-20">
            <div className="mx-auto max-w-7xl px-5">
                <div className="mb-12 text-center">
                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        What We Offer
                    </p>
                    <h2 className="mt-3 text-5xl font-black">Browse By
                        <span className="text-orange-500"> Category </span> </h2>
                    <p className="mt-5 text-md text-gray-800 w-full md:w-1/3 mx-auto">
                        From sizzling burgers to exotic world cuisines - find your favourite in our menu
                    </p>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-6">
                    {categories.map((category) => (
                        <article
                            key={category.id}
                            className="group overflow-hidden rounded-4xl bg-white shadow-lg"
                        >
                            <Link to={`/menu?category=${category.name}`}>
                                <div className="h-34 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-base font-black">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-300">
                                        {category.item} Items
                                    </p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}