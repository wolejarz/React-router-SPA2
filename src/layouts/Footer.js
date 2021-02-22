import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={(props) => (
          <p>
            You are at <span>Home Page</span>
          </p>
        )}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          console.log(props);
          return (
            <>
              <p>
                You are at <span>{props.match.params.page}</span>
              </p>
              <p>
                You are at URL: <span>{props.match.url}</span>
              </p>
            </>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          console.log(props);
          return (
            <>
              <p>
                You are at <span>{props.match.params.idProduct}</span>
              </p>
              <p>
                You are at URL: <span>{props.match.url}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
