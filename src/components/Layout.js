import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children,title }) => {
	return (
		<div className='overflow-x-hidden flex flex-col flex-grow'>

			<Header/>
			<div className='mt-16 w-full min-h-screen bg-slate-100 flex flex-grow overflow-y-scroll scrollbar-hide'>
				{children}
			</div>
			<Footer/>
		</div>
	);
};

export default Layout;
