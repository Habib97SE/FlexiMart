"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    comment: yup.string().required(),
    rating: yup.number().required(),
});

const StarRating = ({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseOver = (index: number) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index: number) => {
        setRating(index);
    };

    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => {
                const starIndex = index + 1;
                return (
                    <svg
                        key={starIndex}
                        className={`w-8 h-8 cursor-pointer ${starIndex <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-400"
                            }`}
                        onMouseOver={() => handleMouseOver(starIndex)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starIndex)}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049.516a1 1 0 011.902 0l2.319 5.573a1 1 0 00.95.66h5.837a1 1 0 01.618 1.816l-4.744 3.675a1 1 0 00-.365 1.118l2.319 5.573a1 1 0 01-1.541 1.175l-4.744-3.675a1 1 0 00-1.235 0l-4.744 3.675a1 1 0 01-1.541-1.175l2.319-5.573a1 1 0 00-.365-1.118L.45 8.565a1 1 0 01.618-1.816h5.837a1 1 0 00.95-.66L9.049.516z" />
                    </svg>
                );
            })}
        </div>
    );
};

const ReviewTab = () => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const [reviews, setReviews] = useState([
        { id: 1, name: "John Doe", comment: "Great product!", rating: 5 },
        { id: 2, name: "Jane Smith", comment: "Good value.", rating: 4 },
    ]);

    const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 0 });

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
        setNewReview({ name: "", comment: "", rating: 0 });
    };

    return (
        <div className="tab-pane">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-100 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold">{review.name}</h4>
                            <div className="flex space-x-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                                ))}
                            </div>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div className="flex flex-col items-start">
                        <label className="text-left mb-1">Name</label>
                        <input
                            type="text"
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            required
                            className="border rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label className="text-left mb-1">Comment</label>
                        <textarea
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            required
                            className="border rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label className="text-left mb-1">Rating</label>
                        <StarRating rating={newReview.rating} setRating={(rating) => setNewReview({ ...newReview, rating })} />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewTab;
