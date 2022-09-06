import React from 'react';
import CategoryItem from "./CategoryItem";
import {AiFillHome, AiFillShop} from "react-icons/ai";
import {FaBuilding, FaHome} from "react-icons/fa";
import {ImOffice} from "react-icons/im";
import {IoIosBusiness} from "react-icons/io";



const IntroBanner = () => {
	return (
		<div className="w-full h-96  flex my-2 sm:hidden">
			<div className="w-1/6 h-full bg-white rounded-xl p-2 mr-6 flex flex-col justify-start">
				<div className="w-full h-10 flex items-center justify-center rounded  hover:bg-indigo-100">
					<h1 className="w-full text-xl text-center font-bold">Categories</h1>
				</div>
				<CategoryItem  name="Electronics" route="/property/for-rent">
					<AiFillHome
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Computing" route="/property/for-sale">
					<FaBuilding
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Gaming" route="/residential">
					<FaHome
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Baby Products" route="/commercial">
					<IoIosBusiness
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Sporting Goods" route="/offices">
					<ImOffice
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Phones and Tablets" route="/shops">
					<AiFillShop
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>


			</div>
			<div className="w-4/6 h-full bg-white rounded-xl">
				<img src="/e-commerce-banner.png" className="rounded-xl h-full w-full" alt="Banner"/>
			</div>
			<div className="w-1/6 h-full bg-white rounded-xl p-2 ml-6 flex flex-col justify-start">
				<div className="w-full h-10 flex items-center justify-center rounded  hover:bg-indigo-100">
					<h1 className="w-full text-xl text-center font-bold">Categories</h1>
				</div>
				<CategoryItem  name="House Hold Items" route="/property/for-rent">
					<AiFillHome
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="For Sale" route="/property/for-sale">
					<FaBuilding
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Residential" route="/residential">
					<FaHome
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Commercial" route="/commercial">
					<IoIosBusiness
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Offices" route="/offices">
					<ImOffice
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>
				<CategoryItem  name="Shops" route="/shops">
					<AiFillShop
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</CategoryItem>


			</div>
		</div>
	);
};

export default IntroBanner;
