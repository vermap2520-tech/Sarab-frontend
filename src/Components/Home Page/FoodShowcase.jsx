export default function FoodShowcase() {
    const foods = [
        {
            id: 1,
            title: "Gourmet Burgers",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
            large: true,
        },
        {
            id: 2,
            title: "Wood-Fired Pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        },
        {
            id: 3,
            title: "Crispy Fried Chicken",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
        },
        {
            id: 4,
            title: "Sweet Desserts",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
        },
        {
            id: 5,
            title: "Fresh Wraps & Rolls",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        },
    ];

    return (
        <section className="bg-[#f8f4ef] py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold italic text-red-500">
                        Food Showcase </p>
                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Let's See Our
                        <span className="text-red-600 relative"> Fast Food </span>
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-red-600"></div>
                </div>
                {/* Grid */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Left Large Image */}
                    <div className="group relative overflow-hidden rounded-2xl">
                        <img src={foods[0].image}
                            alt=""
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                        />
                        <span className="absolute bottom-4 left-20 -translate-x-1/2 translate-y-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            {foods[0].title} </span>
                    </div>
                    {/* Center */}
                    <div className="space-y-4">
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img src={foods[1].image}
                                alt=""
                                className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                            />
                            <span className="absolute bottom-4 left-20 -translate-x-1/2 translate-y-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {foods[1].title} </span>
                        </div>
                        <div className=" group relative overflow-hidden rounded-2xl">
                            <img src={foods[3].image}
                                alt=""
                                className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                            />
                            <span className="absolute bottom-4 left-20 -translate-x-1/2 translate-y-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {foods[3].title} </span>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="space-y-4">
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img src={foods[2].image}
                                alt=""
                                className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                            />
                            <span className="absolute bottom-4 left-20 -translate-x-1/2 translate-y-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {foods[2].title} </span>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img src={foods[4].image}
                                alt=""
                                className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                            />
                            <span className="absolute bottom-4 left-20 -translate-x-1/2 translate-y-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {foods[4].title} </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}