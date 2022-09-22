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
  const onChangeHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setPost({ ...post, [name]: value });
    console.log(post);
  };
  const onSubmitHandler = async (e) => {
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
      <div className="flex flex-col justify-center items-start space-y-6 rounded-lg p-1	">
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
          className=""
        />
        <div className="text-lg font-bold space-x-4 text-gray-700 focus:outline-none border-none">
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
        <div className="w-full">
          <label htmlFor="content">
            <h1 className="font-bold text-lg text-gray-500 my-2">
              Write story about your cause
            </h1>
          </label>
          <textarea
            id="content"
            name="content"
            rows="10"
            onChange={onChangeHandler}
            className="rounded-sm text-sm text-gray-700 p-2 w-full border-2 shadow-sm outline-none"
          />
        </div>
      </div>
    </>
  );
}

export default Quill;
