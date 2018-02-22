import React from "react";
import style from "styled-components";
import { isEmpty, isNil } from "lodash";

const Styled = style.div`
  margin: 8px;
  width: 100%;

  .block-section {
    background-color: #F7F7F7;
    border: 1px solid darkgrey;
    border-radius: 5px;

    &:hover {
      box-shadow: 0 0 15px 0 rgba(0,0,0,0.5);
    }

    .block-section-title {
      border-bottom: 1px solid darkgrey;
      padding: 20px 20px 15px 20px;
      font-size: 25px;
    }

    .block-section-content {
      padding: 20px;

      .block-section-img {
        text-align: center;
        margin-top: 20px;
        max-height: 300px;
        height: 300px;
      }
    }
  }
`

class BlockSection extends React.Component {
  renderImg() {
    if(isEmpty(this.props.img) || isNil(this.props.img)) { return(null); }

    return(
      <div className="block-section-img">
        <img src={this.props.img} alt={this.props.sectionTitle}/>
      </div>
    )
  }
  render() {
    return(
      <Styled>
        <div className="block-section">
          <div className="block-section-title">{this.props.sectionTitle}</div>
          <div className="block-section-content">
            {this.renderImg()}
            {this.props.children}
          </div>
        </div>
      </Styled>
    )
  }
}

export default BlockSection;
