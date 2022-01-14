import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { css, keyframes } from "@emotion/css";
// import Countdown from "react-countdown";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const DDLoading = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys });

  // const Completionist = () => <span>Whoops, wahh?</span>;

  // const renderer = ({ seconds, completed }) => {
  //   if (completed) {
  //     return <Completionist />;
  //   } else {
  //     return <span>{seconds}</span>;
  //   }
  // };

  const visible = keyframes`
  0% {
    background: #d1d8d5;
    
  }
  
  89% {
    background: #d1d8d5;
  }

  90% {
    background: #000000;
  }

  100% {
    background: #000000;
  }
`;
  const boxShadow = keyframes`
  0% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
  25% {
    box-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  50% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
  75% {
    box-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  100% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
`;

  return (
    <div
      className={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: #000;
        overflow: hidden;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
        ref={ref}
      >
        <animated.div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60ch;
            height: 60ch;
            border-radius: 10%;
            transition: box-shadow 0.5s;
            will-change: transform;
            animation: ${visible} 8s linear;
            animation: ${boxShadow} infinite 5s linear;
          `}
          style={{ transform: props.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={(e) => {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
        >
          <p
            className={css`
              font-family: RuneScape Quill;
              font-style: normal;
              font-weight: normal;
              font-size: 10vh;
              line-height: 10vh;
              display: flex;
              align-items: center;
              text-align: center;
              color: #ffff00;
              text-shadow: #ffffff 1px 0 10px;
            `}
          >
            ENTERING DEEP DUNGEON LOBBY
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default DDLoading;
