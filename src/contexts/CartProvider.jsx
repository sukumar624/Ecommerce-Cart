import { createContext, useContext, useReducer } from "react"

// create cart context
const CartContext = createContext()


// create cart reducer function
const cartReducer = (cart, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...cart, action.payload];
        default:
            return cart;
    }

}
const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [])
    return (
        <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>
    )
}

// create a helper function
export const useCart = () => {
    return useContext(CartContext)
}


export default CartProvider