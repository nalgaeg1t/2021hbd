const ActiveStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "5%",
  width: "80vw",
  opacity: "1",
  transition: "opacity 1000ms",
};
  
const HiddenStyle = {
  position: "fixed",
  margin: "0px auto",
  left: 0,
  right: 0,
  top: "5%",
  width: "80vw",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 500ms , visibility 500ms",
};

const ContentsContainerStyle = {
  position: "relative",
  left: "0px",
  textAlign: "left",
  padding: "20px",
  backgroundColor: "#f8f8ff",
  borderRadius: "2.5%"
}

const ContentsStyle = {
    lineHeight: "70%",
    fontSize: "70%",
}


const Letter = ({ active, src }) => {
  return(
    <div style={active ? ActiveStyle : HiddenStyle}>
      <div style={ContentsContainerStyle}>
        
        {src.split("\n").map((line, index) =>
          <p key={index} style={ContentsStyle}>{line}</p>)}

      </div>
    </div>
  )
};

export default Letter;