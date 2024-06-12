import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { TopBar } from './components/TopBar'

function App() {
  return (
    <>
    <TopBar/>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <RevenueCard/>
        <RevenueCard/>
        <RevenueCard/>
    </div>
      
    </>
  )
}

export default App
