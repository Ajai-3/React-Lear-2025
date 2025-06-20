import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default UseState