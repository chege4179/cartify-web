import React, {useEffect, useState} from 'react';
import IntroBanner from "../components/IntroBanner";
import ProductCard from "../components/ProductCard";
import {BASE_URL} from "../util/config";
import {Loader} from "@mantine/core";

const HomePage = () => {
	const [products,setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isFound, setIsFound] = useState(false)
	const [isError, setIsError] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")
	async function fetchProducts(){
		setIsLoading(true)
		try{
			const response = await fetch(`${BASE_URL}/product/all`,{
				method:"GET",

			})
			const res = await response.json()
			setIsLoading(false)
			if (res.success){
				setErrorMsg(res.msg)
				setIsError(false)
				setProducts(res.products)
			}else {
				setIsError(true)
			}
		}catch (e){
			setErrorMsg(e.message || "An unexpected error occurred")
			setIsError(true)

			setIsLoading(false)
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
					<h1 className="text-2xl text-left font-bold w-full">Trending Products</h1>
					{
						isLoading && (
							<div className="w-full h-96 flex justify-center items-center">
								<Loader/>
							</div>
						)
					}
					<a href="/product/all"  className="text-md text-left flex items-center  w-full hover:underline cursor-pointer">
						View all {products.length} Products →
					</a>
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
