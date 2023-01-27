import React, {ReactElement} from 'react';
import Header from "./Header";
import Footer from "./Footer";


type LayoutProps = {
	children:ReactElement,
	title: string | null
}
const Layout = ({ children,title } : LayoutProps) => {
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
