import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";
import {useEffect, useState} from "react";
import {BASE_URL} from "./util/config";


function App() {
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

	const [products,setProducts] = useState([])
	return (
		<Layout>
			<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
				<div className='max-w-screen-xl box-border '>
					<div className="w-full flex flex-col">
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
		</Layout>
	);
}

export default App;
