import React from "react";

const Nomination = (props) => {
  return (
    <div>
      <p>
        {props.title} | id: {props.id}
      </p>
      <button onClick={() => props.delete(props.id)}>Delete</button>
    </div>
  );
};

export default Nomination;
