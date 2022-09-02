import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function GoHome() {
    const navigate =useNavigate();
    function goBack(){
    navigate("/home", {
        replace: true,
    })
};

return(
    <Button className="action__btn" variant="danger" onClick={goBack}>
Go to Home
    </Button>
);
}