import React, {Component} from 'react';
import {Span, ContainerRow, Links} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <ContainerRow className='headerContent headerFixed'>
                <ContainerRow className='outerContainerMargin width100vw backgroundWhite'>
                    <ContainerRow className='justifyContentStart width100Percent alignCenterMobile'>
                        <Link className='headerLink' to='/'><Span headerColor padding='0px 25px'>SKSI & Associates</Span></Link>
                    </ContainerRow>
                    <ContainerRow className='justifyContentEnd width100Percent hideMobile'>
                        <Span headerColor padding='0px 25px'><Link className='headerLink' to='/about'>About</Link></Span>
                        <Span headerColor padding='0px 25px'><Link className='headerLink' to='/services/0'>Service</Link></Span>
                        <Span headerColor padding='0px 25px'><Links href={'#testimonal'} color={COLOR.GRAY} underline='none' >Testimonal</Links></Span>
                        <Span headerColor padding='0px 25px'><Links href={'#contact'} color={COLOR.GRAY} underline='none' >Contact</Links></Span>
                    </ContainerRow>
                </ContainerRow>
            </ContainerRow>
        );
    }

}

export default Header;