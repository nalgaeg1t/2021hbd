import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActiveStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "30%",
  width: "80vw",
  opacity: "1",
  transition: "opacity 500ms",
  zIndex: 1
}

const HiddenStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "30%",
  width: "80vw",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 500ms , visibility 500ms",
  zIndex: 1
}

const SecretKeyForm = ({ setKey, active }) => {
  return (
    <div style={active ? HiddenStyle : ActiveStyle}>
      <Form>
        <Form.Control
          onChange={e => {
            if (!active) setKey(e.target.value);
          }}
          size="lg"
          placeholder="Enter Key"  
        />
      </Form>
    </div>
  );
}

export default SecretKeyForm;