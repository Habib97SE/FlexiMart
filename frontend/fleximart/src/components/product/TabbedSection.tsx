"use client";
import React, { useState } from 'react';
import ReviewTab from '@/components/product/ReviewTab'; // Import the ReviewTab component

const TabbedSection = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="flex flex-col items-start">
                    <ul className="flex border-b mb-4">
                        {/* Tab Headers */}
                        <li
                            className={`cursor-pointer py-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-red-500 text-red-500' : ''
                                }`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${activeTab === 'details' ? 'border-b-2 border-red-500 text-red-500' : ''
                                }`}
                            onClick={() => setActiveTab('details')}
                        >
                            Details
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${activeTab === 'video' ? 'border-b-2 border-red-500 text-red-500' : ''
                                }`}
                            onClick={() => setActiveTab('video')}
                        >
                            Video
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-red-500 text-red-500' : ''
                                }`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Write Review
                        </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="tab-content w-full text-center">
                        {activeTab === 'description' && (
                            <div className="tab-pane active">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        )}

                        {activeTab === 'details' && (
                            <div className="tab-pane">
                                <p className="mb-0">
                                    Detailed information about the product goes here.
                                </p>
                            </div>
                        )}

                        {activeTab === 'video' && (
                            <div className="tab-pane">
                                <p className="mb-0">
                                    This is where the video content would be displayed.
                                </p>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <ReviewTab />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedSection;
