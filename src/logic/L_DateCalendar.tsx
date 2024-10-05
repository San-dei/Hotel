import React, { useState } from "react";
import useInitialTime from "./useInitialTime";
import style from "../style/searchHotel.module.css";
import Modal_DateCalendar from "@/components/(modal)/Modal_DateCalendar";

const L_DateCalendar = () => {
  const { exitDate, entryDate } = useInitialTime();
  const [toggleButton, setToggleButton] = useState<boolean>(false);

  const activeDate = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <>
      <div className={style.searchHotel_dates}>
        <div className={style.searchHotel_label}>Entrada</div>
        <button className={style.searchHotel_button_date} onClick={activeDate}>
          {entryDate}
        </button>
      </div>
      <div className={style.searchHotel_dates}>
        <div className={style.searchHotel_label}>Salida</div>
        <button className={style.searchHotel_button_date} onClick={activeDate}>
          {exitDate}
        </button>
      </div>
      {toggleButton && <Modal_DateCalendar activeDate={activeDate} toggleButton={toggleButton}/>}
    </>
  );
};

export default L_DateCalendar;
