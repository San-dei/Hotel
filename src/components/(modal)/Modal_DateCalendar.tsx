import useInitialTime from "@/logic/useInitialTime";
import React from "react";
import Calendar from "react-calendar";
import style from "../../style/(modals)/Modal_DateCalendar.module.css"
import L_ModalDateCalendar from "@/logic/L_ModalDateCalendar";

const Modal_DateCalendar = () => {
  const { exitDate, entryDate } = useInitialTime();

  return (
    <>
      <div className={style.Modal_conteiner}>
        <L_ModalDateCalendar />
        <div className={style.Modal_subconteiner}>
          <div className={style.Modal_allBtn}>
            <button className={style.Modal_btn}>{exitDate}</button>
            <button className={style.Modal_btn}>{entryDate}</button>
          </div>
          <Calendar className={style.Modal_calendar} />
        </div>
      </div>
    </>
  );
};

export default Modal_DateCalendar;
