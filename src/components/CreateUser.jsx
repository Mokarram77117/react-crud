import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    const navigate =useNavigate();
    function goBack(){
    navigate("/create", {
        replace: true,
    })
};

return(
    <Button className="action__btn" variant="danger" onClick={goBack}>
Create a User
    </Button>
);
}