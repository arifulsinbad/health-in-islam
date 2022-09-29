import React, { useEffect, useState } from 'react';
import Time from './addTime/Time';
import './Study.css'
import Read from './study/Read';

const Study = () => {
 const [study, setStudy] = useState([]);
 const [time, setTime] = useState([])
 // console.log(study)
 useEffect(() =>{
  fetch('islamic.json')
  .then(res => res.json())
  .then(data => setStudy(data))
 }, [])

const handleAdd = (study) =>{
const newAdd =[...time, study];
setTime(newAdd)
}
const studies = study.filter(x => x.lenght < 4)
// console.log(studies)
let total = 0;
time.forEach(times =>{
total = total + parseFloat(times.time);

})
const times = parseFloat(total);

 return (
  <div className='study-c'>
   <div className='conatiner1'>
   {/* <h2>The Importance of Good Health in Islam</h2> */}
   {
    study.map(read => <Read key={read.id}
    read={read}
    handleAdd={handleAdd}
    ></Read> )
   }
   </div>
   <div className='container2'>
<div className='cart'> 
 <h3>Sinbad Hossain</h3>
 <div className='myInfo'>
  <span>
   <p>53kg</p>
   <small>weight</small>
  </span>
  <span>
   <p>5.3</p>
   <small>Height</small>
  </span>
  <span>
   <p>23yrs</p>
   <small>Age</small>
  </span>
 </div>
 <h4>Add A Break</h4>
</div>

<p>Study Time: {times}min</p>
  {
   studies.map(studi => <Time
   studi={studi}
   ></Time> )
  }

   </div>
  
  </div>
 );
};

export default Study;