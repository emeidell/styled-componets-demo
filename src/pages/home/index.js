import React from "react";
import style from "styled-components";

const Style = style.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  margin-top: 100px;

  h1 {
    text-align: center;
    font-size: 45px;
    color: palevioletred;
  }

  .sub-title {
    text-align: center;
    font-size: 20px;
  }

  .header-quote {
    font-style: italic;
    text-align: center;
    max-width: 500px;
    margin-top: 20px;
  }

`

class Home extends React.Component {
  render() {
    return(
      <Style>
        <div>
          <h1>Styled-Components</h1>
          <div className="sub-title">A css framework to make life easier!</div>
          <div className="header-quote">“The basic idea of styled-components is to enforce best practices by removing the mapping between styles and components.”</div>
        </div>
      </Style>
    )
  }
}

export default Home;
