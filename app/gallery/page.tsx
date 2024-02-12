// app/gallery/page.tsx
'use client'

import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { HouseLine, Bed, ForkKnife, Laptop, Dog, Bathtub } from 'phosphor-react';

const roomTypes = [
    { name: 'Living Room', icon: HouseLine },
    { name: 'Bedroom', icon: Bed },
    { name: 'Kitchen', icon: ForkKnife },
    { name: 'Office', icon: Laptop },
    { name: 'Dining Room', icon: Dog },
    { name: 'Bathroom', icon: Bathtub },
];


export default function Gallery() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-200 via-white to-white dark:from-zinc-800 dark:via-black dark:to-black">
            <Head>
                <title>Virtual Staging AI</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            {/* Header */}
            <Header />

            <main className="flex-grow">
                <section className="text-center py-12 md:py-24 min-h-screen bg-gradient-to-b from-zinc-200 via-white to-white">
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
                    <div className="relative">
                        {/* Image gallery slider */}
                        <div className="overflow-hidden">
                            {/* Slider Items */}
                            <div className="whitespace-nowrap transition-transform duration-300 ease-in-out">
                                {/* Single Item */}
                                <div className="inline-block align-top text-left p-4">
                                    <div className="rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            className="w-full h-64 md:h-96 object-cover"
                                            src="/path-to-your-image.jpg"
                                            alt="Virtual Staging Example"
                                        />
                                    </div>
                                </div>
                                {/* ... more items ... */}
                            </div>
                        </div>
                        {/* Slider Controls */}
                        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none">
                            {/* Replace with an icon or text */}
                            {'<'}
                        </button>
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none">
                            {/* Replace with an icon or text */}
                            {'>'}
                        </button>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}