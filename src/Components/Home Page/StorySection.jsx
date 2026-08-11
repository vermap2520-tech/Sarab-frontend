import {
  Leaf,
  Award,
  Truck,
  BookOpen,
} from "lucide-react";

export default function StorySection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000"
              alt="Restaurant"
              className="h-[560px] w-full rounded-3xl object-cover shadow-xl"
            />

            {/* Experience Card */}
            <div className="absolute left-[-18px] top-8 rounded-2xl bg-red-600 px-6 py-6 text-center text-white shadow-2xl">
              <h2 className="text-5xl font-bold">12+</h2>
              <p className="mt-1 text-sm font-medium">
                Years of
              </p>
              <p className="text-sm font-medium">
                Excellence
              </p>
            </div>

            {/* Small Image */}
            <div className="absolute bottom-[-25px] right-[-20px] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500"
                alt="Food"
                className="h-40 w-40 object-cover md:h-48 md:w-48"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="font-serif text-2xl italic text-red-600"> Our Story </p>

            <h2 className="mt-2 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              We Invite You to Visit Our
              <span className="text-red-600"> Food Restaurant </span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded bg-red-600"></div>

            <p className="mt-8 text-balg leading-8 text-gray-500">
              Founded in 2012, Sarab began as a small corner joint with
              a big dream — to serve food that brings people together.
              Today we're proud to serve thousands of happy customers
              every week with the same passion that started it all.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                  <Leaf className="text-red-600" size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    100% Fresh Ingredients
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We source locally and sustainably. Every ingredient
                    is hand-picked daily for maximum freshness.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
                  <Award className="text-orange-500" size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Award-Winning Recipes
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our signature recipes have won national culinary
                    awards for five consecutive years.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                  <Truck className="text-green-600" size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Lightning-Fast Delivery
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Order online and get hot, fresh food delivered to
                    your doorstep in under 25 minutes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}