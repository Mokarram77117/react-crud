import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Read = ({_id}) => {

 
  console.log(_id);
//   const user = users.filter((user) => user._id === _id);

  return (
    <div className="read">
    {/* //   <h1>ID: {user[0].id}</h1>
    //   <h1>Name: {user[0].name}</h1>
    //   <h1>Position: {user[0].position}</h1>
 <h1>Salary: {user[0].salary} /= </h1> */}
      <Link to="/">
        <Button variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;