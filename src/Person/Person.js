import React from 'react';
import './Person.css';

const person = ( props ) => {

      return (
      <div className="Person">    
       <p onClick={props.click}>Hi am {props.name} and I am {props.age}  year old.</p>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
      )
};
export default person;
