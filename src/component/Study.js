import React, { useEffect, useState } from 'react';
import './Study.css'
import Read from './study/Read';

const Study = () => {
 const [study, setStudy] = useState([]);
 // console.log(study)
 useEffect(() =>{
  fetch('islamic.json')
  .then(res => res.json())
  .then(data => setStudy(data))
 }, [])


 return (
  <div className='study-c'>
   <div className='conatiner1'>
   {/* <h2>The Importance of Good Health in Islam</h2> */}
   {
    study.map(read => <Read key={read.id}
    read={read}
    ></Read> )
   }
   </div>
   <div className='container2'>

   </div>
  
  </div>
 );
};

export default Study;