import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function ReadButton() {
    const navigate =useNavigate();
    function readButton(){
    navigate("/read/*", {
        replace: true,
    })
};

return(
    <Button className="action__btn" variant="success" onClick={readButton}>
Read
    </Button>
);
}