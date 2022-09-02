import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { UPDATE_USER_MUTATION } from "../../graphql/Mutations";
import { QUERY_ALL_USERS } from "../../graphql/Queries";
import classes from "../../styles/Create.module.css";
import Form from "../Form";
import GoHome from "../GoHome";
import TextInput from "../TextInput";



export default function Update(props) {
//   const location =useLocation();
  
//   // console.log(location.state);
// const state =props.location;
//    console.log(state);
   const _id= "";
 
  const {  data } = useQuery(QUERY_ALL_USERS);
  const [updateUser] =useMutation(UPDATE_USER_MUTATION);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (data) {
      setUser(data.users);
    }
  }, [data]);
  const oneUser = user.filter(() => user._id === _id);

    const [name, setName] = useState(oneUser.name);
    const [age, setAge] = useState(oneUser.age);
    const [title, setTitle] = useState(oneUser.title);
    
    
  
    const editName = (e) => {

      setName(e.target.value);
      const edited_name = name;
      oneUser.name = edited_name;
    };
  
    const editAge = (e) => {
      setAge(e.target.value);
      const edited_age = age;
      oneUser.age = edited_age;
      console.log(edited_age);
    };
    const editTitle = (e) => {
      setTitle(e.target.value);
      const edited_title = title;
      oneUser.title = edited_title;
    };
    const editUser = (e) => {
      updateUser({
        variables: {id:_id,updateUserInput: {
          _id,
          name,
          age: Number(age),
          title,}
        },
      });
    };
    
    
    return(
            <><h1>Update a User</h1><div className="column">
            <Form className={`${classes.create}`}>
              
                
                <p>Name</p>
                <TextInput
                    type="text"
                    placeholder="Enter Name"
                    onChange={editName}
                    value={name}
                    icon=" " />

                <p>Age</p>
                <TextInput type="number" placeholder="Enter age"
                onChange={editAge} value={age}
                  icon=" " />

                  <p>Title</p>
                <TextInput type="text" placeholder="Enter updated title" onChange={editTitle} value={title}
                  icon=" " />

                
            </Form>
            <Button onClick={editUser}>Update User</Button>
        </div>
        
        <div><GoHome/></div>
        </>
        );
}