import React, {useState} from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import {Router, Link} from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";




const App = () => {
  const theme = useState("darkblue");
  return( 
  <ThemeContext.Provider value={theme}>
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
  </ThemeContext.Provider>
  );
};

render(<App />, document.querySelector("#root"));
