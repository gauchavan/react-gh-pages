import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionSection from "./../AccordionSection/AccordionSection";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const {state: { openSections }}= this;

    const isOpen = !!openSections[label];
    this.setState({
        openSections: {
            [label]: !isOpen
        }
    });
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;