import React, { useState } from 'react'

const Comp = React.memo(() => {  //  <-----React.memo
  return (
    <>
      <p>Child Component Function</p>
    </>
  )
})

const Memo = () => {
  const [count, setCount] = useState(0);
  const changeVal = () => {
    setCount(count + 1)
  }
  return (
    <>
      <hr></hr>
      <h5>React.memu...</h5>
      <p>Number : {count}</p>
      <Comp />
      <button className='btn btn-secondary container' onClick={changeVal}>Change</button>
      <hr></hr>
    </>
  )
}

export default Memo