
const Header = ({ productTitle = "PDF Generation" }) => {
  return (
    <header className="flex justify-between items-center p-2 bg-gray-100 shadow-md w-full">
      <div className="text-xl font-bold">{productTitle}</div>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Preview</button>
      </div>
    </header>
  );
};

export default Header;