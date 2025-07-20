import React from "react";
import '../Header.css'; // Assuming you have a CSS file for styles

const Header = ({ productTitle = "PDF Generation", userName = "PDF" }) => {
  const firstChar = userName.charAt(0).toUpperCase();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="text-xl font-bold">{productTitle}</div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
        {firstChar}
      </div>
    </header>
  );
};

export default Header;
