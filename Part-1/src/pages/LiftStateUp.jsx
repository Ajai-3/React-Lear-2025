import React, { useState } from 'react'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'

const LiftStateUp = () => {
    const [count, setCount] = useState(0)
  return (
    <div>LiftStateUp
        <Child1 count={count} setCount={setCount} />

        <Child2 count={count} />
    </div>
  )
}

export default LiftStateUp