import React, { useState } from 'react'
import Memo from "./MemoAnduseCallback/Memo";
import UseCallback from './MemoAnduseCallback/UseCallback';
import Useemo from './MemoAnduseCallback/Useemo';



function MemoAndCallback() {
 
  return (
    <>
      <Memo/>
      <UseCallback/>
      <Useemo/>
    </>
  )
}

export default MemoAndCallback