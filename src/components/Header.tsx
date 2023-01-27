import React, {useState} from 'react';
import { useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {  BsSearch} from "react-icons/bs";
import {Popover} from "@mantine/core";
import {APP_TITLE} from "../util/config";
import {GrCart} from "react-icons/gr";
import {MDBBadge} from "mdb-react-ui-kit";
import {SelectCart} from "../ReduxStore/CartReducer";
import { Link } from "react-router-dom"


const Header = () => {
	const user = useSelector(SelectUser)
	const cart = useSelector(SelectCart)

	const [showDropdown, setShowDropdown] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")

	return (
		<div className='bg-white text-gray-200 shadow transition border-b-2 border-gray-300 border-solid  w-full h-16 sm:h-32 flex items-center justify-center px-4 fixed z-10'>
			<div className='max-w-screen-xl w-screen flex sm:flex-col-reverse sm:w-full sm:h-full sm:justify-evenly items-center justify-center'>
				<div className='flex w-4/5 sm:w-full sm:h-16 sm:h-full sm:flex sm: items-center justify-evenly'>
					<Link to='/'  className="sm:hidden">
						<h1 className='text-indigo-500 text-center font-extrabold sm:hidden text-3xl hover:cursor-pointer hover:text-blue-700'>{APP_TITLE}</h1>
					</Link>
					<div className={`bg-gray-100 p-1 border-2 border-solid border-gray-600 rounded-md w-1/2 mx-2 flex sm:h-3/4 sm:items-center sm:justify-center  md:w-80`}>
						<input
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							type='text'
							placeholder='Search......'
							className='p-1 bg-gray-100 ml-2 h-8 w-4/5 flex-1 outline-none text-black  '
						/>
						<div className='hover:bg-gray-300 rounded'>
							<button disabled={searchTerm === ''} className='p-2' >
								<BsSearch color='black'/>
							</button>
						</div>
					</div>
					<div className='w-full flex justify-end hidden '>
						<button disabled={searchTerm === ''} className='p-2 font-bold text-2xl'
						>
							<BsSearch color='black'/>
						</button>
					</div>
				</div>
				<div className='flex sm:1/2  sm:w-full justify-end sm:justify-evenly'>
					<div className="w-1/2 flex justify-start xl:hidden">
						<Link to='/' >
							<h1 className='text-indigo-500 text-center font-bold  text-2xl hover:cursor-pointer hover:text-blue-700'>{APP_TITLE}</h1>
						</Link>
					</div>
					<div className="flex">
						{
							user === null ? (

								<>
									<Link to="/cart">
										<div className="h-full w-14 flex items-center justify-center  mx-2 rounded-md hover:cursor-pointer">
											<GrCart color="black" size={24} />
											{
												cart.length !== 0 &&(
													<MDBBadge className="absolute mb-4 px-2 bg-indigo-500 rounded-2xl text-sm ml-8"  color='danger' notification pill>{cart.length}</MDBBadge>
												)
											}

										</div>
									</Link>
									<Link to="/login" className="btn-primary">
										Log In
									</Link>
									<Link to="/signup" className="btn-primary">
										Create Account
									</Link>

								</>
							) : (

								<div className='flex '>
									<div className=''>
										<img
											src={user.imageUrl} alt={user?.username} width={40}
											height={40}
											className='sm:w-8 sm:h-8   mx-1 rounded-2xl hover:cursor-pointer hover:border-black border-2 border-solid'
											onClick={() => setShowDropdown(!showDropdown)}/>
										<Popover
											opened={showDropdown}
											onClose={() => setShowDropdown(!showDropdown)}
											width={210}
											position="bottom">
											<h2 className='block px-2 py-2 text-sm font-bold capitalize text-gray-700 hover:bg-blue-500 hover:text-white'>{user.name}</h2>
											<h2 className='block px-2 py-2 text-sm font-bold text-gray-700 hover:bg-blue-500 hover:text-white'>{user.email}</h2>
											<hr className='bg-black h-0.5'/>

											<Link to={`/profile/${user.username}`} >
												<h1
													className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
													My Wishlist
												</h1>
											</Link>
											<Link to={"/post/new"} >
												<h1
													className="block px-2 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
													Previous Orders
												</h1>
											</Link>
											<Link to="/account/settings" >
												<h1
													className="block px-2 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
													Settings
												</h1>
											</Link>

											<h1
											    className="block px-2 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
												Sign Out
											</h1>
										</Popover>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
