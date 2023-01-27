import React, {ReactElement} from 'react';

import { Link } from "react-router-dom"

type RightCategoryItemProps = {
	children:ReactElement,
	route:string,
	name:string,
	subtitle:string
}
const RightCategoryItem = ({ children,route,name,subtitle } :RightCategoryItemProps) => {
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
