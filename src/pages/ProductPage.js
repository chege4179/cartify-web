import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {BASE_URL} from "../util/config";

const ProductPage = () => {
	const [product,setProduct] = useState({})
	const { productId } = useParams();

	async function getProductById(){
		try{
			const response = await fetch(`${BASE_URL}/product/single/${productId}`,{
				method:"GET",

			})
			const res = await response.json()
			console.log(res)
			setProduct(res.product)
		}catch (e){
			console.log("Failed to fetch product",e)
		}
	}

	useEffect(() => {
		getProductById()

	},[productId])

	return (
		<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
			<div className='max-w-screen-xl box-border '>
				<div className="w-full flex flex-col">
					<h1>Product Page {product.name}</h1>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
