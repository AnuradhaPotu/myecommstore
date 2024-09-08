import React from "react"

const Input = ({ type = "text", placeholder, className, ...props }) => {
    const baseClasses = "border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary";
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${baseClasses} ${className}`}
            {...props}
        />
    )
}
export default Input;