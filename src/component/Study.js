import React, { useEffect, useState } from 'react';
import Time from './addTime/Time';
import { addToDb, getStore } from './addToDb/fakeDb';
import './Study.css'
import Read from './study/Read';

const Study = () => {
 const [study, setStudy] = useState([]);
 const [time, setTime] = useState([])
 const [add, setAdd] = useState([])
 

//  console.log(add)
 const timeSet = [
  {id:'1w2wsf', time:10},
  {id:'1w2wsf', time:20},
  {id:'1w2wesf', time:30},
  {id:'1w2sf', time:40}
]
 useEffect(() =>{
  fetch('islamic.json')
  .then(res => res.json())
  .then(data => setStudy(data))
 }, [])
 useEffect(()=>{
  const storeTime = getStore()
  console.log(storeTime)
 }, [])

const handleAdd = (study) =>{
const newAdd =[...time, study];
setTime(newAdd)
}
const handleTime = (timeSet)=>{
const newTime = [...add, timeSet]
setAdd(newTime)
getStore(timeSet.id)

}
let set = 0;
add.forEach(t =>{
set = t.time
})
const modal = ()=>{
  alert('ok complete')
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
 
   {
    study.map(read => <Read key={read.id}
    read={read}
    handleAdd={handleAdd}
    ></Read> )
   }

  <div>
  <div>
    <h4>How does react work?</h4>
    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
   </div>
   <div>
<h4>Difference between props and state in react ?</h4>
<p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
   </div>
   <div>
    <h4>What is the useEffect in React?</h4>
    <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
   </div>
  </div>
 
   </div>
   <div className='container2'>
<div className='cart'> 
 <h3>Sinbad Hossain</h3>
 <p className='small'>Dhaka,Bangladesh</p>
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
 <div className='addBreak'>
 {
   timeSet.map(studi => <Time
   studi={studi}
   handleTime={handleTime}
   ></Time> )
  }
 
 </div>

 <div>
  <h4>Study Details</h4>
 <h5>Study Time: {times}min</h5>
 <h5>Break Time: {set}min</h5>
 <button onClick={ ()=> modal()}>Activity Completed</button>

 </div>


</div>




   </div>
  
  </div>
 );
};

export default Study;