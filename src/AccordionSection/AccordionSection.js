import React, { Component } from "react";
import PropTypes from "prop-types";
import {SubTitle, Paragraph, Title, Span, Button, ContainerColumn} from "../Styled/CommonStyles";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;

    return (
    <div>
        <div style={{width: '50%',display: 'flex',flexDirection: 'column'}}>
            <SubTitle onClick={onClick} style={{ cursor: "pointer",  color: isOpen ? "#fff" : "#000", }}>{label}</SubTitle>
        </div> 
        <div style={{width: '50%',display: 'flex',flexDirection: 'column'}}>
            {isOpen && (
                <Paragraph>
                    {this.props.children}
                </Paragraph>
            )}
        </div>
    </div>
    );
  }
}

export default AccordionSection;