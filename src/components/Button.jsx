import React from "react";

const Button = ({ children, variant = "primary", size = "medium", ...props }) => {
    const baseClasses = "font-semibold rounded-lg focus:outline-none transition duration-200";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary: "bg-secondary text-white hover:bg-secondary-dark",
    };
    const sizes = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-md",
        large: "px-5 py-3 text-lg"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;