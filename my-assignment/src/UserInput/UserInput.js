import React from 'react';

const userInput = (props) => {
  return (
    <input
      type='text'
      placeHolder ={props.userName}
      onChange={props.changeProp}/>
  );
};

export default userInput;
