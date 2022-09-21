import React, { useState } from "react";
import InputField from "./shared/Inputfield";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../axios";
import { useDispatch } from "react-redux"

import { setAuthenticated, setUser} from "../redux/slices/authSlice"

const Signup = ({ onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({});

  const onChangeHandler = (name, e) => {
    setCredentials({ ...credentials, [name]: e.target.value });
  };

  const changeImage = (e) => {
    setCredentials({ ...credentials, profilepic: e.target.files[0] });
  };

  const signupHandler = async () => {
    try {
      if (
        credentials.email &&
        credentials.password &&
        credentials.fullName &&
        credentials.profilepic &&
        credentials.contactNumber &&
        credentials.address
      ) {
        const res = await signup(credentials);
        if (res) {
          dispatch(setAuthenticated(true));
          dispatch(setUser(res.data.user));
          toast.success(res.data.message);
          navigate("/")
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
    <div className="m-auto p-10 mt-20 border-2 shadow-sm rounded-md">
      <h1 className="font-bold text-2xl mb-4 text-center">
        Register to <span className="text-primaryColor italic">Fund Nepal</span>
      </h1>
        <InputField
          placeholder={"Enter your fullName"}
          name="fullName"
          type={"text"}
          onChange={(e) => onChangeHandler("fullName", e)}
        />
      <InputField
        placeholder={"Enter your email"}
        name="email"
        type="email"
        onChange={(e) => onChangeHandler("email", e)}
      />
      <InputField
        placeholder={"Enter your password"}
        name="password"
        type="password"
        onChange={(e) => onChangeHandler("password", e)}
      />
       <InputField
        placeholder={"Enter your address"}
        name="address"
        type={"text"}
        onChange={(e) => onChangeHandler("address", e)}
      />
       <InputField
        placeholder={"Enter your phone number"}
        name="contactNumber"
        type={"text"}
        onChange={(e) => onChangeHandler("contactNumber", e)}
      />
      <InputField
        placeholder={"Upload your photo."}
        name="profilepic"
        type="file"
        id="profilepic"
        onChange={changeImage}
      />
    <NavLink to='/auth/login'>
    <p
        className="text-xs font-bold hover-effect mb-2 text-left"
        onClick={onClick}
      >
        Already have an account ? Signin.
      </p>
    </NavLink>
      
      <div
        className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
        onClick={signupHandler}
      >
        Register
      </div>
    </div>
    </div>
  );
};

export default Signup;