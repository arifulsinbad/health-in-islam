import React from 'react';
import './read.css'
const Read = ({read}) => {
 const {name, img, info, rating, time}=read;
 return (
  <div className='container3'>
   <img src={img} alt="" />
   <div>
    <h4>{name}</h4>
    <p>{info}</p>
   </div>
  </div>
 );
};

export default Read;