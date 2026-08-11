import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import ReviewsSection from "../Components/Home Page/ReviewsSection";

export default function Reviews() {
    return (
        <>
            {/* <Header /> */}
            <main>
                {/* Page Banner */}
                <section className="bg-stone-950 py-10 text-center text-white">
                    <p className="font-bold uppercase tracking-[5px] text-orange-400">
                        Customer Feedback
                    </p>
                    <h1 className="mt-4 text-3xl font-black sm:text-5xl">
                        Our Reviews
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl px-4 w-120 text-gray-300">
                        Discover what our customers say about our food,
                        service, and restaurant experience.
                    </p>
                </section>
                {/* Reviews */}
                <ReviewsSection />
            </main>
            {/* <Footer /> */}
        </>
    );
}