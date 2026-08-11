import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import StoryBanner from "../Components/Home Page/StorySection";
import RestaurantHistory from "../Components/Home Page/RestaurantHistory";

export default function About() {
    return (
        <>
            <main>
                <section className="bg-stone-950 py-10 text-center text-white">
                    <p className="font-bold uppercase tracking-[5px] text-orange-400"> About SARAB </p>
                    <h1 className="mt-2 text-3xl font-black sm:text-5xl"> Our Story </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-gray-300">
                        Fresh food, authentic flavors
                        and memorable experiences. </p>
                </section>
                <StoryBanner />
                <RestaurantHistory />
            </main>
        </>
    );
}