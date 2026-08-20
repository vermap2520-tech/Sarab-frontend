import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import ContactSection from "../Components/Home Page/ContactSection";

export default function Contact() {
    return (
        <>
            <main>
                <section className="bg-white py-8 text-center">
                    {/* Small Heading */}
                    <p className="font-serif text-lg italic text-red-400">
                        Get In Touch
                    </p>
                    {/* Main Heading */}
                    <h1 className="mt-3 font-serif text-5xl font-black tracking-tight text-black">
                        Contact <span className="text-red-500">Us</span>
                    </h1>
                    {/* Decorative Line */}
                    <div className="mx-auto mt-4 flex h-1 w-14 overflow-hidden rounded-full">
                        <div className="w-1/2 bg-red-500"></div>
                        <div className="w-1/2 bg-orange-400"></div>
                    </div>
                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-6 text-gray-500 sm:text-base">
                        Have a question, feedback, or want to plan a special event?
                        <br />
                        We'd love to hear from you.
                    </p>
                </section>
                <ContactSection />
            </main>
        </>
    );
}