import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, link }) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate("/spanisha1");
    };
    return (
      <div className="course-card">
        <h1 className="course-card-title">{title}</h1>
        <p>{description}</p>
        <Button className="mx-2" onClick={handleClick}>
          Start Here
        </Button>
      </div>
    );
  }
;

export default Card;
