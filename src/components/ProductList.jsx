import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sortOption, setSortOption] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
                console.log("response", response)
                setProducts(response.data);
                setFilteredProducts(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError("Failed to fetch products");
                setLoading(false)
            })

        axios.get("https://api.escuelajs.co/api/v1/categories")
            .then((response) => {
                console.log("categories response ", response)
                setCategories(response.data)
            })
            .catch(() => {
                setCategories([])
            })
    }, []);

    useEffect(() => {
        filterProducts()
    }, [selectedCategory, sortOption])

    const filterProducts = () => {
        let updatedProducts = [...products]
        if (selectedCategory) {
            updatedProducts = updatedProducts.filter((product) => product.category.name === selectedCategory)
        }

        if (sortOption === "price-asc") {
            updatedProducts.sort((a, b) => a.price - b.price);
        }

        else if (sortOption === "price-desc") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }
        else if (sortOption === "title-asc") {
            updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (sortOption === "title-desc") {
            updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        setFilteredProducts(updatedProducts)
    }

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>
    }
    if (error) {
        return <div className="text-center mt-10 text-red-500">{error}</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Product Listing Page</h1>
            <div className="flex justify-between items-center mb-6">
                <select
                    className="border border-gray-300 dark:text-gray-600 rounded p-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
                <select className="border border-gray-300 dark:text-gray-600 rounded p-2"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="title-asc">Title: A to Z</option>
                    <option value="title-desc">Title: Z to A</option>

                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-lg p-4">
                        <img src={product.category.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-700 dark:text-gray-200 mb-2">{product.category.name}</p>
                        <p className="text-gray-900 dark:text-gray-200 font-bold mb-2">{product.price}</p>
                        <Link to={`/product/${product.id}`}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;