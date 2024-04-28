import { Cards } from "../components/Cards";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Table } from "../components/Table";
import { Filterbar } from "../components/Filterbar";

export const Mainscreen = () =>{
    return(
        <div className="w-full flex">
            <div className="w-[16%] h-full">
                <Sidebar/>
            </div>
            <div className="w-[84%] bg-gray-50">
                <Header/>
                <Filterbar/>
                <div className="flex gap-6 px-10">
                    <Cards head={"Online Orders"} value={231}/>
                    <Cards head={"Amount Received"} value={"₹23,92,312.19"}/>
                </div>
                <h3 className="text-xl font-medium py-7 px-10">
                    Transactions | This Month
                </h3>
                <div className="bg-white m-10 p-4 mt-0 rounded-md">
                    <Table />
                </div>
            </div>
        </div>
    );
}