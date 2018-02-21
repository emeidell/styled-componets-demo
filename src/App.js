import Home from "./pages/home";
import PestControl from "./pages/pestControl";
import React from 'react';
import style from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Styled = style.div`
  nav {
    padding: 10px 20px;
    background-color: #34495e;
    display: flex;
    align-items: center;

    .logo {
      user-select: none;
      color: white;
      margin-bottom: 8px;
      margin-right: 20px;
      margin-left: 20px;
      text-decoration: none;

    }
    .logo :last-child {
      display: flex;
      justify-content: flex-end;
      line-height: 8px;
      font-size: 28px;
    }

    .nav-link {
      padding: 20px;
      color: white;
      text-decoration: none;
      font-size: 20px;
    }

  }

  .footer {
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    text-align: center;
    background-color: lightgrey;
    color: white;
    font-style: italic;
    height: 45px;

    .footer-title {
      margin-top: 14px;
    }
  }
`;

const Links = () =>
  <nav>
    <a href="http://www.evanmeidell.com/" className="logo">
      <div>EvanMeidell</div>
      <div>.com</div>
    </a>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/pest-control" className="nav-link">Pest Control</Link>
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
          <div className="footer">
            <div className="footer-title">Built by Evan Meidell</div>
          </div>
        </Styled>
      </BrowserRouter>
    );
  }
}

export default App;
