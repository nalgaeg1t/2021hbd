// https://daniel-lundin.github.io/react-dom-confetti/
import Confetti from 'react-dom-confetti'; 

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: "200",
  dragFriction: "0.21",
  duration: 1500,
  stagger: 3,
  width: "5px",
  height: "10px",
  perspective: "1000px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const DivStyle = {
  display: "inline-block",
  position: "fixed",
  top: "40%"
}

const ConfettiContainer = ({ active }) => {
  return (
    <div style={DivStyle}>
      <Confetti active={ active } config={ config } />
    </div>
  );
};

export default ConfettiContainer;