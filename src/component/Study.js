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
  <div>
   <h2>The Importance of Good Health in Islam</h2>
   <div>
   {
    study.map(read => <Read key={read.id}
    read={read}
    ></Read> )
   }
   </div>
   <div>
    
   </div>
  
  </div>
 );
};

export default Study;