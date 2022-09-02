import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function ViewUsers() {
    const navigate =useNavigate();
    function viewAllUsers(){
    navigate("/allusers", {
        replace: true,
    })
};

return(
    <Button className="action__btn" variant="danger" onClick={viewAllUsers}>
All Users
    </Button>
);
}