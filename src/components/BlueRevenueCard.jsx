

export const BlueRevenueCard = ({
    title,
    amount,
    ordereCount,
    nextPayment,
    time
}) => {
    return <div className="bg-cyan-700 rounded-lg shadow-xl p-5">
        <div className="font-thin text-white">
            {title}
        </div>
        <div className="lg:flex justify-between text-white-800 pt-2  ">
            <div className="text-white text-xl font-semibold text-2x1 pr-2">
              ₹{amount}
            </div>
            {ordereCount ? <div className="flex text-bs cursor-pointer font-medium text-white"> 
                <div className="text-white-800 underline">
                    {ordereCount} order(s)
                </div>
                <div>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div> : null}
        </div>
        <div className="flex bg-cyan-900 rounded-lg justify-between mt-5">
                <div className="font-thin text-gray-700 text-white">
                    {nextPayment}
                </div>
                <div className="font-thin text-gray-700 text-white">
                    {time}
                </div>
            </div>
    </div>
}