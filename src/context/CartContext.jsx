import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

const CartProvider = ( {children} ) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

    useEffect(()=>{
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (newProduct) => {
        const productInCart = cart.find(p => p.id === newProduct.id);

        if(productInCart){
            const newCart = cart.map(p => p.id === newProduct.id ? {...p, quantity: p.quantity + newProduct.quantity} : p);
            setCart(newCart);
        }else{
            setCart( [ ...cart, newProduct ] )
        }
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => { 
        const total = cart.reduce( (total, productCart) => total + (productCart.price * productCart.quantity), 0);
        return total;
    }

    const deleteProductByID = (productId) => {
       const productFiltered = cart.filter( (productCart) => productCart.id !== productId)
        setCart(productFiltered)
    }

    const deleteCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={ {cart, addProduct, totalQuantity, totalPrice, deleteProductByID, deleteCart} }>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}