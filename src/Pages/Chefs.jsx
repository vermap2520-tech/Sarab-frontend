import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import ChefsSection from "../Components/Home Page/ChefsSection";

export default function Chefs() {
    return (
        <>
            <section className="bg-stone-950 py-15 text-center text-white">
                <p className="font-bold uppercase tracking-[5px] text-orange-100">
                    Our Kitchen Team
                </p>
                <h1 className="mt-4 text-3xl font-black sm:text-5xl">
                    Meet Our Chefs
                </h1>
            </section>
            <ChefsSection />
        </>
    );
}