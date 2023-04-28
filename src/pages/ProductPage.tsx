import React from 'react';
import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Loader} from "@mantine/core";
import {useQuery} from "react-query";
import {Image, Product} from "../types/Product";
import getProductById from "../api/getProductById";


const ProductPage = () => {

    const {productId} = useParams();


    const {isLoading, isError, data: product, error} = useQuery<Product | null>(
        [`product/${productId}`], () => getProductById(productId!!))


    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='max-w-screen-xl w-full h-full bg-white p-4 sm:p-0'>
                <div className='flex w-full h-full'>
                    <div className='w-full h-full'>
                        {
                            isError && (
                                <div className="w-full h-96 flex justify-center items-center">
                                    {JSON.stringify(error)}
                                </div>
                            )
                        }
                        {
                            isLoading && (
                                <div className="w-full h-96 flex justify-center items-center">
                                    <Loader/>
                                </div>)
                        }
                        {
                            product && (
                                <div className="w-full h-full flex justify-evenly items-center my-2 sm:flex-col sm:m-0">
                                    <Carousel className="w-1/2 h-full flex justify-center items-center sm:w-full"
                                              autoPlay={true} infiniteLoop={true} interval={1800}
                                              showThumbs={false}>
                                        {

                                            product.images.map((image: Image, index) => {
                                                return (
                                                    <img key={image.id} src={image.url}
                                                         alt={image.id} width={630} height={400}
                                                         className=" w-full rounded-xl border border-black"/>
                                                )
                                            })
                                        }
                                    </Carousel>
                                    <div
                                        className='w-1/2 h-full flex justify-evenly flex-col ml-2 bg-gray-200 drop-shadow-lg border border-gray-200 rounded p-6 drop-shadow-lg hover:drop-shadow-xl sm:p-2 sm:w-full sm:mx-1'>
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
