import React from "react";
import { useDispatch } from "react-redux";
import Quill from "../components/Quill";
import Modal from "../components/shared/Modal";
import { setPostModal } from "../redux/slices/modalSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const outClick = () => {
    dispatch(setPostModal());
  };
  return (
    <div>
      <Modal Title={"Post your story."} onOutClick={outClick}>
        <Quill />
      </Modal>
    </div>
  );
};

export default CreatePost;
