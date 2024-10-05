"use client";
import React from "react";
import style from "../../style/searchHotel.module.css";
import L_DateCalendar from "@/logic/L_DateCalendar";

const DateCalendar = () => {


  return (
    <>
      <div className={style.searchHotel_filter_item_date}>
        <div className={style.searchHotel_conteiner_date}>
          <L_DateCalendar/>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DateCalendar;
