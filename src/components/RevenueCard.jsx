

export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-gray-200 rounded-lg shadow-xl p-9">
        <div className="font-thin text-gray-700">
            {title}
        </div>
        <div className="lg:flex justify-between pt-2">
            <div className="font-semibold text-2xl pb-2">
              ₹{amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer font-medium ">
                <div className="text-blue-700 underline">
                 {orderCount} order(s)
                </div>
                <div>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
            </div> : null}
        </div>
    </div>
}