import React from 'react'

const Child1 = ({ count, setCount }) => {
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Child1