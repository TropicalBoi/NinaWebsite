import React from "react";
import logo from "./logo.svg";
import logoScale from "./logoScale.svg";
import logoScale2 from "./logoScale2.svg";
import landingvideo from "./WebtewLanding10mbNoSound.mp4";
import { css, injectGlobal, keyframes } from "@emotion/css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

const appLogoScale = keyframes`
  0% {
    transform: scale(1%);
    visibility: visible;
  }
  50% {
    transform: scale(400%);
    visibility: visible;
  }
  51% {
    visibility: hidden;
  }
  100% {
    transform: scale(401%);
    visibility: hidden;
  }
`;

const hideLogo = keyframes`
  0% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
`;

const Landing = () => {
  return (
    <div
      className={css`
        min-height: 100vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: white;
        position: relative;
        width: 100%;
        overflow: hidden;
        z-index: 300;
        scroll-snap-align: end;
      `}
    >
      <Link
        className={css`
          font-family: Montserrat;
          position: absolute;
          margin-top: 2.1vh;
          margin-right: 1vw;
          color: #ffffff;
          z-index: 999;
          &:hover {
            text-decoration: none;
          }
        `}
        to="/About"
      >
        <p>ABOUTTTT</p>
      </Link>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
        `}
      >
        <img
          src={logoScale}
          className={css`
            animation: ${appLogoScale} infinite 10s linear;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          alt="logoScale1"
        />
        <div
          className={css`
            animation: ${hideLogo} 5s linear;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        >
          <img
            src={logoScale2}
            className={css`
              animation: ${appLogoScale} infinite 10s linear;
              animation-delay: 5s;
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
            alt="logoScale2"
          />
        </div>

        <img
          src={logo}
          className={css`
            height: 100vmin;
            width: 100%;
          `}
          alt="TEWPRAI BUALOI"
        />

        <ReactPlayer
          className={css`
            position: absolute;
            min-height: 100vh;
            overflow: hidden;
            z-index: -9999;
            object-fit: fill;
          `}
          playing={true}
          loop={true}
          muted={true}
          url={landingvideo}
          width="auto"
          height="auto"
          playsinline="true"
        />
      </div>
    </div>
  );
};

export default Landing;
