import React from 'react';
import {useSelector} from "react-redux";
import {SelectCart, SelectSubTotal, SelectTotal} from "../ReduxStore/CartReducer";
import CartItem from "../components/CartItem";

const CartPage = () => {
	const cart = useSelector(SelectCart)
	const subtotal = useSelector(SelectSubTotal)
	const total = useSelector(SelectTotal)
	return (
		<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
			<div className='max-w-screen-xl box-border w-full h-full'>
				<div className="w-full h-full flex flex-col">
					{
						cart.length ===0 ? (
							<div className="flex w-full h-full items-center justify-center ">
								<h1 className="font-bold text-2xl">Your cart is empty</h1>
							</div>

						):(
							<div className="flex w-full h-full">
								<div className="w-4/6 flex flex-col p-2">
									{
										cart.map((cartItem,index) => {
											return(
												<CartItem key={index} cartItem={cartItem}/>
											)
										})
									}
								</div>
								<div className="w-2/6 h-60 w-full mt-2 bg-gray-100 p-2 drop-shadow-lg rounded-md">
									<div className="w-full h-14 flex items-center justify-around">
										<h1 className="font-bold text-2xl uppercase">
											Cart Summary
										</h1>
									</div>
									<hr className="bg-black h-0 w-full my-2"/>
									<div className="w-full h-10 flex  justify-around">
										<h1 className=" w-1/2 font-bold uppercase pl-4">
											Cart SubTotal
										</h1>
										<h2 className="w-1/2 text-end pr-4">
											Ksh {total}/=
										</h2>
									</div>
									<div className="w-full h-10 flex  justify-evenly">
										<h1 className=" w-1/2 font-bold uppercase pl-4">
											Cart Total
										</h1>
										<h2 className="w-1/2 text-end pr-4">
											Ksh {total}/=
										</h2>
									</div>
									<button className="btn-primary w-full">
										Checkout
									</button>
								</div>
							</div>

						)

					}

				</div>
			</div>
		</div>
	);
};

export default CartPage;
