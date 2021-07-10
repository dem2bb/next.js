/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  socialList,
  socialItem,
  headerCont,
  headerNav,
  navItem,
} from "./Header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={headerCont}>
          <ul className={socialList}>
            <li className={socialItem}>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className={socialItem}>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li className={socialItem}>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <img className="header-logo" src="./Header/logo.svg" alt="asdsad" />
          <nav className={headerNav}>
            <Link href={"/"}>
              <a className={navItem}>Home</a>
            </Link>
            <Link href={"/portfolio"}>
              <a className={navItem}>Portfolio</a>
            </Link>
            <Link href={"/slider"}>
              <a className={navItem}>NukaCarousel</a>
            </Link>
            <Link href={"/lightgallery"}>
              <a className={navItem}>LightGallery</a>
            </Link>
            <Link href={"/formik"}>
              <a className={navItem}>Formik</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
