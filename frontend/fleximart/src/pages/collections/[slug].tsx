"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import CollectionModel from '@/models/CollectionModel';

const CollectionPage = () => {
    const router = useRouter();
    const model: CollectionModel = new CollectionModel();
    const [collectionData, setCollectionData] = useState<any>(null); // Default to null or appropriate type
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the slug is available
        if (router.query.slug) {
            const slug = router.query.slug as string; // Ensure slug is a string
            const fetchData = async () => {
                try {
                    const response = await model.getCollectionBySlug(slug);
                    setCollectionData(response.data);
                } catch (error) {
                    console.error("Failed to fetch collection data:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [router.query.slug]); // Add router.query.slug as a dependency

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!collectionData) {
        return <div>Collection not found</div>;
    }

    return (
        <div>
            <p>{collectionData.name}</p>
            <Image
                src={collectionData.collectionImage}
                alt={collectionData.name}
                width={500}
                height={500}
            />
            <p>{collectionData.description}</p>
        </div>
    );
};

export default CollectionPage;
