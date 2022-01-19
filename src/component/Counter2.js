import React from 'react'

const Counter2 = props => {
  const { count, increase2, decrease4 } = props

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increase2}>+</button>
      </div>
      <div>
        <button onClick={decrease4}>-</button>
      </div>
    </>
  )
}
export default Counter2
