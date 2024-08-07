import { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'
import { RevenueCard2 } from './components/Revenuecard2'
import { BlueRevenueCard } from './components/BlueRevenueCard'
import { LeftBar } from './components/LeftBar'

function App() {
  return <div className='flex'>

    <div className='pt-2'>
      <LeftBar />
    </div>

    <div className='lg:flex flex-wrap gap-2 flex-grow justify-around items-stretch '>

      <div className='md:flex-2 lg:p-1 flex-1 max-w-xs '> 
        <BlueRevenueCard  title={"Next Payout"} amount={"2,312.23"} ordereCount={23} nextPayment={"Next Payment Date :"} time={"Today, 4:00PM"} />
      </div>

      <div className='md:flex-2 lg:p-1 flex-1 max-w-xs '>
        <RevenueCard  title={"Amount Pending"} amount={"92,312.20"} orderCount={13} /> 
      </div>

      <div className='md:flex-2 lg:p-1 flex-1 max-w-xs '>
        <RevenueCard2  title={"Amount Pending"} amount={"23,92,312.19"}/>
      </div>

    </div> 
  </div>
}

export default App
