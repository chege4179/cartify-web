import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {BASE_URL} from "../util/config";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Loader} from "@mantine/core";

const ProductPage = () => {
	const [product, setProduct] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [isFound, setIsFound] = useState(false)
	const [isError, setIsError] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")

	const {productId} = useParams();
	console.log("Product", product)

	async function getProductById() {
		setIsLoading(true)
		try {
			const response = await fetch(`${BASE_URL}/product/single/${productId}`, {
				method: "GET",
			})
			const res = await response.json()
			setIsLoading(false)
			console.log(res)
			if (res.product) {
				setIsError(false)
				setIsFound(true)
				setProduct(res.product)
			}


		} catch (e) {
			setErrorMsg(e.message || "An unexpected error occurred")
			setIsError(true)

			setIsLoading(false)
			console.log("Failed to fetch product", e)
		}
	}

	useEffect(() => {
		getProductById().then(r => {
			console.log("Product fetched successfullly")
		})
		.catch((err) => {
			console.log("Ann= error occurred", err)
		})

	}, [])

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='max-w-screen-xl w-full h-full bg-white p-4 sm:p-0'>
				<div className='flex w-full h-full'>
					<div className='w-full h-full'>
						{
							 (!isFound && isLoading) && (
								<div className="w-full h-96 flex justify-center items-center">
									<Loader/>
								</div>)
						}
						{
							isFound && (
								<div className="w-full h-full flex justify-evenly items-center my-2 sm:flex-col sm:m-0">
									<Carousel className="w-1/2 h-full flex justify-center items-center sm:w-full"
										autoPlay={true} infiniteLoop={true} interval={1800}
										showThumbs={false}>
										{
											product?.images.map((image, index) => {
												return (
													<img key={index} src={image.url}
														alt={index} width={630} height={400}
														className=" w-full rounded-xl border border-black"/>
												)
											})
										}
									</Carousel>
									<div className='w-1/2 h-full flex justify-evenly flex-col ml-2 bg-gray-200 drop-shadow-lg border border-gray-200 rounded p-6 drop-shadow-lg hover:drop-shadow-xl sm:p-2 sm:w-full sm:mx-1'>
										<div className='w-full h-full'>
											<div className="w-full sm:h-16">
												<h1 className='text-2xl sm:text-2xl '>{product?.name}</h1>
												<h1 className='text-4xl sm:text-2xl font-bold'>Ksh {product?.price} /=</h1>
												<h1 className='text-2xl sm:text-2xl '>Description : </h1>
												<h1 className='text-md sm:text-sm'>{product?.description}</h1>
												<span
													className="mt-4 inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
														{product.category}
												</span>
											</div>
											<hr className="w-full h-0.5 bg-white"/>


											<div className="w-full h-16 items-center ">
												<button className="btn-primary m-2 w-full h-10">
													Add To Cart
												</button>
												<button className="btn-primary m-2 w-full h-10">
													Add To Wishlist
												</button>
											</div>
										</div>
									</div>
								</div>

							)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
