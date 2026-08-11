import { ShoppingCart } from "lucide-react";

export default function Offer() {
  return (
    <section className="relative overflow-hidden bg-[#2d0606] py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-block rounded bg-yellow-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
            ⚡ Limited Time Offer
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Get <span>30% Off</span>
            <br />
            Our Signature
            <br />
            <span className="text-orange-400">Burger</span> Meal
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-7">
            Don't miss our weekend special – grab our award-winning
            signature burger combo with loaded fries and a premium
            shake at an unbeatable price.
          </p>

          {/* Timer */}
          <div className="mt-8 flex gap-4">
            {[
              { value: "06", label: "Hours" },
              { value: "46", label: "Minutes" },
              { value: "36", label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-24 rounded-xl border border-white/10 bg-white/5 py-4 text-center backdrop-blur"
              >
                <h2 className="text-3xl font-bold text-white">
                  {item.value}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
            <ShoppingCart size={18} />
            Grab the Deal
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Price Badge */}
          <div className="absolute -left-8 top-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_40px_rgba(255,0,0,0.5)]">
            <span className="text-xs line-through opacity-70">
              $24.99
            </span>
            <span className="text-3xl font-bold">$17.49</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
            alt="Burger"
            className="h-[420px] w-[520px] rounded object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}