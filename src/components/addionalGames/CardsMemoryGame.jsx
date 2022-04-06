import { useState, useEffect } from "react";
import CardMemoryGame from "./CardMemoryGame";
import "../../style/ExtraGames.css";
import bat from "../../assets/img/img1.png";
import batman from "../../assets/img/img2.png";
import joker from "../../assets/img/img3.png";
import catwoman from "../../assets/img/img4.png";
import question from "../../assets/img/img5.png";
import question2 from "../../assets/img/img6.png";
import win from "../../assets/sound/win.mp3";

function CardsMemoryGame({ setExtraCounter }) {
  const [items, setItems] = useState(
    [
      { id: 1, img: bat, stat: "" },
      { id: 1, img: bat, stat: "" },
      { id: 2, img: batman, stat: "" },
      { id: 2, img: batman, stat: "" },
      { id: 3, img: joker, stat: "" },
      { id: 3, img: joker, stat: "" },
      { id: 4, img: catwoman, stat: "" },
      { id: 4, img: catwoman, stat: "" },
      { id: 5, img: question, stat: "" },
      { id: 5, img: question, stat: "" },
      { id: 6, img: question2, stat: "" },
      { id: 6, img: question2, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [done, setDone] = useState(false);

  useEffect(() => {

    let done = items.every(function (item) {
      return item.stat == "correct";
    });
    if (done) {
      setExtraCounter(prev => prev + 1);
      playAudio(win);
      setDone(true);
    }
  }, [items]);

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container container-extra">
      { done && (<span className="message animate__animated animate__delay-1s	animate__fadeOut"> +20 </span>)}
      {items.map((item, index) => (
        <CardMemoryGame
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CardsMemoryGame;
