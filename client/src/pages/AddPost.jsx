import React from "react";
import InputField from "../components/shared/Inputfield";
import toast from "react-hot-toast";

function AddPost() {
	return (
		<div className="flex content-">
			<div className="flex justify-center items-center">
				<div className="m-auto p-10 mt-20 border-2 shadow-sm rounded-md">
					<h1 className="font-bold text-2xl mb-4 text-center">
						<span className="text-primaryColor italic">Create Story</span>
					</h1>
					<InputField
						placeholder={"Enter your Title"}
						name="title"
						type="text"
					/>
					<InputField
						placeholder={"Enter your description"}
						name="description"
						type="text"
					/>
					<InputField
						placeholder={"Enter your Category"}
						name="category"
						type="text"
					/>
					<InputField
						placeholder={"Enter Target Amount"}
						name="amount"
						type="number"
					/>
					<InputField
						placeholder={"Enter Comment"}
						name="comment"
						type="text"
						className="block p-4 w-full"
					/>
					<InputField
						placeholder={"Upload your photo."}
						name="phuto"
						type="file"
						id="phuto"
					/>
					<div className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer">
						Post
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddPost;
