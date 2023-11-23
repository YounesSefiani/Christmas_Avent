import "./calendar.css";
import "../assets/utils.css";
import MovingText from "react-moving-text";
import { useState } from "react";

function Calendar() {
  const [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1);
  }
  if (count > 24) {
    setCount(24);
  }
  return (
    <div className="d-flex justify-content-center align-items-center minHeight ">
      <MovingText
        type="flipFromLeftToCenter"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <section className="calendar d-flex flex-column container">
          <h1 className="textAlignCenter bgWhite p-10">
            Advent Christmas Films
          </h1>
          <div className="content flex-column d-flex justify-content-center align-items-center flex-fill ">
            <h1 className="textAlignCenter contentTitle">
              Day <br /> {count}
            </h1>
            <div>
              <button className="btn">Découvre ton cadeau</button>
            </div>
            <div className="btnAfterNext d-flex justify-content-center align-items-center">
              <button className="btn mr-15" onClick={() => setCount(count - 1)}>
                Jour précédent
              </button>
              <button className="btn" onClick={() => setCount(count + 1)}>
                Jour suivant
              </button>
            </div>
          </div>
          <h3 className="textAlignCenter bgWhite p-5">The Big Team</h3>
        </section>
      </MovingText>
    </div>
  );
}

export default Calendar;
