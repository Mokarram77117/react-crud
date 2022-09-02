import { useMutation } from "@apollo/client/react";
import { Button } from "react-bootstrap";
import { DELETE_USER_MUTATION } from "../graphql/Mutations";



export default function DeleteButton({_id}) {
    

    
const [deleteUser] =useMutation(DELETE_USER_MUTATION);

const dltUser =(_id) => {
    deleteUser({
        variables:{id:_id },
    });
    ;};

 
return(
    <Button className="action__btn" variant="danger" onClick={()=>dltUser(_id)}>
Delete
    </Button>
);
}