import { useState } from "react";
import "./DiscoverShop.scss";
import img1 from "../../images/mobile-image-hero-1.jpg";
import img2 from "../../images/mobile-image-hero-2.jpg";
import img3 from "../../images/mobile-image-hero-3.jpg";
import arrowButton from "../../images/icon-arrow.svg";
import angleLeft from "../../images/icon-angle-left.svg";
import angleRight from "../../images/icon-angle-right.svg";
import { caruselData } from "../MainCarusel";

const DiscoverShop = () => {
  const [counter, setCounter] = useState<number>(0);
  const [motionSlide, setMotion] = useState<boolean>(false);

  function handleCarusel(action: string) {
    if (action === "decrement") {
      if (counter === 0) {
        setCounter(caruselData.length - 1);
      } else {
        setCounter(counter - 1);
      }
    } else if (counter < caruselData.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <main id="main">
      <img
        className={motionSlide ? "hidden" : "visible"}
        id="main_carusel"
        src={caruselData[counter].img}
        alt="image"
      />

      <div id="main_descr">
        <div id="main_descr_buttons">
          <button
            id="main_decrement"
            onClick={() => handleCarusel("decrement")}
          >
            <img src={angleLeft} alt="angle_left" />
          </button>
          <button
            id="main_increment"
            onClick={() => handleCarusel("increment")}
          >
            <img src={angleRight} alt="angle_right" />
          </button>
        </div>
        <p id="carusel_title">{caruselData[counter].title}</p>
        <p id="carusel_more">{caruselData[counter].more}</p>
        <div id="carusel_button_shop">
          <p>shop now</p>
          <img src={arrowButton} alt="arrow" />
        </div>
      </div>
    </main>
  );
};

export default DiscoverShop;
