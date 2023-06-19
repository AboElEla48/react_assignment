import React from 'react';
import '../Styles/Cards.css';

const userOutput = (props) => {

  return (
    <div className="Card-App">
      <p>Username: {props.userName}</p>
      <p>I hope i will overwritten!</p>
    </div>
  );

};

export default userOutput;
