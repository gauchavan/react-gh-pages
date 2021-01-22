import React, {Component} from 'react';
import {ContainerRow} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';


class Services extends Component{
    render(){
        return(
            <ContainerRow className='width100Percent mobileColumn' style={{justifyContent: 'space-between'}}>
                {this.props.children}
            </ContainerRow>
        );
    }
}

export default Services;