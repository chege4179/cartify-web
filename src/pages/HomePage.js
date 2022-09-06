import React, {useEffect, useState} from 'react';
import IntroBanner from "../components/IntroBanner";
import ProductCard from "../components/ProductCard";
import {BASE_URL} from "../util/config";

const HomePage = () => {
	const [products,setProducts] = useState([])
	async function fetchProducts(){
		try{
			const response = await fetch(`${BASE_URL}/product/all`,{
				method:"GET",

			})
			const res = await response.json()
			setProducts(res.products)
		}catch (e){
			console.log("Err",e)

		}


	}
	useEffect(() => {
		fetchProducts()

	}, []);


	return (
		<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
			<div className='max-w-screen-xl box-border '>
				<div className="w-full flex flex-col">
					<IntroBanner/>
					<div className="w-full py-2 grid grid-cols-4 gap-4 lg:grid-cols-3 sm:flex sm:items-center sm:flex-col">
						{
							products.map((product, index) => {
								return (
									<ProductCard
										key={index}
										product={product}

									/>)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
