export default function RestaurantHistory() {
    return (
        <section className="bg-amber-50 py-20">

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">

                <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
                    alt="Restaurant"
                    className="h-[500px] w-full rounded-[40px] object-cover"
                />

                <div>

                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Since 1998
                    </p>

                    <h2 className="mt-4 text-5xl font-black">
                        Our Restaurant

                        <span className="block text-orange-600">
                            History
                        </span>
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        We started as a small family
                        restaurant with one simple goal:
                        serve delicious food and create
                        memorable moments.
                    </p>

                    <div className="mt-9 grid grid-cols-3 gap-5">

                        <div>

                            <h3 className="text-3xl font-black text-orange-600">
                                25+
                            </h3>

                            <p>Years</p>

                        </div>

                        <div>

                            <h3 className="text-3xl font-black text-orange-600">
                                50K+
                            </h3>

                            <p>Customers</p>

                        </div>

                        <div>

                            <h3 className="text-3xl font-black text-orange-600">
                                30+
                            </h3>

                            <p>Chefs</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}