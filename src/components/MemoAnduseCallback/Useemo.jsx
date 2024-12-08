
import React, { memo, useMemo } from 'react';
import { useState } from 'react';
const WithoutMemo = () => {   //  <------ Without using useMemo
    const [count, setcount] = useState(0);
    const expensiveCalculation = () => {
        let num = 0;
        for (let i = 0; i < 100000000; i++) {
            num += i;
        }
        return num;
    }
    let result = expensiveCalculation();
    const increase = () => {
        setcount(count + 1)
    }
    return (
        <>
            <p>Expensive calculation value : {result}</p>
            <p>count : {count}</p>
            <button className='btn btn-secondary container' onClick={increase}>increase</button>
        </>
    )
}
const Without = React.memo(WithoutMemo);   


function Useemo() {    
    const [first, setfirst] = useState(0);
    const [text, settext] = useState("First");
    const result = useMemo(() => {             //    <------ using useMemo
        let expval = 0;
        for (let a = 0; a < 100000000; a++) {
            expval += 1;
        }
        return (expval);
    }, []);
    // const result = exo();
    const increase = () => {
        setfirst(first + 1)
    }
    return (
        <>
            <hr />
            <h5>useMemo</h5>
            <h6>with useMemo</h6>
            <p>first value : {first}</p>
            <p>Text : {text}</p>
            <p>Expensive calculation value : {result}</p>
            <button className='btn btn-secondary container' onClick={increase}>increase num</button>
            <br></br>
            <input onChange={(e) => { settext(e.target.value) }} type="text" className=" mt-2 mb-2 form-control"  placeholder="enter something here..."/>
            <hr />
            <h6>without useMemo</h6>
            <Without />
            <p></p>
            <hr />
        </>
    )
}

export default Useemo