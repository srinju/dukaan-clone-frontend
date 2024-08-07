

export const RevenueCard2 = ({
    title,
    amount
}) => {
    return <div className="bg-gray-200 rounded-lg shadow-xl p-10">
        <div className="font-thin text-gray-700 ">
            {title}
        </div>
        <div className="font-semibold text-2x1 pt-2 text-xl">
            ₹{amount}
        </div>
    </div>
}