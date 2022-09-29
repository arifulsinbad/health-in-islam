import React from 'react';
import './read.css'
const Read = ({read}) => {
 const {name, img, info, rating, time}=read;
 return (
  <div className='container'>
   <img src={img} alt="" />
  </div>
 );
};

export default Read;