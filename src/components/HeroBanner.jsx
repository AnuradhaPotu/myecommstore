import React from "react"

const HeroBanner = () => {
    return (
        <div className="relative bg-gray-800 dark:bg-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('https://i.imgur.com/BG8J0Fj.jpg')" }}
            >

            </div>
            <div className="relative z-10 text-center max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to MyStore
        </h1>
                <p className="text-lg md:text-xl mb-6">
                    Explore the best products at all prices!
        </p>
                <a href="/productlist" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">Shop Now</a>
            </div>
        </div>
    )
}

export default HeroBanner;