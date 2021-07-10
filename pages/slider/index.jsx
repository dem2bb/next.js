/* eslint-disable @next/next/no-img-element */
import image from "next/image";
import Carousel from "nuka-carousel";
import HeadPage from "../../components/HeadPage";
import { Main } from "../../components/Main";

export default function Slider() {
  return (
    <Main>
      <HeadPage />
      <div className="container slider-cont">
        <h2>Nuka Carousel</h2>
        <Carousel
          width="1200px"
          slidesToShow={3}
          cellAlign="center"
          cellSpacing={50}
        >
          <img src="./Portfolio/itfest.png" alt="Proverka" />
          <img src="./Portfolio/megafoxy.png" alt="Proverka" />
          <img src="./Portfolio/itfest.png" alt="Proverka" />
          <img src="./Portfolio/megafoxy.png" alt="Proverka" />
          <img src="./Portfolio/itfest.png" alt="Proverka" />
          <img src="./Portfolio/megafoxy.png" alt="Proverka" />
          <img src="./Portfolio/itfest.png" alt="Proverka" />
          <img src="./Portfolio/megafoxy.png" alt="Proverka" />
        </Carousel>
      </div>
    </Main>
  );
}

// var React = require("react");
// var createReactClass = require("create-react-class");

// var Decorators = createReactClass({
//   render() {
//     return <button onClick={this.props.previousSlide}>Previous Slide</button>;
//   },
//   position: "CenterLeft",
//   style: {
//     padding: 800,
//   },
// });
