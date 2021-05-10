const ActiveStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "40%",
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
  top: "40%",
  width: "80vw",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 500ms , visibility 500ms",
  zIndex: 0
}

const Message = ({ active, src }) => {
  return (
    <div style={active ? ActiveStyle : HiddenStyle}>
        <p>{src}</p>
    </div>
  )
};

export default Message;
