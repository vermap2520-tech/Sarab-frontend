import { Star } from "lucide-react";

const reviews = [
    {
        name: "Aarav Sharma",
        role: "Food Lover",
        review:
            "Amazing food, excellent service and a beautiful restaurant atmosphere.",
    },
    {
        name: "Priya Verma",
        role: "Regular Customer",
        review:
            "The pizza was delicious and the staff was very friendly.",
    },
    {
        name: "Rahul Singh",
        role: "Customer",
        review:
            "One of the best dining experiences. Highly recommended!",
    },
];

export default function ReviewsSection() {
    return (
        <section className="py-14 bg-gray-200">

            <div className="mx-auto max-w-7xl px-5">

                <div className="mb-12 text-center">

                    <p className="font-bold uppercase tracking-[4px] text-orange-600">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                        What Customers Say
                    </h2>

                </div>

                <div className="grid gap-7 md:grid-cols-3">

                    {reviews.map((review) => (
                        <article
                            key={review.name}
                            className="rounded-3xl bg-orange-50 p-8"
                        >

                            <div className="flex gap-1 text-orange-500">

                                {[1, 2, 3, 4, 5].map(
                                    (star) => (
                                        <Star
                                            key={star}
                                            size={18}
                                            fill="currentColor"
                                        />
                                    )
                                )}

                            </div>

                            <p className="mt-6 leading-8 text-gray-600">
                                “{review.review}”
                            </p>

                            <h3 className="mt-7 text-xl font-black">
                                {review.name}
                            </h3>

                            <p className="text-sm text-orange-600">
                                {review.role}
                            </p>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}