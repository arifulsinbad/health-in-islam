import React from 'react';
import './time.css'
const Time = ({studi,handleTime}) => {
 // console.log(studi.time)
 return (
  <div >
   <button onClick={()=> handleTime(studi)} className='add'>{studi.time}min</button>
  </div>
 );
};

export default Time;