import React, {Component} from 'react';
import {FontIconSpan, Icon} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';

class FontIcon extends Component{
    render(){
        return(
            <FontIconSpan  padding={this.props.padding} font={this.props.font} color={this.props.color} align={this.props.align}>
                <Icon className={this.props.name}></Icon>
            </FontIconSpan>
        );
    }
}

export default FontIcon;
