import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActiveStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "30%",
  width: "80vw",
  opacity: "1",
  transition: "opacity 1000ms",
  zIndex: 0
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
  zIndex: 0
}

const Picture = ({ active, src }) => {
  return (
    <div style={active ? ActiveStyle : HiddenStyle}>
        <Figure>
        <Figure.Image 
            src={src}
            style={{borderRadius: '1%'}}
            alt="PIC"
        />
        </Figure>
    </div>
  )
};

export default Picture;
