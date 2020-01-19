import React from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import Pet from "./Pet";


const App = () => {
  return( 
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Messy" animal="Cat" breed="Angora" />
    <Pet name="Schwartz" animal="Dog" breed="Doberman" />
  </div>);
};

render(<App />, document.querySelector("#root"));
