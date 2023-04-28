import React from 'react';
import {Link} from "react-router-dom"
import {Product} from "../types/Product";
import useCart from "../store/CartStore";


type ProductCardProps = {
    product: Product
}
const ProductCard = ({product}: ProductCardProps) => {
    const {addCart} = useCart()

    const AddToCart = () => {
        addCart({
            imageUrl: product.images[0].url,
            name: product.name,
            price: product.price,
            description: product.description,
            id: product._id, quantity: 1
        })


    }
    return (
        <div
            className='max-w-xs shadow-xl border-gray-300 border-solid border flex items-center flex-col rounded-lg w-full drop-shadow-lg bg-white hover:cursor-pointer hover:bg-gray-200 group border-b-8 border-b-indigo-500'>
            <img
                src={product.images[0].url}
                alt={product.name}
                className='w-full h-60 min-h-80 rounded-t-lg transition-transform duration-200 ease-in-out group-hover:scale-105 object-cover'/>
            <div className='p-4 flex flex-col w-full'>
                <div>
                    <h4 className='font-bold break-words'>{product.name} </h4>
                    <h4 className='font-bold break-words'>Ksh {product.price}/= </h4>
                    <span
                        className="mt-4 inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{product.category}
					</span>
                </div>
                <div className='flex items-center justify-between mt-2'>

                    <div className={`flex w-full justify-end`}>
                        <Link
                            to={`/product/${product._id}`}
                            className="btn-primary"
                        >

                            <p className='hover:underline hover:cursor-pointer'>
                                View
                            </p>
                        </Link>
                        <button
                            onClick={AddToCart}
                            className="btn-primary"
                        >

                            <p className='hover:underline hover:cursor-pointer'>
                                Add To Cart
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
