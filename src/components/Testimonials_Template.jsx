import React from 'react';
import data from '../assets/Data/Testimonials_Data.json';

const Testimonials_Template = () => {
    return (
        <div>
            {data.testimonials.map((testimonial, index) => (
                <div className="mb-8 sm:break-inside-avoid" key={index}>
                    <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8 cursor-default">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={testimonial.avatar}
                                className="size-14 rounded-full object-cover pointer-events-none"
                            />
                            <div>
                                <div className="hidden flex justify-center gap-0.5 text-green-500">
                                    {/* SVGs for stars */}
                                </div>
                                <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{testimonial.name}</p>
                                <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                            {testimonial.testimonial}
                        </p>
                    </blockquote>
                </div>
            ))}
        </div>
    );
};

export default Testimonials_Template;