import Header from "../Components/Home Page/Header";
import Footer from "../Components/Home Page/Footer";
import MenuProducts from "../Components/Home Page/MenuProducts";

export default function Menu() {
    return (
        <>
            <main>
                <section className="bg-stone-900 py-10 text-center text-white">
                    <p className="font-bold uppercase tracking-[5px] text-orange-400">
                        Our Food
                    </p>
                    <h1 className="mt-4 text-3xl font-black sm:text-4xl">
                        Delicious Menu
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-gray-300">
                        Explore our delicious food
                        collection.
                    </p>
                </section>
                <MenuProducts />
            </main>
        </>
    );
}