/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import { Main } from "../../components/Main";
import Link from "next/link";
import {
  portfolioCont,
  title,
  btn,
  worksList,
  worksItem,
  itemCont,
  worksLink,
} from "./index.module.css";
import { useEffect } from "react";
import setAnimation from "../../js/gsap";

export default function Portfolio({ posts }) {
  useEffect(() => {
    setAnimation(); // Только после того, как загрузилась страница, запускаем функцию для анимации gsap.
  }, []);

  return (
    <Main>
      <div className="container">
        <div className={portfolioCont}>
          <h1 className={title}>Our Portfolio</h1>
          <button className={btn} onClick={() => Router.push("/")}>
            <img
              src="./Portfolio/back.svg"
              alt="asdsad"
              width="40"
              height="40"
            />
          </button>
          <ul className={`card-set ${worksList}`}>
            {posts.map((post) => (
              <li
                key={post.id}
                className={`card-set-item gs_reveal ${worksItem}`}
              >
                <div className={itemCont}>
                  <Link href={`/portfolio/${post.id}`}>
                    <a>
                      <img
                        src={`./Portfolio/${post.image}`}
                        alt={`${post.title}`}
                      />
                    </a>
                  </Link>
                  <p>{post.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
}

Portfolio.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/portfolio");
  const posts = await response.json();

  return {
    posts,
  };
};
