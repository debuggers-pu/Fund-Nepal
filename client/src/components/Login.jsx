import React, { useState } from "react";
import InputField from "./shared/Inputfield";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../axios";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";

const Login = ({ onClick }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onLogin = async e => {
		e.preventDefault();
		try {
			if (email !== "" && password !== "") {
				const res = await login({ email, password });
				if (res.status === 200) {
					toast.success(res.data.message);
					dispatch(setAuthenticated(true));
					dispatch(setUser(res.data));
					navigate("/");
				}
			} else {
				toast.error("Please fill all the fields");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-center items-center">
			<div className="m-auto p-10 mt-20 border-2 shadow-sm rounded-md">
				<h1 className="font-bold text-2xl mb-4 text-center">
					Login to <span className="text-primaryColor italic">Fund Nepal</span>
				</h1>
				<InputField
					placeholder={"Enter your email address"}
					name="email"
					type="email"
					onChange={e => setEmail(e.target.value)}
				/>
				<InputField
					placeholder={"Enter your password"}
					name="password"
					type={"password"}
					onChange={e => setPassword(e.target.value)}
				/>

				<NavLink to="/auth/signup">
					<p
						className="text-xs font-bold hover-effect mb-2 text-left "
						onClick={onClick}
					>
						Don't have an account ? Register now.
					</p>
				</NavLink>
				<div
					className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
					onClick={onLogin}
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default Login;
