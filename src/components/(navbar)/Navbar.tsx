"use client";
import { useState } from "react";
import Link from "next/link";
import { FaNfcSymbol } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "../../style/navbar.module.css";

const Navbar: React.FC = () => {
  const [active, isActive] = useState<boolean>(false);

  const eventHandle = () => {
    isActive(!active);
  };

  return (
    <>
      <header className={style.navbar_hearder}>
        <div className={style.navbar_conteiner_logoAndBurger}>
          <div className={style.navbar_conteiner_logo}>
            <Link href="/" className={style.navbar_link_logo}>
              <FaNfcSymbol className={style.navbar_logo} />
            </Link>
          </div>

          <div className={style.navbar_conteiner_burguer} onClick={eventHandle}>
            <RxHamburgerMenu className={style.navbar_burger} />
          </div>
        </div>

        <nav className={active ? `${style.navbar_nav} ${style.isActive}` : style.navbar_nav}>
          <ul className={style.navbar_ul}>
            <li className={style.navbar_li}>
              <Link href="/" className={style.navbar_link}>
                Inicio
              </Link>
            </li>
            <li className={style.navbar_li}>
              <Link href="/Search" className={style.navbar_link}>
                Buscar
              </Link>
            </li>
            <li className={style.navbar_li}>
              <Link href="/Hotels" className={style.navbar_link}>
                Hoteles
              </Link>
            </li>
            <li className={style.navbar_li}>
              <Link href="/Oferts" className={style.navbar_link}>
                Ofertas
              </Link>
            </li>
            <li className={style.navbar_li}>
              <Link href="/MyCount" className={style.navbar_link}>
                Mi cuenta
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
