function Textfield({ name, placeholder, type, onChange, value }) {
  return (
    <input
      className="`shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-50 text-sm mb-2`"
      type={type ? type : "text"}
      name={name}
      placeholder={placeholder}
      id={name}
      autoComplete="off"
      onChange={onChange}
      value={value}
      min="100"
    />
  );
}

export default Textfield;
