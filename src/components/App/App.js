import React, { useState, useEffect, StrictMode } from "react";
import Loading from "../Loading/Loading";
import Landing from "../Landing/Landing";
import { css } from "@emotion/css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000));
      setLoading(false);
    };
    loadFiveSeconds();
  });

  return (
    <Router>
      <Switch>
        <Route path="/About">
          <About />
        </Route>

        <Route path="/">
          <div
            className={css`
              display: flex;
              flex-flow: column nowrap;
              height: 100vh;
              width: auto;
              overflow-x: hidden;
              overflow-y: scroll;
              scroll-snap-type: y mandatory;
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
                height: auto;
              }
            `}
          >
            {loading ? (
              <StrictMode>
                <Loading />
              </StrictMode>
            ) : (
              <>
                <Landing />
              </>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
