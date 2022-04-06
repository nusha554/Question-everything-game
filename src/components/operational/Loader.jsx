import "../../style/Loader.scss";
import "animate.css";

function Loader({ playerName }) {
  return (
    <div className="container">
      <span className="greeting animate__animated animate__fadeInTopLeft animate__repeat-1 animate__slow">
        {" "}
       So, {playerName}. Are you ready?{" "}
      </span>
      <div className="loader">
        <div className="pac"></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <span className="greeting-second animate__animated animate__fadeInBottomRight animate__repeat-1 animate__slow">
        {" "}
        Riddle me this.{" "}
      </span>
    </div>
  );
}

export default Loader;
