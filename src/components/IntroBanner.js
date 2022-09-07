import React from 'react';
import LeftCategoryItem from "./LeftCategoryItem";
import {AiFillShop, AiOutlineQuestionCircle} from "react-icons/ai";
import {FaBaby} from "react-icons/fa";

import {FcElectronics, FcTabletAndroid} from "react-icons/fc"
import {GrGamepad, GrPersonalComputer} from "react-icons/gr"
import {MdOutlineSell, MdSportsBasketball} from "react-icons/md"
import RightCategoryItem from "./RightCategoryItem";
import {IoLogoDropbox} from "react-icons/io";


const IntroBanner = () => {
	return (
		<div className="w-full h-96  flex my-2 sm:hidden">
			<div className="w-1/6 h-full bg-white rounded-xl p-2 mr-6 flex flex-col justify-start">
				<div className="w-full h-10 flex items-center justify-center rounded  hover:bg-indigo-100">
					<h1 className="w-full text-xl text-center font-bold">Categories</h1>
				</div>
				<LeftCategoryItem name="Electronics" route="/category/electronics">
					<FcElectronics
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>
				<LeftCategoryItem name="Computing" route="/category/computing">
					<GrPersonalComputer
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>
				<LeftCategoryItem name="Gaming" route="/category/gaming">
					<GrGamepad
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>
				<LeftCategoryItem name="Baby Products" route="/category/baby-products">
					<FaBaby
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>
				<LeftCategoryItem name="Sporting Goods" route="/category/sporting-goods">
					<MdSportsBasketball
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>
				<LeftCategoryItem name="Phones and Tablets" route="/category/phones-and-tablets">
					<FcTabletAndroid
						size={25} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}
					/>
				</LeftCategoryItem>


			</div>
			<div className="w-4/6 h-full bg-white rounded-xl">
				<img src="/e-commerce-banner.png" className="rounded-xl h-full w-full" alt="Banner"/>
			</div>
			<div className="w-1/6 h-1/2 bg-white rounded-xl p-2 ml-6 flex flex-col justify-start">
				<RightCategoryItem
					name="Help Center"
					subtitle="Guide To Customer Care"
					route="/help"
				>
					<AiOutlineQuestionCircle
						size={27} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}/>
				</RightCategoryItem>

				<RightCategoryItem
					name="Easy Return"
					subtitle="Quick Refund"
					route="/quick-refund"
				>
					<IoLogoDropbox
						size={27} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}/>
				</RightCategoryItem>
				<RightCategoryItem
					name="Sell on Cartify"
					subtitle="Millions of visitors"
					route="/sell-on-cartify"
				>
					<MdOutlineSell
						size={27} color="black"
						onMouseOver={({target})=>target.style.color="rgb(79 70 229)"}
						onMouseOut={({target})=>target.style.color="black"}/>
				</RightCategoryItem>

			</div>
		</div>
	);
};

export default IntroBanner;
