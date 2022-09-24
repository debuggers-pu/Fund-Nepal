import React from "react";
import { NavLink } from "react-router-dom";
import Searchbox from "./shared/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";
import { setPostModal } from "../redux/slices/modalSlice";

const Navbar = () => {
	const isAuthenticated = useSelector(state => state.auth.isauthenticated);
	const image = useSelector(state => state.auth.user.user.profilepic);
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(setUser());
		dispatch(setAuthenticated(false));
	};

	const onCreatepost = e => {
		e.preventDefault();
		dispatch(setPostModal(true));
	};
	return (
		<div className="flex justify-between items-center bg-gray-700 text-white py-4 px-10 ">
			<a href="/">
				<h1 className="font-bold text-xl ">Fund Nepal</h1>
			</a>
			<Searchbox />
			{isAuthenticated === true ? (
				<div className="flex items-center space-x-2">
					<button
						className="inline-block w-full px-5 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-[#38bdf8] rounded-md hover:bg-blue-400"
						onClick={onCreatepost}
					>
						Create Post
					</button>
					<NavLink to="/">
						<button
							className="inline-block w-full px-5 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-800"
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
					<button className="inline-block w-full px-5 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-cyan-600 rounded-md hover:bg-blue-400">
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
