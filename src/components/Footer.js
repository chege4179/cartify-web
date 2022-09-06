import React from 'react';
import {BsFacebook, BsWhatsapp} from "react-icons/bs";
import {AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram} from "react-icons/ai";
import {useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";

const Footer = () => {
	const user = useSelector(SelectUser)
	return (
		<div className='bg-zinc-800 w-full h-96 flex justify-center items-center sm:w-full overflow-x-hidden sm:h-full'>
			<div className="w-full h-full max-w-screen-xl  flex flex-col py-2">
				<div className="h-5/6 w-full border-b-2 border-b-zinc-400  flex sm:flex-col">
					<div className="w-1/2 sm:w-full   flex flex-col p-4 justify-evenly">
						<div>
							<h1 className="text-indigo-500 text-lg">ABOUT</h1>
							<h2 className="text-zinc-400">CarifyWeb.com Is Your
								Trusted Ecommerce Application for online shopping
							</h2>
						</div>

						<div>
							<h1 className="text-indigo-500 text-lg">CALL</h1>
							<a href="tel:254725944658" passHref={true}>
								<h2 className="text-zinc-400 hover:cursor-pointer"> +254725944658</h2>
							</a>
						</div>
						<div>
							<h1 className="text-indigo-500 text-lg">HELP</h1>
							<a href="mailto:info@housemarketplace.com" passHref={true}>
								<h2 className="text-zinc-400 hover:cursor-pointer">info@cartify.com</h2>
							</a>

						</div>
					</div>
					<div className="w-1/4 sm:w-full p-4">
						<h1 className="text-indigo-500 text-xl">CATEGORIES</h1>
						<a href="/trending" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">Trending Posts</h1>
						</a>
						<a href="/saved" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">Saved Posts</h1>
						</a>
						{
							user !== null && (
								<a href={`/profile`} passHref={true} className=" ">
									<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">My Posts</h1>
								</a>
							)
						}


					</div>
					<div className="w-1/4 sm:w-full  p-4">
						<h1 className="text-indigo-500 text-xl">Quick as</h1>
						<a href="/about" passHref={true} className=" ">
							<h1 className={`cursor-pointer  text-zinc-400 hover:text-indigo-500 hover:underline `}>About Us</h1>
						</a>
						<a href="/contact" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">Contact Us</h1>
						</a>
						<a href="/policy" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">Privacy Policy</h1>
						</a>
						<a href="/terms" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">Terms And Conditions</h1>
						</a>
						<a href="/faq" passHref={true} className=" ">
							<h1 className=" cursor-pointer text-zinc-400 hover:text-indigo-500 hover:underline ">FAQ</h1>
						</a>
					</div>
				</div>
				<div className="h-1/6 w-full flex justify-between items-center sm:flex-col sm:h-28 sm:pt-4">
					<div className="text-zinc-400">
						&copy; 2022 - {new Date().getFullYear()} CopyRight : <span className="text-zinc-400 ">Cartify Web</span>
					</div>
					<div className="flex  w-1/5 justify-evenly sm:w-3/4">
						<div className="bg-zinc-500 rounded-3xl p-2 hover:bg-blue-600">
							<BsFacebook size={24}/>
						</div>
						<div className="bg-zinc-500 rounded-3xl p-2 hover:bg-blue-700">
							<AiFillTwitterCircle size={24}/>
						</div>
						<div className="bg-zinc-500 rounded-3xl p-2 hover:bg-green-500">
							<BsWhatsapp size={24}/>
						</div>
						<div className="bg-zinc-500 rounded-3xl p-2 hover:bg-blue-600">
							<AiFillLinkedin size={24}/>
						</div>
						<div className="bg-zinc-500 rounded-3xl p-2 hover:bg-[#8a3ab9]">
							<AiOutlineInstagram size={24}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
