// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Import cart and menu icons
import { useCart } from "../context/CartContext"; // Import useCart hook for cart context
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle
    const { cart } = useCart(); // Get cart from context

    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md transition duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Brand Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                    MyStore
        </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600">
                        Home
          </Link>
                    <Link to="/productlist" className="text-gray-800 dark:text-gray-200 hover:text-blue-600">
                        Products
          </Link>
                    <ThemeToggle />

                    {/* Cart Icon with Quantity Badge */}
                    <Link to="/cart" className="relative inline-block">
                        <FaShoppingCart className="text-2xl text-blue-600 dark:text-blue-200" />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 dark:text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
                    <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200hover:bg-blue-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
          </Link>
                    <Link
                        to="/productlist"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Products
          </Link>

                    {/* Cart Icon with Quantity Badge */}
                    <Link
                        to="/cart"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex items-center">
                            <FaShoppingCart className="text-2xl text-blue-600 dark:text-blue-300 mr-2" />
                            {totalQuantity > 0 && (
                                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {totalQuantity}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
