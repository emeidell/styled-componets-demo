import React from "react";
import style from "styled-components";
import BlockSection from "../../components/blockSection.js";
import cheep from "../../assets/Cheep-cheep.png";
import bobomb from "../../assets/Bob-omb-resize.png";
import goomba from "../../assets/Goombas-resize.png";

const Style = style.div`
  position: relative;
  margin: 0 20px 0 20px;

  .title {
    display: block;
    margin: 40px 0 0 70px;
    font-size: 45px;
  }

  .content-body {
    margin-top: 20px;
    display: flex;
    width: 100%
  }
`;

class PestControl extends React.Component {
  render() {
    return(
      <Style>
        <div className="title">Mario Pest Control</div>
        <br/>
        <div className="content-body">
          <BlockSection sectionTitle="Bob-omb" img={bobomb}>Testing</BlockSection>
          <BlockSection sectionTitle="Goomba" img={goomba}>Testing 2</BlockSection>
          <BlockSection sectionTitle="Cheep-cheep" img={cheep}>Testing 3</BlockSection>
        </div>
      </Style>
    )
  }
}

export default PestControl;
