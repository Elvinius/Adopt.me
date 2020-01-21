import React from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import SearchParams from "./SearchParams"


const App = () => {
  return( 
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>);
};

render(<App />, document.querySelector("#root"));
