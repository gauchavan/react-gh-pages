import React, {Component} from 'react';
import {SectionHeading, Paragraph, ContainerRow, ContainerColumn, Span} from './../Styled/CommonStyles';
import Services from './../Services/Services';
import Service from './../Service/Service';
import './../CSS/CommonStyles.css';
import * as COLOR from './../Constants/COLOR';

class AboutUs extends Component{

    render(){
        return(
            <ContainerRow className='sectionHeight width100Percent'>
                <ContainerRow id='about' className='width40Percent justifyContentCenter blueBackgroundColor alignItemCenter'>
                    <ContainerColumn className='width100Percent alignItemStart' style={{margin: '0px 15px 0px 39%'}}>
                        <SectionHeading underline='underline' color={COLOR.WHITE} className='marginBottom20'>Vision & Mission</SectionHeading>
                        <Paragraph color={COLOR.WHITE} margin='0px 0px 20px' style={{lineHeight: '1.5'}}>
                            TO BECOME THE LEADING CONSULTANCY SERVICE FIRM WITH LEGACY TO CARRY FORWARD WITH THE PASSION WHICH IT WAS FORMED, BY THE PROFESSIONALS THAT SHALL TAKE IT FORWARD AND BE ONE OF THE SOCIALLY RESPONSIBLE FIRMS WORKING TOWARDS THE OVERALL GROWTH.
                        </Paragraph>
                        <Paragraph color={COLOR.WHITE} margin='0px 0px 30px'  style={{lineHeight: '1.5'}}>
                            WE STRIVE TO PROVIDE EXCELLENT SERVICES AND INNOVATIVE SOLUTIONS WITH PERSONALISED ATTENTION TO EACH CLIENT.
                        </Paragraph>
                    </ContainerColumn>
                </ContainerRow>    
                <ContainerRow id='service' className='width60Percent justifyContentCenter grayBackgroundColor alignItemCenter'>
                    <ContainerColumn className='width100Percent alignItemStart' style={{margin: '0px 24% 0px 4%'}}>
                        <SectionHeading underline='underline' color={COLOR.BLUE} className='marginBottom20'>Meet Our Team</SectionHeading>
                        <ContainerColumn className='width100Percent'>
                            <Services>
                                <Service serviceName='MR. SHARATKUMAR SHETTY' subHeading='MR. SHARATKUMAR SHETTY is the Founder and Partner of the Firm and has over 10 years of experience in the field of corporate secretarial and compliance matters of listed, unlisted public companies and private companies. He is the Fellow member of the Institute of Company Secretaries of India and a Law graduate from Government Law College, Mumbai. He is specialized in handling Company law matters, SEBI related matters, Revocation matters, FEMA Compliances, Incorporation of new Companies including Section 8 Companies and Foreign Subsidiaries and other Statutory Filings.  Before entering into the consulting practice, he was associated as Company Secretary with listed Companies involved in Manufacturing and Real Estate Industry.'></Service>
                                <Service serviceName='MS. ISHWARI CHAVAN' subHeading='MS. ISHWARI CHAVAN is the Co-Founder and Managing Partner of the Firm and has over 10 years of experience in the field of NBFC Compliances and SEBI related matters for Listed Companies. She is a Fellow member of Institute of Company Secretaries of India and Law graduate from Mumbai university.  She is specialized in handling various RBI registrations, AIF Compliances, Audits including due diligence and Handling end to end solution including drafting and reviewing of various types of legal agreements. She was associated as Company Secretary with leading NBFC and AIF Company before starting her entrepreneurial journey in consulting field.'></Service>
                            </Services>
                        </ContainerColumn>
                    </ContainerColumn>
                </ContainerRow>
            </ContainerRow>
        );
    }
}

export default AboutUs;