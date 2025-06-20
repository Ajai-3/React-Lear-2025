import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UseState from './components/UseState'
import LiftStateUp from './pages/LiftStateUp'
import StopWatch from './pages/StopWatch'
import Fetch from './pages/Fetch'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/useState' element={<UseState />} />
      <Route path='/liftStateUp' element={<LiftStateUp />} />
      <Route path='/stopWatch' element={<StopWatch />} />
      <Route path='/fetch' element={<Fetch />} />
      <Route path='/drop' element={< />} />


    </Routes>
    </>
  )
}

export default App