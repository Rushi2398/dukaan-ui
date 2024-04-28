import { useState } from "react";
import { FiDownload, FiSearch } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { transactionData } from "../utils/transactions";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";

export const Table = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 19;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = transactionData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(transactionData.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % transactionData.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div
                className={`flex items-center px-4 rounded-md border border-gray-300 w-80 ${
                    inputFocus ? "ring-1 ring-gray-300" : ""
                }`}
                >
                    <FiSearch size="20" className="text-gray-400" />
                    <input
                        type="text"
                        name="Search"
                        id=""
                        placeholder="Search by order ID..."
                        className="p-2 w-80 outline-none placeholder:text-gray-500"
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                    />
                </div>

                <div className="flex gap-2">
                <button
                    className="border border-gray-300 p-1 px-3 rounded-md text-gray-600 flex items-center gap-2 text-lg"
                    onClick={() => setIsSorted(!isSorted)}>
                    Sort
                    {isSorted ? (
                    <LuArrowUpDown size="16" />
                    ) : (
                    <LuArrowDownUp size="16" />
                    )}
                </button>
                <button className="border border-gray-300 p-1 px-2 rounded-md text-gray-600">
                    <FiDownload size="23" />
                </button>
                </div>

                
            </div>
            
            <table className="my-4 w-full">
                <thead>
                    <tr className="flex bg-[#F2F2F2] p-2 text-gray-600 rounded-md px-3 flex-grow">
                        <th className="font-medium w-1/4 flex">Order ID</th>
                        <th className="font-medium flex items-center w-1/4">
                            Order date
                            <TiArrowSortedDown size="18" className="text-gray-700 " />
                        </th>
                        <th className="font-medium w-1/4 flex justify-end">
                            Order amount
                        </th>
                        <th className="font-medium flex items-center gap-1 w-1/4 justify-end">
                            Transaction fees <HiOutlineInformationCircle size="18" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((transaction, index) => (
                        <tr className="flex border-b mx-3 py-3" key={index}>
                        <td className="w-1/4 text-[#146EB4] font-medium">
                            {transaction.orderId}
                        </td>
                        <td className="w-1/4">{transaction.orderDate}</td>
                        <td className="w-1/4 flex justify-end">{transaction.orderAmount}</td>
                        <td className="w-1/4 flex justify-end">
                            {transaction.transactionFees}
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                breakLabel="..."
                nextLabel={
                <span className="border-2 rounded-md flex items-center p-1 pl-2 cursor-pointer mx-5">
                    Next
                    <MdOutlineKeyboardArrowRight size="20" className=" mb-[-2px]" />
                </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel={
                <span className="border-2 rounded-md flex items-center p-1 pr-2 cursor-pointer mx-5">
                    <MdOutlineKeyboardArrowLeft size="20" className=" mb-[-2px]" />
                    Previous
                </span>
                }
                renderOnZeroPageCount={null}
                pageLinkClassName="p-2"
                breakClassName="mx-3"
                activeClassName="bg-[#146EB4] text-white rounded-md mx-2 cursor-pointer py-1"
                containerClassName="flex justify-center items-center m-8 select-none"/>
        </div>
    );
};