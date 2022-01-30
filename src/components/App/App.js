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
      await new Promise((resolve) => setTimeout(resolve, 0));
      setLoading(false);
    };
    loadFiveSeconds();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/About">
          <About />
        </Route>

        <Route path="/">
          <div
            className={css`
              height: 100vh;
              width: auto;
              scrollbar-width: none;
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
