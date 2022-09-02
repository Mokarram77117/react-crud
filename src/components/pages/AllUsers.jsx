import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_USER_MUTATION } from "../../graphql/Mutations";

import { QUERY_ALL_USERS } from "../../graphql/Queries";
import GoHome from "../GoHome";



 export default function AllUsers() {
  const {  data } = useQuery(QUERY_ALL_USERS);
  const [deleteUser] =useMutation(DELETE_USER_MUTATION);
  const navigate =useNavigate();
  const clickHandler =()=>{
    const id = user._id;
    console.log(id);
    navigate("/update", 
    {
      state:{
          id
          
        }})
  ;}
  
 
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (data) {
      setUser(data.users);
    }
  }, [data]);

  return (
    <>
      <div>
          <Table striped bordered>
            <thead>
              <tr>
              <th> ID</th>
                <th> Name</th>
                <th> Age</th>
                <th> Title</th>
                <th>Action</th>
                </tr>
              </thead>
            {user.map((val) => {
              const {_id, name, age,title} = val;
              return(
                
                <tbody key={val._id}>
                  {
                   _id && name && age && title
                    ? (
                      <tr>
                        <td> {_id}</td>
                        <td> {name}</td>
                        <td> {age}</td>
                        <td> {title}</td>
                        <td>
                                  <Link to={"/read"}>
                                    <Button className="action__btn m-2" 
                                        variant="success" 
                                        value={_id}>
                                                    Read
                                    </Button>
                                </Link>
                       
                        
                                    <Button
                                    className="action__btn m-2" 
                                    variant="info" 
                                    onClick={({id: _id})=> 
                                    clickHandler({id:_id})} >
                                      Edit
                                    </Button>
                          
                                    <Button className="action__btn m-2" 
                                            variant="danger"
                                            onClick={() => {
                                                deleteUser({ variables: { id: _id }, 
                                            _id,
                                            name,
                                            age,
                                            title }) ;}}>Delete</Button>
                                                    
                        </td>
                      </tr>
                    )
                    :""
                  }
                </tbody>
              );
             })
            } 
          </Table>
      </div>
         
          <div>
            <GoHome/>
          </div>
    </>  
  );
}

