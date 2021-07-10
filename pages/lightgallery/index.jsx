/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { useEffect } from "react";
import HeadPage from "../../components/HeadPage";
import { Main } from "../../components/Main";

import LightGallery from "lightgallery/react"; // в модулях отдельная папка с компонентом для реакта
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <Main>
      <div className="gallery-container">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
          <a href="./Gallery/3.jpeg">
            <img alt="Proverka" src="./Gallery/3.jpeg" width="500" />
          </a>
          <a href="./Gallery/4.jpeg">
            <img alt="Proverka2" src="./Gallery/4.jpeg" width="500" />
          </a>
          <a href="./Gallery/5.jpeg">
            <img alt="Proverka" src="./Gallery/5.jpeg" width="500" />
          </a>
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
          <a href="./Gallery/3.jpeg">
            <img alt="Proverka" src="./Gallery/3.jpeg" width="500" />
          </a>
          <a href="./Gallery/4.jpeg">
            <img alt="Proverka2" src="./Gallery/4.jpeg" width="500" />
          </a>
          <a href="./Gallery/5.jpeg">
            <img alt="Proverka" src="./Gallery/5.jpeg" width="500" />
          </a>
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
          <a href="./Gallery/3.jpeg">
            <img alt="Proverka" src="./Gallery/3.jpeg" width="500" />
          </a>
          <a href="./Gallery/4.jpeg">
            <img alt="Proverka2" src="./Gallery/4.jpeg" width="500" />
          </a>
          <a href="./Gallery/5.jpeg">
            <img alt="Proverka" src="./Gallery/5.jpeg" width="500" />
          </a>
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
          <a href="./Gallery/3.jpeg">
            <img alt="Proverka" src="./Gallery/3.jpeg" width="500" />
          </a>
          <a href="./Gallery/4.jpeg">
            <img alt="Proverka2" src="./Gallery/4.jpeg" width="500" />
          </a>
          <a href="./Gallery/5.jpeg">
            <img alt="Proverka" src="./Gallery/5.jpeg" width="500" />
          </a>
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
          <a href="./Gallery/3.jpeg">
            <img alt="Proverka" src="./Gallery/3.jpeg" width="500" />
          </a>
          <a href="./Gallery/4.jpeg">
            <img alt="Proverka2" src="./Gallery/4.jpeg" width="500" />
          </a>
          <a href="./Gallery/5.jpeg">
            <img alt="Proverka" src="./Gallery/5.jpeg" width="500" />
          </a>
          <a href="./Gallery/1.jpg">
            <img alt="Proverka" src="./Gallery/1.jpg" width="500" />
          </a>
          <a href="./Gallery/2.jpeg">
            <img alt="Proverka2" src="./Gallery/2.jpeg" width="500" />
          </a>
        </LightGallery>
      </div>
    </Main>
  );
}
