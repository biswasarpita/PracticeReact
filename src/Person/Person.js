import React from 'react';
const Person  = (props) => {
  return (
    <div className = "person">
    <p>Hi, My name is {props.name}, I am {props.age} years old!!</p>
    </div>
  )
};
export default Person