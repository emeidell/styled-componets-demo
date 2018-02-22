import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  button {
    padding: 10px;
    font-size: 18px;
    border: 2px solid #34495e;
    border-radius: 5px;
    background-color: none;


    &:hover {
      background-color: rgba(52, 73, 94, .5);
    }
  }
`;

class Button extends React.Component {
  handleClick(e) {
    this.props.onClick();
  }

  render() {
    return(
      <Styled>
        <button onClick={(e) => this.handleClick(e)}>
          {this.props.children}
        </button>
      </Styled>
    )
  }
}

export default Button;
