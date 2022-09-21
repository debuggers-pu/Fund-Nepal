function Textfield({ name, placeholder, icon, type, onChange, value }) {
	return (
		<>
			<div className="flex space-x-4 items-center justify-center w-full">
				<label className="text-gray-500" htmlFor={name}>
					{icon}
				</label>
				<input
					className="rounded-md text-sm text-gray-700 p-2 w-full border-none  bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
					type={type ? type : "text"}
					name={name}
					placeholder={placeholder}
					id={name}
					autoComplete="off"
					onChange={onChange}
					value={value}
					min="100"
				/>
			</div>
		</>
	);
}

export default Textfield;
