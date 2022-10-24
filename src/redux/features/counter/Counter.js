import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './counterSlice'

const Counter = () => {

  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counter)

  const handleInc = () => {
    dispatch(increment())
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={handleInc}>
          +
        </button>
        <button onClick={handleDec}>
          -
        </button>

      </div>
      <button onClick={handleReset}>reset</button>
    </>
  )
}

export default Counter