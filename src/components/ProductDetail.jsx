import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from '../context/CartContext'
import { Link } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("");
    const { addToCart } = useCart()

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch product details");
                setLoading(false);
            })
    }, [id])

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
        navigate("/cart"); // Navigate to cart page
    };

    if (loading) {
        <div className="text-center mt-10">Loading...</div>
    }
    if (error) {
        <div className="text-center mt-10 text-red-500">{error}</div>
    }
    if (!product) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 mb-6" onClick={() => navigate(-1)}>&larr;Back</button>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img
                    src={product.category.image}
                    alt={product.title}
                    className="w-full md:w-1/2 object-contain h-64 md:h-96"

                />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{product.category.name}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">{product.price}</p>
                    <p className="text-gray-700 dark:text-gray-200 mb-6">{product.description}</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        onClick={() => handleAddToCart()}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail