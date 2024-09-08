import React, { Children } from 'react'
const Typography = ({ variant = "body", children, className, ...props }) => {
    const variants = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
        body: "text-base",
        caption: "text-sm text-gray-500"
    };

    const Tag = variant === "body" ? "p" : variant;
    return (
        <Tag className={`${variants[variant]} ${className}`} {...props}>
            {children}
        </Tag>
    )
}
export default Typography;