import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { CREATE_USER_MUTATION } from "../../graphql/Mutations";
import classes from "../../styles/Create.module.css";
import Form from "../Form";
import GoHome from "../GoHome";
import TextInput from "../TextInput";




export default function Create() {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  

  const createName = (e) => {
    setName(e.target.value);
    
  };

  const createAge = (e) => {
    setAge(e.target.value);
    
  };

  const createTitle = (e) => {
    setTitle(e.target.value);
  };

  const [createUser] = useMutation(CREATE_USER_MUTATION);

  const addUser = (e) => {
    e.preventDefault();
    createUser({
      variables: { createUserInput: {
        name,
        age: Number(age),
        title,}
      },
    });
  };

    
    
    return(
        <div className="column"><h1>Create a User</h1><div className="column">
            <Form className={`${classes.create}`}>
                <p>Name</p>
                <TextInput
                    type="text"
                    placeholder="Enter Name"
                    onChange={createName}
                    value={name}
                    icon=" " />

                <p>Age</p>
                <TextInput type="number" placeholder="Enter age" onChange={createAge} value={age} icon=" " />

                <p>Title</p>
                <TextInput type="text" placeholder="Enter title" onChange={createTitle} value={title} icon=" " />

                <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary" onClick={addUser}>
                  Create
                </Button>
                <GoHome/>
                </Stack>
            </Form>
        </div>
         
        </div>
    );
}