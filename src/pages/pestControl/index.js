import React from "react";
import styled from "styled-components";
import BlockSection from "../../components/blockSection/blockSection.js";
import Button from "../../components/button"
import cheep from "../../assets/Cheep-cheep.png";
import bobomb from "../../assets/Bob-omb-resize.png";
import goomba from "../../assets/Goombas-resize.png";

const Style = styled.div`
  position: relative;
  margin: 0 20px 0 20px;

  .title-row {
    display: flex;
    margin: 40px 0 0 70px;

    .title {
      font-size: 45px;
      flex: 1;
    }

    .full-total {
      flex: 0 0 370px;
      font-size: 40px;
      font-weight: 200;
    }
  }

  .content-body {
    margin-top: 20px;
    display: flex;
    width: 100%
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .total {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 900;
  }
`;

class PestControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bobomb: 0,
      goomba: 0,
      cheep: 0
    }
  }

  incrementPest(pestType, {multiplier}) {
    this.setState({
      [pestType]: this.state[pestType] + multiplier
    })
  }
  render() {
    return(
      <Style>
        <div className="title-row">
          <div className="title">Mario Pest Control</div>
          <div className="full-total">Combined Total: {this.state.goomba + this.state.bobomb + this.state.cheep}</div>
        </div>
        <div className="content-body">
          <BlockSection sectionTitle="Bob-omb" img={bobomb}>
            <Content>
              <Button onClick={() => this.incrementPest("bobomb", {multiplier: 7})}>Pest Removed</Button>
              <div className="total">
                <div>Pests: {this.state.bobomb / 7}</div>
                <div>Total: {this.state.bobomb}</div>
              </div>
            </Content>
          </BlockSection>
          <BlockSection sectionTitle="Goomba" img={goomba}>
            <Content>
              <Button onClick={() => this.incrementPest("goomba", {multiplier: 5})}>Pest Removed</Button>
              <div className="total">
                <div>Pests: {this.state.goomba / 5}</div>
                <div>Total: {this.state.goomba}</div>
              </div>
            </Content>
          </BlockSection>
          <BlockSection sectionTitle="Cheep-cheep" img={cheep}>
            <Content>
              <Button onClick={() => this.incrementPest("cheep", {multiplier: 11})}>Pest Removed</Button>
              <div className="total">
                <div>Pests: {this.state.cheep / 11}</div>
                <div>Total: {this.state.cheep}</div>
              </div>
            </Content>
          </BlockSection>
        </div>
      </Style>
    )
  }
}

export default PestControl;
