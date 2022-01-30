import React, { useState } from "react";
import profilePic from "./ProfilePic.png";
import Aboutvideo from "./WebTewAboutLanding.mp4";
import { css, injectGlobal, keyframes } from "@emotion/css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

const textShadow = keyframes`
  0% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
  25% {
    text-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  50% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
  75% {
    text-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  100% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
`;

const About = () => {
  const [showLongText, setShowLongText] = useState(false);
  const [showShortText, setShowShortText] = useState(false);
  const [showLaborText, setShowLaborText] = useState(false);
  const [showCogText, setShowCogText] = useState(false);

  return (
    <div
      className={css`
        display: flex;
        flex-flow: column nowrap;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: #c4c4c4 #000;
        &::-webkit-scrollbar {
          width: 12px;
        }
        &::-webkit-scrollbar-track {
          background-color: #000;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 100px;
          background: #c4c4c4;
          border: 2px solid #000;
        }
        @media screen and (max-width: 428px) {
          overflow: hidden;
        }
      `}
    >
      <div
        className={css`
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          font-size: calc(10px + 2vmin);
          color: white;
          position: relative;
          overflow: hidden;
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
          to="/"
        >
          <p>WORKS</p>
        </Link>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          `}
        >
          <p
            className={css`
              position: absolute;
              width: 17.9vw;
              height: fit-content;
              left: 1vw;
              top: 95.2vh;
              font-family: Montserrat;
              font-style: normal;
              font-weight: normal;
              font-size: 2.6vh;
              line-height: 3.1vh;
              color: #ffffff;
              @media screen and (max-width: 428px) {
                font-size: 3vw;
                top: unset;
                bottom: 0;
                left: 4vw;
            }
              }
            `}
          >
            tewprai.bualoi@gmail.com
          </p>
          <p
            className={css`
              position: absolute;
              width: 175px;
              height: fit-content;
              right: 1vw;
              bottom: 1vh;
              font-family: Montserrat;
              font-style: normal;
              font-weight: normal;
              font-size: 2.6vh;
              line-height: unset;
              text-align: right;
              color: #ffffff;
              @media screen and (max-width: 428px) {
                font-size: 3vw;
                right: 4vw;
                bottom: 1vh;
                top: unset;
                width: 30vw;
              }
            `}
          >
            for quick chat @t.ropicalboi
          </p>

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
            url={Aboutvideo}
            width="auto"
            height="auto"
            playsinline="true"
          />
        </div>
      </div>
      <div
        className={css`
          position: relative;
        `}
      >
        <img
          src={profilePic}
          className={css`
            position: absolute;
            width: 20.8vw;
            height: auto;
            left: 60.5vw;
            top: 14vh;
            @media screen and (max-width: 428px) {
              position: relative;
              width: 70vw;
              height: auto;
              left: 15vw;
              top: 5vh;
            }
          `}
          alt="ProfilePic"
        />
        <div
          className={css`
            position: absolute;
            @media screen and (max-width: 428px) {
              width: 100vw;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: left;
              left: 8vw;
              top: 5vh;
            }
          `}
        >
          <p
            className={css`
              position: absolute;
              width: max-content;
              height: 6.9vh;
              left: 8.4vw;
              top: 14.1vh;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 5.2vh;
              line-height: 6.4vh;
              color: #ffffff;
              @media screen and (max-width: 428px) {
                position: relative;
                width: auto;
                height: fit-content;
                left: 0;
                top: 0;
                margin-top: 5vh;
                font-size: 8vw;
                line-height: 5vh;
              }
            `}
          >
            Tewprai Bualoi, 1993
          </p>
          <div
            className={css`
              position: absolute;
              width: max-content;
              height: 8.7vh;
              left: 9.3vw;
              top: 22.4vh;
              font-family: Montserrat;
              font-style: normal;
              font-weight: normal;
              font-size: 2.5vh;
              line-height: 3vh;
              color: #ffffff;
              @media screen and (max-width: 428px) {
                position: relative;
                width: 80vw;
                height: auto;
                left: 0;
                top: 0;
                font-size: 4vw;
                line-height: 4.5vw;
                margin-top: 2vh;
              }
            `}
          >
            <div
              className={css`
                display: flex;
              `}
            >
              <p>Former&nbsp;</p>
              <span
                onClick={() => setShowLaborText(!showLaborText)}
                className={css`
                  &:hover {
                    cursor: help;
                  }
                `}
              >
                {!showLaborText && (
                  <p
                    className={css`
                      animation: ${textShadow} infinite 5s linear;
                    `}
                  >
                    manual labor
                  </p>
                )}
                {showLaborText && (
                  <p>
                    carpenter, art handler, delivery rider, cinematographer
                    asst.
                  </p>
                )}
              </span>
            </div>
            <div
              className={css`
                display: flex;
              `}
            >
              <p>turned&nbsp;</p>
              <span
                onClick={() => setShowCogText(!showCogText)}
                className={css`
                  animation: ${textShadow} infinite 5s linear;
                  &:hover {
                    cursor: help;
                  }
                `}
              >
                {!showCogText && <p>semi-cognitive labor,</p>}
                {showCogText && <p>front-end developper(?),</p>}
              </span>
            </div>
            <p>misguided artist.</p>
          </div>
          <div
            className={css`
              position: absolute;
              @media screen and (max-width: 428px) {
                position: relative;
                margin-top: 3vh;
              }
            `}
          >
            <p
              className={css`
                position: absolute;
                width: 7.5vw;
                height: 3.9vh;
                left: 8.9vw;
                top: 40.4vh;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 4.2vh;
                line-height: 5.1vh;
                color: #1a4bf9;
                @media screen and (max-width: 428px) {
                  position: relative;
                  width: fit-content;
                  height: fit-content;
                  left: unset;
                  top: unset;
                  font-size: 6vw;
                  line-height: 8vw;
                }
              `}
            >
              About
            </p>
            {showLongText && !showShortText && (
              <a
                className={css`
                  position: absolute;
                  width: 8.1vw;
                  height: 6.4vh;
                  left: 1.5vw;
                  top: 64.7vh;
                  font-family: Montserrat;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 1.2vh;
                  line-height: 1.5vh;
                  word-break: break-all;
                  color: #ffffff;
                  @media screen and (max-width: 428px) {
                    position: relative;
                    width: 30vw;
                    height: max-content;
                    left: 60vw;
                    top: -15vw;
                    font-size: 1.2vh;
                    line-height: 1.5vh;
                  }
                `}
                href="https://www.utwente.nl/en/bms/wijsb/research/Human-Technology%20Relations/"
              >
                <sup>(1)</sup> Accessed from
                https://www.utwente.nl/en/bms/wijsb/research/Human-Technology%20Relations/
              </a>
            )}
            <div
              onClick={() => setShowLongText(!showLongText)}
              className={css`
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: auto;
                height: 2.7vh;
                left: 17.1vw;
                top: 49.9vh;
                letter-spacing: normal;
                transition: letter-spacing 1s;
                @media screen and (max-width: 428px) {
                  position: relative;
                  left: 8vw;
                  top: 0;
                  margin-top: 2vh;
                  height: max-content;
                }
                ${showLongText && !showShortText
                  ? ""
                  : "&:hover { letter-spacing: 0.1vw; }"}
              `}
            >
              {!showLongText && !showShortText && (
                <p
                  className={css`
                    position: relative;
                    width: max-content;
                    height: 2.7vh;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 4vw;
                      line-height: 3vh;
                    }
                  `}
                >
                  In long-fancy words.
                </p>
              )}
              {showLongText && !showShortText && (
                <div
                  className={css`
                    position: absolute;
                    left: -4.9vw;
                    width: 33.8vw;
                    height: auto;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.1vh;
                    line-height: 2.7vh;
                    text-indent: 5.2vw;
                    color: #ffffff;
                    padding-bottom: 10vh;
                    &:hover {
                      letter-spacing: 0;
                    }
                    @media screen and (max-width: 428px) {
                      position: relative;
                      left: -5vw;
                      top: -10vw;
                      width: 80vw;
                      font-size: 4vw;
                      line-height: 4.5vw;
                      height: max-content;
                      padding: 0;
                    }
                  `}
                >
                  <p>
                    “Humans are inherently technological beings or tool users.
                    We are deficient beings who use technology to complement,
                    enhance, or disburden ourselves. Technology has without a
                    doubt become a central part of the human condition - for
                    better and worse. It influences us, just as much as we
                    influence it, in our daily lives, but also as moral and
                    ethical beings.”{" "}
                    <sup
                      className={css`
                        font-size: 1.2vh;
                      `}
                    >
                      (1)
                    </sup>{" "}
                  </p>
                  <p>
                    This quote echoes my perspective towards my practices and
                    interest as an artist. I believe that technology reflects
                    ourselves, what kind of human we are, and what we might
                    become.
                  </p>
                  <p>
                    My initial interest is in visual culture, more specifically
                    video and moving image culture - that is, how we see the
                    world through it and how it mediates the very world we see.
                    The first kind of moving image I studied was internet memes.
                    These are mostly portrayed as still images containing a
                    brief amount of meanings and information. I tried to enlarge
                    this capacity of memes by transforming them into moving
                    images and combining them to explore their collective
                    potential in narrating certain kinds of stories beyond every
                    single meme. Having studied and created several workpieces,
                    I realized the importance of not only the moving image
                    itself but also the screen - how it functions as a mediator
                    between human beings and moving images. Thanks to its size
                    and positioning in public space, LED billboards always
                    overwhelm us. Handheld game console screens are designed
                    specifically for visual entertainment. Everyone has their
                    criteria of what good screens and bad screens are. Each
                    screen contains specific meanings, and thus sometimes
                    manipulates the way each kind of moving image is portrayed,
                    as well as the way we position ourselves towards it.
                    Concerned with the significance of the screen, I have
                    continuously experimented with it to interrogate if and how
                    it changes or elevates the meaning of moving images in
                    unexpected ways.
                  </p>
                  <p>
                    Another exploration I had into moving images is their
                    digital physicality/physics, and the emergence of digital
                    matters through digitalization. Framing deterioration
                    avoidance as characteristic of digitalization, I believe the
                    concept also echoes humanity’s relationship to mortality as
                    we have detached ourselves from the reality of death and
                    consistently come up with ways to postpone it. In
                    retrospect, although all of it might have started in video
                    and moving images, what has influenced me the most is my
                    interest in the relationship between humans and technology,
                    especially one that is characterized by a sense of
                    “strangeness”.
                  </p>
                  <p>
                    My appreciation of “strangeness” found in the relationships
                    between us humans and technology is formed not only through
                    academic/intellectual engagement but also experientially.
                    During one of the video calls I had with my partner, she
                    asked if she could look into my eyes. Staring into my
                    laptop’s webcam lens, I felt a strange sensation inundating
                    my body. To stare into another person’s eyes, especially
                    those of loved ones, is a two-way communication of the
                    senses and sensibilities. But once these eyes were replaced
                    by webcams, the reciprocity was gone. Left feeling awkward,
                    I continued to direct my feeling-laden gaze at the lens,
                    nonchalant as it was. I couldn’t look into my partner’s eyes
                    without averting my gaze away from the camera. I couldn’t
                    sense what was directed at me from her eyes. Neither were I
                    in touch with my senses for I couldn’t tell whether the
                    feelings transmitted through my gaze were genuine or
                    performative. Did I have any feelings at all? Or is this a
                    sort of era-specific affective communication I will have to
                    negotiate with and meditate through from now on?{" "}
                  </p>
                  <p>
                    Another strange encounter was my experience with a VR
                    headset. Once, inside the virtual reality, an NPC was trying
                    to have non-consensual sexual contact with me. As repulsed
                    as I felt, What overwhelmed me even more great was my
                    curiosity. Did I relate to my virtual body as similarly as I
                    do my physical body? If so, to what extent? Even though it
                    was not my physical body that was touched, the transgression
                    against my virtual body elicited a sense of autonomy over
                    the latter. While the idea of bodily autonomy and embodiment
                    have been developed throughout history, to what extent is it
                    applicable to the virtual body? To what extent is the
                    virtual body autonomous, and under what circumstances does
                    the concept lose its explanatory power?{" "}
                  </p>
                  <p>
                    The strange sensations I experienced in both instances
                    function as a foreshadow to other disorienting encounters I
                    believe I will experience as life progresses. While
                    technology continuously advances, in what direction are our
                    feelings heading? Feelings are inevitably
                    circumstance-specific and contextually contingent. The
                    awkward, the unknown, the inexplicable - how will these
                    expand their boundaries to encompass other presently unknown
                    locales of emotions. Committed to discovering and
                    understanding potential manifestations of these
                    “strangeness”, and how these “strangeness” say about the
                    human condition, I position them at the center of my
                    artistic creation, if not life itself.
                  </p>
                </div>
              )}
              {!showLongText && !showShortText && (
                <div
                  className={css`
                    position: relative;
                    left: 1px;
                    display: flex;
                    width: auto;
                    flex-direction: row;
                    align-items: center;
                    height: auto;
                  `}
                >
                  <span
                    className={css`
                      display: inline-block;
                      width: 10.4vw;
                      height: 0.2vh;
                      background-color: #ffffff;
                      margin: 1vh 0;
                      @media screen and (max-width: 428px) {
                        width: 30vw;
                      }
                    `}
                  ></span>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <span
                      className={css`
                        transform: rotate(-45deg);
                        transform-origin: bottom right;
                        border-left: 0.15rem solid #ffffff;
                        height: 1rem;
                      `}
                    ></span>
                    <span
                      className={css`
                        transform: rotate(45deg);
                        transform-origin: top right;
                        border-right: 0.15rem solid #ffffff;
                        height: 1rem;
                      `}
                    ></span>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => setShowShortText(!showShortText)}
              className={css`
                position: absolute;
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-start;
                align-items: center;
                width: 25.7vw;
                height: 2.7vh;
                left: 8.9vw;
                top: 56.2vh;
                letter-spacing: normal;
                transition: letter-spacing 1s;
                @media screen and (max-width: 428px) {
                  position: relative;
                  width: max-content;
                  height: max-content;
                  left: 0;
                  top: 0;
                  padding-top: 1vh;
                }
                ${!showLongText && showShortText
                  ? ""
                  : "&:hover { letter-spacing: -0.1vw; }"}
              `}
            >
              {!showLongText && !showShortText && (
                <p
                  className={css`
                    position: relative;
                    width: auto;
                    height: 2.7vh;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    margin-left: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 4vw;
                    }
                  `}
                >
                  or in short words.
                </p>
              )}
              {!showLongText && showShortText && (
                <p
                  className={css`
                    position: absolute;
                    width: 33.8vw;
                    height: auto;
                    left: 3.2vw;
                    top: -6.3vh;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    text-indent: 5.2vw;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      position: relative;
                      width: 80vw;
                      font-size: 4vw;
                      line-height: 4.5vw;
                      top: 0;
                    }
                  `}
                >
                  Tewprai's main interests are circulated from non-conventional
                  moving images, various types of screens to new-media culture
                  on this on-going age of internet revolution with its effects
                  on humans.
                </p>
              )}
              {!showLongText && !showShortText && (
                <div
                  className={css`
                    position: relative;
                    display: flex;
                    width: auto;
                    flex-direction: row;
                    align-items: center;
                    height: auto;
                  `}
                >
                  <span
                    className={css`
                      display: inline-block;
                      width: 10.4vw;
                      height: 0.2vh;
                      background-color: #ffffff;
                      margin: 1vh 0;
                      @media screen and (max-width: 428px) {
                        width: 30vw;
                      }
                    `}
                  ></span>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <span
                      className={css`
                        transform: rotate(-45deg);
                        transform-origin: bottom right;
                        border-left: 0.15rem solid #ffffff;
                        height: 1rem;
                      `}
                    ></span>
                    <span
                      className={css`
                        transform: rotate(45deg);
                        transform-origin: top right;
                        border-right: 0.15rem solid #ffffff;
                        height: 1rem;
                      `}
                    ></span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              left: 48.9vw;
              top: 74.7vh;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              @media screen and (max-width: 428px) {
                position: relative;
                left: unset;
                top: unset;
                margin-top: 6vh;
              }
            `}
          >
            <p
              className={css`
                position: relative;
                width: 10.8vw;
                height: 10.5vh;
                margin-bottom: 40px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 4.2vh;
                line-height: 5.1vh;
                color: #1c4cf7;
                @media screen and (max-width: 428px) {
                  width: fit-content;
                  height: fit-content;
                  margin: 0;
                  font-size: 6vw;
                }
              `}
            >
              Selected Exhibition
            </p>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                position: relative;
                width: 44.5vw;
                height: auto;
                padding-bottom: 10vh;
                @media screen and (max-width: 428px) {
                  width: unset;
                  margin-top: 2vw;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2021
                </p>

                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>The Place of Memories</em> group exhibition, SAC
                    Gallery, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2020
                </p>

                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>ZING VIDEO</em> an organization and platform for
                    connecting image-movers who didn't commit to the standard
                    quality, Tokyo Hot, Bangkok, Thailand
                  </li>
                  <li>
                    <em>Speedy Grandma Centennial</em> group exhibition, Speedy
                    Grandma, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    display: flex;
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2019
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>หลุย Louie!: Attitude Against Failure</em> group
                    exhibition, Cartel Art Space, Bangkok, Thailand
                  </li>
                  <li>
                    <em>Early Years Project 4</em>, Bangkok Art and Culture
                    Center, Bangkok, Thailand
                  </li>
                  <li>
                    <em>
                      Experimental Video Art: selected works Bangkok/Düsseldorf
                    </em>{" "}
                    screening at Kunstakademie Düsseldorf, Germany
                  </li>
                  <li>
                    <em>
                      Experimental Video Art Exhibition, Thai-European
                      Friendship 2019 (EVA project)
                    </em>
                    , Bangkok Art and Culture Center, Bangkok, Thailand
                  </li>
                  <li>The tip top as a part of The Wrong Biennale 2019</li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2018
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>Internet Universality Beyond Words</em> group exhibition
                    by UNESCO, Thailand Creative and Design Center, Bangkok,
                    Thailand
                  </li>
                  <li>
                    Screening program{" "}
                    <em>"Here and nowadays, we are at the moment right now"</em>{" "}
                    at Sangnual lap, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2017
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>Mode of Liaison</em> art exhibition, in the name of
                    Mafia’s Table Group in collaboration with Roslisham Ismail
                    (aka Ise), Bangkok Art and Culture Center, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2016
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>20+</em> art exhibition, Faculty of Architecture
                    Department of Fine Art, King Mongkut Institute of Technology
                    Ladkrabang, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2015
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>
                      (-)1: "The great artist of tomorrow will go underground" -
                      Marcel Duchamp
                    </em>
                    , As part of Auto pilot project Y.A.N (Young Artist Network
                    by BACC), in the name of Third Sound Group, Bangkok Art and
                    Culture Center, Bangkok, Thailand
                  </li>
                </ul>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  @media screen and (max-width: 428px) {
                    flex-direction: column;
                  }
                `}
              >
                <p
                  className={css`
                    font-family: "terminal-grotesque-open";
                    font-size: 7.3vh;
                    line-height: 8.6vh;
                    color: #ffffff;
                    min-width: 8.3vw;
                    margin-right: 1.5vw;
                    @media screen and (max-width: 428px) {
                      font-size: 10vw;
                      line-height: inherit;
                      margin: 0.5vh 0;
                    }
                  `}
                >
                  2014
                </p>
                <ul
                  className={css`
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5vh;
                    line-height: 3vh;
                    color: #ffffff;
                    @media screen and (max-width: 428px) {
                      width: 70vw;
                      font-size: 4vw;
                      line-height: 5vw;
                      margin: 0 0 2vh 0;
                    }
                  `}
                >
                  <li>
                    <em>Summer Sale</em> art exhibition, Centralfestival Pattaya
                    Beach, Chonburi, Thailand
                  </li>
                  <li>
                    <em>
                      The 10th Experimental Video Art: Thai-European Friendship
                      2004-2014
                    </em>
                    , Bangkok Art and Culture Center, Bangkok, Thailand and
                    Moltkerei Werkstatt, Cologne, Germany, 15 - 29 September
                    2014
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
