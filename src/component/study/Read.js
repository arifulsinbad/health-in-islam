import React from 'react';
import './read.css'
const Read = ({read}) => {
 const {name, img, info, rating, time}=read;
 return (
  <div className='container3'>
   <img src={img} alt="" />
   <div className='title'>
    <h4>{name}</h4>
    <p>{info}</p>
    <h5>Daily Read: {rating}min</h5>
    <h5>Time Required: {time}min</h5>
   </div>
    <button>Add to List</button>
  </div>
 );
};

export default Read;