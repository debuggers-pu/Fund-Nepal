import React from "react";

function SubmitButton({ value, name, onsubmit, disabled }) {
	return (
		<>
			<input
				type="submit"
				name={name}
				id={name}
				value={value}
				className=" bg-green-500 px-2 py-3 text-white font-bold rounded-xl w-full hover:bg-blue-300 disabled:bg-blue-300"
				onClick={onsubmit}
				disabled={disabled}
			/>
		</>
	);
}

export default SubmitButton;
