"use client";
import React from "react";
import useSearchCity from "@/api/useSearchCity";
import { FiMapPin } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
import { City } from "@/interface/useSearchCity";
import style from "../../style/searchHotel.module.css";

const SearchInput = () => {
  const [isSearch, setIsSearch] = useState<string>("");
  const { place } = useSearchCity(isSearch);

  const eventHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearch(e.target.value);
  };

  const result: City[] =
    isSearch !== "" && Array.isArray(place)
      ? place.filter(
          (item) =>
            item.country?.toLowerCase().includes(isSearch.toLowerCase()) ||
            item.city_name?.toLowerCase().includes(isSearch.toLowerCase()) ||
            item.region?.toLowerCase().includes(isSearch.toLowerCase()) ||
            item.dest_type?.toLowerCase().includes(isSearch.toLowerCase()) ||
            item.name?.toLowerCase().includes(isSearch.toLowerCase())
        )
      : [];

  return (
    <>
      <div className={style.searchHotel_filter_item}>
        <div className={style.searchHotel_label}>Donde ir</div>
        <FiMapPin className={style.searchHotel_reacticon_map} />
        <input
          onChange={eventHandle}
          value={isSearch}
          placeholder="Provincia, ciudad, región u hotel"
          className={style.searchHotel_input}
        />
      </div>
      {result.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
};

export default SearchInput;
