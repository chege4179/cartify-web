import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-router-dom"
const RightCategoryItem = ({ children,route,name,subtitle }) => {
	return (
		<Link to={route} >
			<div className="w-full h-14 flex justify-start rounded hover:bg-indigo-100 items-center p-2 hover:cursor-pointer">
				<div className="mr-2 hover:text-indigo-600 whitespace-nowrap " >
					{children}
				</div>
				<div className="flex flex-col ">
					<p className="font-bold text-left mr-1 hover:text-indigo-600 w-full whitespace-nowrap">{name} </p>
					<p className="text-left text-sm mr-1 hover:text-indigo-600 w-full whitespace-nowrap">{subtitle} </p>
				</div>

			</div>
		</Link>
	);
};

export default RightCategoryItem;
