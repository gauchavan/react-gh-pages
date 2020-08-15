import React, {Component} from 'react';
import SectionOne from './../SectionOne/SectionOne';
import Footer from './../Footer/Footer';
import Header from './../Header/Header'
import Contact from './../Contact/Contact';
import ServiceSection from './../ServiceSection/ServiceSection';
import Testimonial from './../Testimonial/Testimonial';
import Tabs from './../Tabs/Tabs';
import {ContainerColumn} from './../Styled/CommonStyles';
import './../CSS/CommonStyles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import AboutUs from '../AboutUs/AboutUs';

  export default function RouterSection() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' children={<HomePage />} />
                <Route path='/about' children={<AboutUsPage />} />
                <Route path='/services/:id' children={<ServicesPage />} />
            </Switch>
        </Router>
    );
}

function HomePage() {
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='BannerContent'/>
            <ServiceSection />
            <Testimonial />
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}

function AboutUsPage() {
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='CommonBanner' section='about'/>
            <AboutUs />
            <Testimonial />
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ServicesPage() {
    let query = useQuery();
    return (
        <ContainerColumn>
            <Header />
            <SectionOne sectionContent='CommonBanner' section='service'/>
            <Tabs/>
            <Testimonial />
            <Contact />
            <Footer/>
        </ContainerColumn>
    )
}

