import React, {Component} from 'react';
import {SectionOneContainer, Title} from './../Styled/SectionOneStyles';
import {ContactDiv, SubTitle, Paragraph, ContactContainer} from "./../Styled/ContactStyles";
import {Button} from './../Styled/CommonStyles';
import './../Header/Header.css';

const inputTextStyle = {
  padding: '10px',
  marginBottom:'10px',
  backgroundColor: '#f4f7f6',
  border: '1px solid #f9f9f9'

};
const labelStyle = {
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   fontSize:'16px',
   color: '#f78888',
   fontFamily: 'Fira_Sans_SemiBold',
   marginBottom:'5px'
};
const formDiv = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
};
class ContactUsForm extends Component{
    // sendEmail = () => {
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username : "<sender’s email address>",
    //         Password : "<email password>",
    //         To : '<recipient’s email address>',
    //         From : "<sender’s email address>",
    //         Subject : "<email subject>",
    //         Body : "<email body>",
    //         }).then(
    //             message => alert("mail sent successfully")
    //         );
    // }
    render(){
        return(
            <div style={formDiv}>
                {/* <label style={labelStyle}>Name</label> */}
                <input style={inputTextStyle} type='text' placeholder='Name'/>
                {/* <label style={labelStyle}>Contact Number</label> */}
                <input style={inputTextStyle} type='text' placeholder='Number'/>
                {/* <label style={labelStyle}>Email Address</label> */}
                <input style={inputTextStyle} type='email' placeholder='Email Address'/>
                {/* <label style={labelStyle}>Message</label> */}
                <textarea style={inputTextStyle} type='text' placeholder='Message'/>
                <Button type='button' onClick={this.sendEmail}>CONTACT US</Button>
            </div>
        );
    }
}

export default ContactUsForm;