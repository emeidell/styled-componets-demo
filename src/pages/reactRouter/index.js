import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  display: flex;
  max-width: 1200px;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
`;

class ReactRouterExample extends React.Component {
  render() {
    return(
      <Styled>
        Hello world!
      </Styled>
    );
  }
}

export default ReactRouterExample;
