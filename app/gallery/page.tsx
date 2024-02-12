// app/gallery/page.tsx
'use client'

import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

import { HouseLine, Bed, ForkKnife, Laptop, Dog, Bathtub } from 'phosphor-react';
import { useState } from 'react';

const roomTypes = [
    { name: 'Living Room', icon: HouseLine },
    { name: 'Bedroom', icon: Bed },
    { name: 'Kitchen', icon: ForkKnife },
    { name: 'Office', icon: Laptop },
    { name: 'Dining Room', icon: Dog },
    { name: 'Bathroom', icon: Bathtub },
];


export default function Gallery() {
    const [imagePairs, setImagePairs] = useState(Array.from({ length: 7 }, (_, i) => ({ id: i + 1, view: 'before' })));
    const [hoverTimers, setHoverTimers] = useState({});

    // Function to toggle the view state of an individual image pair
    const toggleView = (id, nextView) => {
        setImagePairs(currentPairs => 
            currentPairs.map(pair => 
                pair.id === id ? { ...pair, view: nextView } : pair
            )
        );
    };
    

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Virtual Staging AI</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            {/* Header */}
            <Header />

            <main className="flex-grow">
                <section className="text-center py-12 md:py-24 min-h-screen bg-gradient-to-br from-red-50 via-white to-white">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Virtual Staging Transformations for Every Space
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Discover the art of virtual transformation with our real estate staging application. Delve into a curated selection of spaces, each meticulously staged to showcase potential and inspire imagination. Your journey to the perfect room begins here.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {roomTypes.map((roomType, index) => (
                            <button
                                key={index}
                                className="flex items-center px-6 py-2 border rounded-full text-gray-600 bg-white border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors"
                            >
                                <roomType.icon className="mr-2 w-5 h-5" />
                                {roomType.name}
                            </button>
                        ))}
                    </div>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-32">
                        {imagePairs.map((pair) => (
                            <div key={pair.id} className="group relative w-full">                                
                                <Image
                                    src={`/gallery/${pair.view}/${pair.id}`}
                                    alt={`${pair.view} staging ${pair.id}`}
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    className="rounded-lg border border-gray-300 transition duration-300 ease-in-out transform group-hover:scale-[1.02] hover:border-blue-500"
                                />
                                <div className="absolute top-0 left-0 p-4">
                                    <button 
                                        className={`mr-2 p-2 rounded ${pair.view === 'before' ? 'bg-gray-600 text-white' : 'bg-white'}`}
                                        onClick={() => toggleView(pair.id, 'before')}
                                    >
                                        Before
                                    </button>
                                    <button 
                                        className={`p-2 rounded ${pair.view === 'after' ? 'bg-gray-600 text-white' : 'bg-white'}`}
                                        onClick={() => toggleView(pair.id, 'after')}
                                    >
                                        After
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}