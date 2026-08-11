import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[760px] overflow-hidden bg-stone-950">

            <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                alt="Delicious pizza"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

            <div className="relative mx-auto flex min-h-[800px] max-w-7xl items-center px-5">

                <div className="max-w-2xl text-white">

                    <p className="mb-5 font-bold uppercase tracking-[5px] text-orange-400">
                        Fresh • Hot • Delicious
                    </p>

                    <h1 className="text-5xl font-black leading-tight sm:text-7xl lg:text-8xl">
                        Delicious Fast Food

                        <span className="block text-orange-500">
                            for Every Moment
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-xl leading-8 text-gray-200">
                        Experience bold flavors crafted from premium ingredients.
                        From crispy burgers to gourmet pizzas - every bite is an
                        adventure worth savoring.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">

                        <Link
                            to="/menu"
                            className="flex items-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-bold transition hover:bg-orange-700"
                        >
                            Explore Menu

                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            to="/reservation"
                            className="rounded-full border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-black"
                        >
                            Reserve Table
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}