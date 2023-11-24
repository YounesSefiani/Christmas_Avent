import { useState } from "react";
import "./calendar.css";
import "../assets/utils.css";
import MovingText from "react-moving-text";
import CalendarCase from "./CalendarCase";
import Modal from "react-modal";
import MovieData from "./MovieData";


function Calendar() {
  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const openModal = (film) => {
    setSelectedFilm(film);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFilm(null);
    setModalOpen(false);
  };

  const handlePrevDay = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleNextDay = () => {
    setCount((prevCount) => Math.min(24, prevCount + 1));
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
              <button className="btn" onClick={() => openModal(MovieData[count - 1])}>
                Découvre ton cadeau
              </button>
            </div>
            <div className="btnAfterNext d-flex justify-content-center align-items-center">
              <button className="btn mr-15" onClick={handlePrevDay}>
                Jour précédent
              </button>
              <button className="btn" onClick={handleNextDay}>
                Jour suivant
              </button>
            </div>
          </div>
          <h3 className="textAlignCenter bgWhite p-5">The Big Team</h3>
        </section>
      </MovingText>

      <Modal 
      isOpen={modalOpen}
      onRequestClose={closeModal}
      >
        {selectedFilm && <CalendarCase {...selectedFilm} />}
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
}

export default Calendar;
