export const Filterbar = ()=>{
    return(
        <div className="flex justify-between py-7 px-10 mt-16">
            <h3 className="text-xl font-medium">Overview</h3>
            <div className="text-gray-600 border p-1 px-1 pr-2 cursor-pointer bg-white rounded-sm">
                <select
                name="filterMonth"
                id=""
                className="px-1 outline-none cursor-pointer"
                defaultValue="lastMonth"
                >
                <option value="lastMonth">Last Month</option>
                <option value="thisMonth">This Month</option>
                </select>
            </div>
        </div>
    );
}