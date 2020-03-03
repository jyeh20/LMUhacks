import React from 'react';
//import '../App.css';


// props = {item, blah}
function Person(props) {
  return (
    <div className="Person">
      <h1>{props.item.name}</h1>
      <h3 className="hp">{props.item.major}</h3>
      <h3 className="hp">{props.item.year}</h3>
      <h3 className="hp">{props.item.sleep}</h3>
      <h3 className="hp">{props.item.cleanliness}</h3>
      <h3 className="hp">{props.item.interests}</h3>
      <h3 className="hp">{props.item.car}</h3>
      <h3 className="hp">{props.item.sex}</h3>
      <h3 className="hp">{props.item.friendliness}</h3>
      <h3 className="hp">{props.item.smoke}</h3>
      <h3 className="hp">{props.item.drink}</h3>
      <h3 className="hp">{props.item.noise}</h3>
      <h3 className="hp">{props.item.needcar}</h3>

    </div>
  );
}

export default Person;
