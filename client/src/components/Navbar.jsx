import React from "react";
import { NavLink } from "react-router-dom";
import Searchbox from "./shared/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";

const Navbar = () => {
	const isAuthenticated = useSelector(state => state.auth.isauthenticated);
	const image = useSelector(state => state.auth.user.user.profilepic);
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(setUser());
		dispatch(setAuthenticated(false));
	};
	return (
		<div className="flex justify-between items-center bg-green-500 text-white py-2 px-10 ">
			<h1 className="font-bold text-xl ">Fund Nepal</h1>
			<Searchbox />
			{isAuthenticated === true ? (
				<div className="flex items-center space-x-2">
					<button className="px-4 py-2 bg-white text-primaryColor hover:opacity-75 rounded-sm border-none">
						{" "}
						Create Post
					</button>
					<NavLink to="/">
						<button
							className="px-4 py-2 bg-white text-primaryColor hover:opacity-75 rounded-sm border-none"
							onClick={onClick}
						>
							Logout
						</button>
					</NavLink>
					<img
						src={`http://localhost:5000/${image.split("\\")[1]}`}
						className="h-8 w-8 rounded-full"
					/>
				</div>
			) : (
				<NavLink to="/auth/login">
					<button className="px-4 py-2 bg-white text-primaryColor hover:opacity-75 rounded-sm border-none">
						Login
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default Navbar;

// http://localhost:5000/1663581475437-IMG_20201008_085425.jpg

// http://localhost:5000/1663581475437-IMG_20201008_085425.jpg
