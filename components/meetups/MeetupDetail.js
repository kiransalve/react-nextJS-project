import React from "react";

const MeetupDetail = (props) => {
  return (
    <>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </>
  );
};

export default MeetupDetail;
