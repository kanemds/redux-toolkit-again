import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {

  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counter)
  const [amount, setAmount] = useState(0)

  const addValue = Number(amount) || 0

  const resetAll = () => {
    setAmount(0)
    dispatch(reset())
  }

  const handleInc = () => {
    dispatch(increment())
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleAddAmount = (number) => {
    dispatch(incrementByAmount(addValue))
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
        <button onClick={handleReset}>reset</button>
      </div>

      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleAddAmount}>Add Amount</button>
      <div>
        <button onClick={resetAll}>Reset All</button>
      </div>

    </>
  )
}

export default Counter