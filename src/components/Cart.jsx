import React from "react"
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
            {cart.length === 0 ?
                <p className="text-center">Your cart is empty</p> : (
                    <div className="flex flex-col gap-4">
                        {cart.map((item) =>
                            // console.log("item ", item)
                            (<div key={item.id} className="flex justify-between items-center border p-4 rounded">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.category.image} alt={item.title} className="w-16 h-16 object-contain"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-gray-700">Quantity:{item.quantity}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">${item.price * item.quantity}</p>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                                        onClick={() => removeFromCart(item.id)}
                                    >Remove</button>
                                </div>
                            </div>)
                        )}
                    </div>
                )
            }
        </div >
    )
}

export default Cart;