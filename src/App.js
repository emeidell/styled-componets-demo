import Home from "./pages/home";
import PestControl from "./pages/pestControl";
import React from 'react';
import style from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Styled = style.div`
  nav {
    padding: 15px;

    a {
      padding-left: 10px;
    }

    .navLink {
      color: red;
    }
  }
  .footer {
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
`;

const Links = () =>
  <nav>
    <Link to="/" className="navLink">Home</Link>
    <Link to="/pest-control">Pest Control</Link>
  </nav>

class App extends React.Component {
  render() {
    // Theme Provider will live here in V2
    return (
      <BrowserRouter>
        <Styled>
          <Links />
          <Route exact path="/" component={Home}/>
          <Route path="/pest-control" component={PestControl}/>
          <div className="footer">Footer</div>
        </Styled>
      </BrowserRouter>
    );
  }
}

export default App;
