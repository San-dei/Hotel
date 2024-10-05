import React from "react";
import { SlPlane } from "react-icons/sl";
import style from "../../../style/searchHotel.module.css";
import SearchInput from "@/components/(searchHotel)/SearchInput";
import DateCalendar from "@/components/(searchHotel)/DateCalendar";

const SearchHotel = () => {


  return (
    <>
      <div className={style.searchHotel_container}>
        <div className={style.searchHotel_container_presentation}>
          <div className={style.searchHotel_title}>ENCONTRÁ TU HOTEL</div>
          <p className={style.searchHotel_description}>
            Elegí entre más de 600.000 alojamientos... Y pagalos en cuotas sin
            interés!
          </p>
        </div>

        <div className={style.searchHotel_container_filter}>
          <div className={style.searchHotel_filter}>
            <SearchInput/>

            <DateCalendar/>

            <div className={style.searchHotel_filter_item}>
              <div className={style.searchHotel_label}>Habitaciones</div>
              <button className={style.searchHotel_button}>
                2 Adultos, 1 Habitación
              </button>
            </div>

            <div className={style.searchHotel_filter_item}>
              <button className={style.searchHotel_button_search}>Buscar</button>
            </div>
          </div>
        </div>
        <div className={style.searchHotel_extra_options}>
          <input type="checkbox" className={style.searchHotel_check}/> <SlPlane /> Añadir vuelo
          <div className={style.searchHotel_discount}>ahorra hasta un 20%</div>
        </div>
      </div>
    </>
  );
};

export default SearchHotel;
