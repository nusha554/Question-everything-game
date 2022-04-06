
import "../../style/Animation.css";

function TryMe({setStartExtra}) {


  const handleClick = () => {
    setStartExtra(true);
  }
  return (
    <div className ="bouncing-text" onClick={handleClick}>
      <div className="t">T</div>
      <div className="r">r</div>
      <div className="y">y</div>
      <div className="m">M</div>
      <div className="e">e</div>
      <div className="shadow"></div>
      <div className="shadow-two"></div>
    </div>
  );
}

export default TryMe;
