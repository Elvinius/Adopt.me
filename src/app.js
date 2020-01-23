import React from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import SearchParams from "./SearchParams"


const App = () => {
  return( 
  <React.StrictMode >
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  </React.StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
