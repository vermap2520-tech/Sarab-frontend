const chefs = [
    {
        name: "John Smith",
        role: "Head Chef",
        image:
            "https://images.unsplash.com/photo-1583394293214-28ded15ee548",
    },
    {
        name: "Emma Wilson",
        role: "Pastry Chef",
        image:
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
    },
    {
        name: "David Brown",
        role: "Sous Chef",
        image:
            "https://images.unsplash.com/photo-1607631568010-a87245c0daf8",
    },
];

export default function ChefsSection() {
    return (
        <section className="py-10">

            <div className="mx-auto max-w-7xl px-5">

                <div className="mb-12 text-center">

                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Our Team
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                        Meet Our Chefs
                    </h2>

                </div>

                <div className="grid gap-7 md:grid-cols-3">

                    {chefs.map((chef) => (
                        <article
                            key={chef.name}
                            className="overflow-hidden rounded-3xl bg-stone-950 text-white"
                        >

                            <img
                                src={chef.image}
                                alt={chef.name}
                                className="h-96 w-full object-cover"
                            />

                            <div className="p-7 text-center">

                                <h3 className="text-2xl font-black">
                                    {chef.name}
                                </h3>

                                <p className="mt-2 text-orange-400">
                                    {chef.role}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}