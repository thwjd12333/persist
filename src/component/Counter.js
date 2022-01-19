// import { useDispatch, useSelector } from 'react-redux'
// import { decreaseNum, increaseNum } from '../reducers/counter'
import React from 'react'

const Counter = props => {
  // const count = useSelector(state => state.num)
  // const dispatch = useDispatch()
  //
  // return (
  //   <div>
  //     <h1>COUNTER</h1>
  //     <h4> count : {count} </h4>
  //     <br />
  //     <button onClick={() => dispatch(increaseNum())}> + </button>
  //     <button onClick={() => dispatch(decreaseNum())}> - </button>
  //   </div>
  // )
  const { num, increase, decrease } = props

  const handleIncrease = () => {
    increase()
  }
  const handleDecrease = () => {
    decrease()
  }

  return (
    <>
      <div>{num}</div>
      <div>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
      </div>
    </>
  )
}

export default Counter
