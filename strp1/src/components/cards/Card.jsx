import { Button} from "react-bootstrap";

const Card = ({title, description}) => {
  return (
    <div className="course-card">
        <h1 className="course-card-title">{title}</h1>
        <p>{description}</p>
        <Button className="mx-2">Start Here</Button>
    </div>
  )
}

export default Card