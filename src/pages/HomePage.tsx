import React from 'react';
import IntroBanner from "../components/IntroBanner";
import ProductCard from "../components/ProductCard";
import {Loader} from "@mantine/core";
import {Product} from "../types/Product";
import {useQuery} from "react-query";
import {QueryKeys} from "../util/QueryKeys";
import getAllProducts from "../api/getAllProducts";


const HomePage = () => {
    const {isLoading, data: products, error} = useQuery<Product[]>(
        [QueryKeys.ALL_PRODUCTS], getAllProducts)


    return (
        <div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
            <div className='max-w-screen-xl box-border '>
                <div className="w-full flex flex-col">
                    <>
                        <IntroBanner/>
                        <h1 className="text-2xl text-left font-bold w-full">Trending Products</h1>
                        {
                            error && (<h1>An unexpected error occurred</h1>)
                        }
                        {
                            isLoading && (
                                <div className="w-full h-96 flex justify-center items-center">
                                    <Loader/>
                                </div>
                            )
                        }
                        {
                            products && (
                                <>
                                    <a href="/product/all"
                                       className="text-md text-left flex items-center  w-full hover:underline cursor-pointer">
                                        View all {products.length} Products →
                                    </a>
                                    <div
                                        className="w-full py-2 grid grid-cols-4 gap-4 lg:grid-cols-3 sm:flex sm:items-center sm:flex-col">
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

                                </>
                            )
                        }

                    </>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
