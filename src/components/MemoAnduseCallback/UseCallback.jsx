import React, { useCallback, useState } from 'react'

const UseCallback = (() => {
    const [count, setCount] = useState(0);
    const changeVal = useCallback(() => {  //    <--- run when count changed
        setCount(count + 1)
    }, [count],)
    return (
        <>
            <hr></hr>
            <h5>useCallback...</h5>
            <p>Number : {count}</p>
            <button className='btn btn-secondary container' onClick={changeVal}>Change</button>
            <hr></hr>
        </>
    )
})

export default UseCallback