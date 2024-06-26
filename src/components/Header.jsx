import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <div className="flex justify-between items-center shadow px-10 h-16 bg-white fixed w-[84%]">
      <div className="flex gap-5">
        <h4>Payments</h4>
        <small className="flex items-center gap-1 text-gray-600">
          <GoQuestion size={15} />
          How it works
        </small>
      </div>
      <div
        className={`flex items-center bg-[#F2F2F2] px-4 rounded-md ${
          inputFocus ? "ring-1 ring-gray-300" : ""
        }`}
      >
        <FiSearch size={18} className="text-gray-400" />
        <input
          type="text"
          name="Search"
          id="search"
          placeholder="Search features, tutorials, etc."
          className="bg-[#F2F2F2] p-2 w-80 outline-none placeholder:text-gray-500"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
      </div>
      <div className="flex gap-5">
        <div className="rounded-full bg-[#F2F2F2] h-10 w-10 flex items-center justify-center cursor-pointer">
          <RiMessage2Fill size={23} className="text-[#4C4C4C]" />
        </div>
        <div className="rounded-full bg-[#F2F2F2] h-10 w-10 flex items-center justify-center cursor-pointer">
          <TiArrowSortedDown size={25} className="text-[#4C4C4C]" />
        </div>
      </div>
    </div>
  );
}
