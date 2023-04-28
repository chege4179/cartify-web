import {create} from "zustand";
import {CartItem} from "../types/CartItem";

interface CartState {
    cart:CartItem[],
    addToCart:(cartItem:CartItem) => void,
    removeFromCart:(cartItem:CartItem) => void,
    addQuantity:(id:string) => void,
    reduceQuantity:(id:string) => void,
}


const useCartStore = create<CartState>()((set) => ({
    cart:[],
    addToCart:(cartItem:CartItem) => set((state) =>  {
        const currentCart = state.cart
        const existItem = currentCart.find((x) => x.id === cartItem.id)
        if (!existItem){
            return {
                ...state,cart:[...currentCart,cartItem]
            }
        }else {
            return  {
                ...state
            }
        }
    }),
    removeFromCart:(cartItem:CartItem) => set((existingState) => {
        const currentCart = existingState.cart
        return {
            ...existingState, cart: currentCart.filter((x) => x.id !== cartItem.id)

        }
    }),

    addQuantity:(id:string) => set((existingState) => {
        const findIncreasedItem:  CartItem  = existingState.cart.find((item) => item.id === id)!!
        findIncreasedItem.quantity = ++findIncreasedItem.quantity

        return {
            ...existingState, cart: [...existingState.cart]
        }
    }),
    reduceQuantity:(id:string) => set((existingState => {
        const findDecreasedItem: CartItem  = existingState.cart.find((item) => item.id === id)!!
        if (findDecreasedItem.quantity === 1) {
            return {
                ...existingState, cart: [...existingState.cart]
            }
        } else {
            findDecreasedItem.quantity = --findDecreasedItem.quantity
            return {
                ...existingState, cart: [...existingState.cart]
            }
        }
    }))
}))


const useCart = () => {
    const cart  = useCartStore((state) => state.cart)
    const subtotal = cart
        .map((a) => a.price * a.quantity)
        .reduce((a, b) => a + b, 0)

    const total = Math.ceil((subtotal * 1.16) + 1000)
    const addQuantity = useCartStore((state) => state.addQuantity)
    const reduceQuantity = useCartStore((state) => state.reduceQuantity)
    const addCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)


    return {
        cart,
        total,
        subtotal,
        addCart,
        reduceQuantity,
        removeFromCart,
        addQuantity,
    }

};

export default useCart;

