import { useState } from "react";

import Textfield from "./TextField";
import Submit from "./Submit";

function Quill() {
	const genre = ["tech", "general", "health", "education"];

	const initialState = {
		title: "",
		content: "",
		genre: "",
	};
	const [post, setPost] = useState(initialState);
	const onChangeHandler = e => {
		e.preventDefault();
		let name = e.target.name;
		let value = e.target.value;
		setPost({ ...post, [name]: value });
		console.log(post);
	};
	const onSubmitHandler = async e => {
		// e.preventDefault();
		// const postDetails = {
		// 	...post,
		// 	author: localStorage.getItem("userID"),
		// 	likes: 0,
		// 	likers: [],
		// };
		// try {
		// 	const res = await axios.post("/post/addnewpost", postDetails);
		// 	console.log(res.data);
		// 	window.alert("Your post created successfully");
		// 	router.push("/profile");
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center space-y-6 w-3/4 h-1/2 m-auto bg-gray-200 rounded-lg p-4">
				<div className="min-w-full pl-5 space-y-3 ">
					<Textfield
						type="text"
						name="title"
						placeholder="Enter your title here"
						onChange={onChangeHandler}
					/>
					<Textfield
						placeholder={"Enter Target Amount"}
						name="amount"
						type="number"
						onChange={onChangeHandler}
					/>
					<input
						placeholder={"Upload your photo."}
						name="phuto"
						type="file"
						id="phuto"
						className="pl-4"
					/>
				</div>
				<div className="min-w-full text-center">
					<label htmlFor="content">
						<h1 className="font-bold text-lg text-gray-500  m-2">
							Write story about your cause
						</h1>
					</label>
					<textarea
						id="content"
						name="content"
						rows="10"
						onChange={onChangeHandler}
						className="rounded-md text-sm text-gray-700 p-2 w-full border-none  bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
					/>
				</div>
				<div className="text-lg font-bold space-x-4 text-gray-700 focus:outline-none focus:ring-2 focus:border-blue-500">
					<label htmlFor="genre">Choose Genre</label>
					<select name="genre" id="genre" onChange={onChangeHandler}>
						{genre.map((genre, id) => {
							return (
								<option key={id} value={genre}>
									{genre}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</>
	);
}

export default Quill;
