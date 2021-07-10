/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Main } from "../../components/Main";

console.log(useRouter);

export default function Post({ post }) {
  return (
    <Main>
      <div className="container">
        <h2>{post.title}</h2>
        <img src={`../Portfolio/${post.image}`} alt={`${post.title}`} />
        <p>Сложность: {`${post.complexity}` + "/" + "10"}</p>
        <p>Сроки: {`${post.timing}` + " " + "дней"}</p>
      </div>
    </Main>
  );
}

Post.getInitialProps = async (context) => {
  console.log(context);
  console.log(context.query);
  const response = await fetch(
    `http://localhost:4200/portfolio/${context.query.id}`
  );
  const post = await response.json();

  return {
    post,
  };
};
