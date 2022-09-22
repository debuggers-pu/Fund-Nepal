import { useState } from "react";
import Textfield from "./TextField";
import Submit from "./Submit";
import { addpost } from "../axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPostModal } from "../redux/slices/modalSlice";

function Quill() {
	const dispatch = useDispatch();
	const category = ["General", "Medical", "Tech", "Education"];
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({});

	const onChangeHandler = (name, e) => {
		setCredentials({ ...credentials, [name]: e.target.value });
	};

	const changeImage = e => {
		setCredentials({ ...credentials, image: e.target.files[0] });
	};

	const onSubmitHandler = async e => {
		e.preventDefault();
		const res = await addpost(credentials);
		if (res.data) {
			toast.success("Post Created Succesfully");
			navigate("/");
			dispatch(setPostModal(false));
		}
	};

	return (
		<>
			<div className="flex flex-col justify-center items-start space-y-6 rounded-lg p-1	">
				<Textfield
					type="text"
					name="title"
					placeholder="Enter your title here"
					onChange={e => onChangeHandler("title", e)}
				/>
				<Textfield
					placeholder={"Enter Target Amount"}
					name="amount"
					type="text"
					onChange={e => onChangeHandler("amount", e)}
				/>
				<input
					placeholder={"Upload your photo."}
					name="image"
					type="file"
					id="image"
					className=""
					onChange={changeImage}
				/>
				<div className="text-lg font-bold space-x-4 text-gray-700 focus:outline-none border-none">
					<label htmlFor="category">Choose category</label>
					<select
						name="category"
						id="category"
						onChange={e => onChangeHandler("category", e)}
					>
						{category.map((cat, id) => {
							return (
								<option key={id} value={cat}>
									{cat}
								</option>
							);
						})}
					</select>
				</div>
				<div className="w-full">
					<label htmlFor="content">
						<h1 className="font-bold text-lg text-gray-500 my-2">
							Write story about your cause
						</h1>
					</label>
					<textarea
						id="description"
						name="description"
						rows="10"
						onChange={e => onChangeHandler("description", e)}
						className="rounded-sm text-sm text-gray-700 p-2 w-full border-2 shadow-sm outline-none"
					/>
				</div>
				<Submit value="Submit" name="submit" onsubmit={onSubmitHandler} />
			</div>
		</>
	);
}

export default Quill;
