import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DivStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "80%",
}

const ButtonStyle = {
  margin: "30px",
  zIndex: 1
}
const ButtonContainer = ({ setCount, count, disabled }) => {
  return (
    <div style={DivStyle}>
      <Button
        style={ButtonStyle}
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
        disabled={disabled | count === 0 ? true : false}  
        size="lg"
      >
        Prev    
      </Button>
      
      <Button
        style={ButtonStyle}
        onClick={() => {
          if (count < 12) setCount(count + 1);
        }}
        disabled={disabled | count === 12 ? true : false}  
        size="lg"
      >
        Next
      </Button>
    </div>
  );
}

export default ButtonContainer;