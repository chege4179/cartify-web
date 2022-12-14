import React from 'react';
import {CartConstants} from "../ReduxStore/CartConstants";
import {useDispatch} from "react-redux";

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch()
	const AddQuantity = () => {
		dispatch({
			type:CartConstants.ADD_QUANTITY,
			payload:{...cartItem}
		})
		dispatch({
			type:CartConstants.GET_SUBTOTAL
		})
		dispatch({
			type:CartConstants.GET_TOTAL
		})
	}
	const ReduceQuantity = () => {
		dispatch({
			type:CartConstants.REDUCE_QUANTITY,
			payload:{...cartItem}
		})
		dispatch({
			type:CartConstants.GET_SUBTOTAL
		})
		dispatch({
			type:CartConstants.GET_TOTAL
		})
	}
	const RemoveFromCart = () => {
		dispatch({
			type:CartConstants.REMOVE_FROM_CART,
			payload:{...cartItem}
		})
		dispatch({
			type:CartConstants.GET_SUBTOTAL
		})
		dispatch({
			type:CartConstants.GET_TOTAL
		})
	}
	return (
		<div className='w-full h-48 bg-gray-100 drop-shadow-lg rounded-xl flex my-2'>
			<div className="w-1/3 p-2">
				<img src={cartItem.imageUrl}alt='' className='w-full h-full rounded'/>
			</div>
			<div className='w-2/3 flex flex-col justify-evenly'>
				<p className='font-bold text-2xl'>{cartItem.name}</p>
				<p className=''>
					Price:  <span className="font-bold">Ksh {cartItem.price}/=</span>
				</p>
				<div className="flex items-center">
					<button className="btn-primary" onClick={ReduceQuantity}>-</button>
					<p>{cartItem.quantity}</p>
					<button className="btn-primary" onClick={AddQuantity}>+</button>
				</div>
				<p className='checkoutProduct_price'>
					Subtotal:  <span className="font-bold">Ksh {cartItem.price * cartItem.quantity}/=</span>
				</p>
				<button
					onClick={RemoveFromCart}
					className="whitespace-nowrap relative mx-1 flex justify-center p-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700  hover:underline">
					Remove from Basket
				</button>
			</div>
		</div>
	);
};

export default CartItem;
