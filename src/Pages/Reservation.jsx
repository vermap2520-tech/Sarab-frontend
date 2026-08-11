import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import ReservationForm from "../Components/Home Page/ReservationForm";

export default function Reservation() {
    return (
        <>
            <section className="bg-stone-950 p-8 text-center">
                <p className="font-serif text-lg italic text-red-500">
                    Reserve Your Table
                </p>
                <h2 className="mt-3 text-5xl font-black text-white">
                    Make a <span className="text-red-600">Reservation</span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-600"></div>
                <p className="mx-auto mt-6 max-w-xl text-gray-500">
                    Reserve your table for a memorable dining experience.
                    We recommend booking 24 hours in advance.
                </p>
            </section>
            <ReservationForm />
        </>
    );
}