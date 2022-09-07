import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom"

const LeftCategoryItem = ({children, name, route}) => {
	return (
		<Link to={route}>
			<div className="w-full h-10 flex justify-start rounded hover:bg-indigo-100 items-center px-2 hover:cursor-pointer">
				<div className="mr-2 hover:text-indigo-600 whitespace-nowrap ">
					{children}
				</div>
				<h1 className="font-bold text-left mr-2 hover:text-indigo-600 w-full whitespace-nowrap">{name} </h1>
				<MdKeyboardArrowRight
					className="flex"
					size={20}
					onMouseOver={({target}) => target.style.color = "rgb(79 70 229)"}
					onMouseOut={({target}) => target.style.color = "black"}
				/>
			</div>
		</Link>

	);
};

export default LeftCategoryItem;
