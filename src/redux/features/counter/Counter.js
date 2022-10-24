import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {

  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counter)

  const handleInc = () => {
    dispatch(increment())
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={handleInc}>
          +
        </button>
      </div>
      <div>
        <button onClick={handleDec}>
          -
        </button>
      </div>
    </>
  )
}

export default Counter