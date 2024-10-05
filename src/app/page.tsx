import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";
import style from "../style/(pages)/page.module.css";

export default function Home() {
  return (
    <>
      <div className={style.home_conteiner}>
        <div className={style.home_background}>
          <div className={style.home_conteiner_search}>
            <div className={style.conteiner_describe}>
              <div className={style.home_describe}>explora!</div>
              <div className={style.home_describe}>descubre!</div>
              <div className={style.home_describe}>vive!</div>
            </div>

            <Link href="/searchHotel">
              <button className={style.home_btn_search}>Buscar Hoteles</button>
            </Link>

            <FaChevronCircleDown className={style.home_btn_down} />
          </div>
        </div>
      </div>
    </>
  );
}
