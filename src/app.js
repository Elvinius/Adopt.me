import React from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import {Router, Link} from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";



const App = () => {
  return( 
  <React.StrictMode >
  <div>
    <header>
      <Link to="/">
        Adopt Me!
      </Link>
    </header>
    
    <Router>
      <SearchParams path="/" />
      <Details path ="/details/:id"/>
    </Router>
  </div>
  </React.StrictMode>
  );
};

render(<App />, document.querySelector("#root"));