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
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center minHeight ">
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
          <MovingText
            type="bounce"
            duration="5000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="none"
          >
            <img
              className="imgAnim mb-10"
              src="https://plus.unsplash.com/premium_photo-1661292089523-a74324a5e57e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </MovingText>

          <h1 className="textAlignCenter bgWhite p-10">
            Advent Christmas Films
          </h1>
          <div className="content flex-column d-flex justify-content-center align-items-center flex-fill ">
            <h1 className="textAlignCenter contentTitle">
              Day <br /> {count}
            </h1>
            <div>
              <button
                className="btn"
                onClick={() => openModal(MovieData[count - 1])}
              >
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
        style={{ background: "red" }}
        isOpen={modalOpen}
        onRequestClose={closeModal}
      >
        {selectedFilm && <CalendarCase {...selectedFilm} />}
        <button className="btnModal" onClick={closeModal}>
          X
        </button>
      </Modal>
    </div>
  );
}

export default Calendar;
