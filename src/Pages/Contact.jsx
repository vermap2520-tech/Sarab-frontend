import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import ContactSection from "../Components/Home Page/ContactSection";

export default function Contact() {
    return (
        <>
            <main>
                <section className="bg-stone-950 py-10 text-center text-white">
                    <p className="font-bold italic tracking-[5px] text-orange-400">
                        Get In Touch
                    </p>
                    <h1 className="mt-4 text-5xl font-black sm:text-5xl">
                        Contact Us
                    </h1>
                </section>
                <ContactSection />
            </main>
        </>
    );
}