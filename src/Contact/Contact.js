import React, {Component} from 'react';
import {SubTitle, ContainerRow, SectionHeading} from './../Styled/CommonStyles';
import FontIcon from './../FontIcon/FontIcon';
import * as COLOR from './../Constants/COLOR';
import './../Header/Header.css';


class Contact extends Component{
    render(){
        return(
            <ContainerRow id='contact' className='blueBackgroundColor mobileColumn'>
                <ContainerRow className='width100Percent outerContainerMargin mobileColumn margin0'>
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <SectionHeading color={COLOR.WHITE}>
                            <FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.BLUE} name='fas fa-phone-alt'/>
                            <span className='hideMobile'>Call us on:</span>
                        </SectionHeading>
                        <SubTitle className='margin0' color={COLOR.WHITE}>+919820746792 / +918082016560</SubTitle>
                    </ContainerRow>    
                    <SectionHeading className='widthAdjustment margin2035 justifyContentCenter alignItemCenter mobileColumn'>
                        OR
                    </SectionHeading>
                    <ContainerRow className='widthAdjustment justifyContentCenter alignItemCenter padding10All mobileColumn'>
                        <SectionHeading color={COLOR.WHITE}>
                            <FontIcon padding='0px 15px' font='25px' align='center' color={COLOR.BLUE} name='fas fa-envelope-open-text'/>
                            <span className='hideMobile'>Email us on:</span>
                        </SectionHeading>
                        <SubTitle className='margin0' color={COLOR.WHITE}>sksi.consultancy@gmail.com</SubTitle>
                    </ContainerRow>
                </ContainerRow>
                
            </ContainerRow>
        );
    }
}

export default Contact;