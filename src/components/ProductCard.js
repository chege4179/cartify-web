import React from 'react';

const ProductCard = ({product}) => {
	return (
		<div className='max-w-xs shadow-xl border-gray-300 border-solid border flex items-center flex-col rounded-lg w-full drop-shadow-lg bg-white hover:cursor-pointer hover:bg-gray-200 group border-b-8 border-b-indigo-500'>
			<img
				src={product.images[0].url}
				// width={320} height={220}
				alt={product.name}
				className='w-full rounded-t-lg transition-transform duration-200 ease-in-out group-hover:scale-105 object-cover'/>
			<div className='p-4 flex flex-col w-full'>
				<div>
					<h4 className='font-bold break-words'>{product.name} </h4>
					<h4 className='font-bold break-words'>Ksh {product.price}/= </h4>
					<span className="mt-4 inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{product.category}
					</span>
					{/*<h1 className="">{property.space} sqft</h1>*/}
					{/*<div className="">*/}
					{/*	<span>{property.propertyType === 'Sale' && 'Starting from '}Ksh {numberWithCommas(property.amount)}/=</span>*/}
					{/*	<span>{property.propertyType === 'Rent' && " per month"}</span>*/}

					{/*	<div>*/}
					{/*		<span><span className='font-bold text-blue-700'>{property.county}</span>,<span*/}
					{/*			className='font-bold text-blue-700'>{property.town}</span>  </span>*/}
					{/*	</div>*/}

					{/*</div>*/}
				</div>
				<div className='flex items-center justify-between mt-2'>

					<div className={`flex w-full justify-end`}>
						<a
							href={`/product/${product._id}`}
							className="btn-primary"
						>

							<p className='hover:underline hover:cursor-pointer'>
								View
							</p>
						</a>
						<button

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
