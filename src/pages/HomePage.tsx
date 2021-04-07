import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBMask,
    MDBRow,
    MDBView
} from "mdbreact";

import carousel1 from '../assets/images/home/carousel-1.png';
import carousel2 from '../assets/images/home/carousel-2.png';
import carousel3 from '../assets/images/home/carousel-3.png';

import media1 from '../assets/images/home/main-landing-page-media-1.png';
import media2 from '../assets/images/home/main-landing-page-media-2.png';
import media3 from '../assets/images/home/main-landing-page-media-3.png';
import media4 from '../assets/images/home/main-landing-page-media-4.png';
import media5 from '../assets/images/home/main-landing-page-media-5.png';
import media6 from '../assets/images/home/main-landing-page-media-6.png';
import media7 from '../assets/images/home/main-landing-page-media-7.png';
import media8 from '../assets/images/home/tiffany-Brar.jpg';

import nasscomFoundation from "../assets/images/home/nasscom-foundation.png";
import ksf from "../assets/images/home/ksf.png";
import societeGenerale from "../assets/images/home/societe-generale.png";
import nish from "../assets/images/home/nish.png";
import theLalit from "../assets/images/home/the-lalit.png";
import { ConnectWithUs } from "../common/ConnectWithUs";
// import {Header} from "../common/Header";



export const HomePage: React.FC = (props: any) => {

    useEffect(() => {
        console.log(props)
        console.log("property_id", props.location.state);
    }, [])

    const divConnectWithUs = useRef(null);
    const handleActionClick = () => {
        // @ts-ignore
        divConnectWithUs.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    }
    return (
        <MDBContainer className="mt-3 mb-5">
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner className="p-0">
                    <MDBCarouselItem itemId="1" className="p-0">
                        <MDBView>
                            <img
                                className="d-block w-100 p-0"
                                src={carousel1}
                                alt="First slide"
                            />

                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Discover Inclusion</h3>
                            <p>Enabling your Organisations inclusion journey. A partner of choice for all DNI
                                services.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel2}
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Get Hired</h3>
                            <p>Find All Inclusive Corporate Listing at One Place</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel3}
                                alt="Third slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Become a Mentor</h3>
                            <p>Develop leadership skills, Learning opportunity and have personal satisfaction.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>

            <div className="container-xl">
                <MDBRow className="pt-5 pb-5 ca-bg-ivory">
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody>
                                <p className="ca-text-orange display-4 font-weight-bold">
                                    Build your network of social good
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media1}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                            <br />
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="font-weight-bold p-0">Enhance your Organisations digital
                                    Inclusion by Web Accessibility and WCAG Compliance</MDBCardTitle>
                                <MDBCardText>
                                    1Inclusion helps make web content more accessible with a simple click of a button,
                                    an easy plug and play ‘widget’ which enables e-accessibility of websites for
                                    everyone.
                                </MDBCardText>
                                <a href='#!' className='black-text d-flex justify-content-md-start'>
                                    <h6>
                                        <MDBBtn rounded color="grey" className='mt-3' onClick={handleActionClick}>Get the widget</MDBBtn>
                                    </h6>
                                </a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media2}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                            <br />
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="font-weight-bold p-0">What is your Organisation’s Inclusion
                                    Maturity score</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    Use our Organisation inclusion assessment to know your maturity in Diversity and
                                    Inclusion. Our corporate toolkit provides all resources and consulting needed for
                                    your inclusion journey.
                                </MDBCardText>
                                <MDBRow>
                                    <MDBCol md='12'>
                                        <a href='#!' className='black-text d-flex justify-content-md-start'>
                                            <h6>
                                                <MDBBtn rounded color="grey" className='mt-5' onClick={handleActionClick}>Get your
                                                    assessment</MDBBtn>
                                            </h6>
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pt-5 pb-5 ca-bg-image-home-1 ">
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="white-text p-0">Corporates</MDBCardTitle>
                                <h1 className="ca-text-light-green font-weight-bold">
                                    All you need to hire talents with special abilities
                                </h1>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="white-text font-weight-bold p-0">Finishing School : Campus to
                                    Corporate Program</MDBCardTitle>
                                <MDBCardText className="white-text">
                                    A unique internship based campus to Corporate program to build corporate Ready
                                    individuals. Identifies and prepares deserving candidates with right skills, mindset
                                    and connects them to opportunities for financial independence.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="white-text font-weight-bold p-0">Organisation
                                    Inclusion</MDBCardTitle>
                                <MDBCardText className="white-text">
                                    Corporate toolkit offers the resources and consulting required from creating
                                    Accessible infrastructure and workspaces to defining guidelines and policies,
                                    Sensitisation and On boarding trainings, best practices and more.
                                </MDBCardText>
                                <br />
                                <br />
                                <MDBCardTitle className="white-text font-weight-bold">E-Market place, Jobs, Mentors and
                                    more</MDBCardTitle>
                                <MDBCardText className="white-text">
                                    Promote entrepreneurship from the community, discover a wide range of service
                                    providers, mentors and freelancers, Identify the right candidates through our Ai
                                    based auto matching job modules.
                                </MDBCardText>
                                <br />
                                <br />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pt-5 pb-5 mt-5 mb-5">
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody className="p-0">
                                <MDBCardTitle className="p-0">Case Study</MDBCardTitle>
                                <h1 className="ca-text-purple display-4 font-weight-bold">
                                    Build your network of social good
                                </h1>
                                <a href='#!' className='black-text'>
                                    <h6 onClick={handleActionClick}>
                                        See more
                                        <MDBIcon icon='angle-double-right' className='ml-2' />
                                    </h6>
                                </a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media3}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardBody className="p-0">
                                <MDBCardText className="p-0">
                                    <p className='font-weight-bold'>Diversity and Inclusion</p>
                                    Differently Together: Committed to a diverse And inclusive workforce we are over
                                    8,000 employees strong at Societe Generale’s global solution centre in India from a
                                    variety of cultures, communities and generations who come together to innovate,
                                    co-create and collaborate. Our HR teams are continuously looking for ways to openly
                                    integrate every one one of our staff members be it through policy changes, creating
                                    an inclusively designed workplace, to facilitating trainings and awareness sessions
                                    to challenge unconscious biases.
                                    <br /><br />As an equal opportunity employer, everyone is welcome to join this dynamic
                                    workforce and make Your journey at SG worthwhile.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                {/*Our stories*/}
                <MDBRow className="pt-3 pb-5 ca-bg-ivory">
                    <div className="w-100 ">
                        <h1 className="text-center pt-3 font-weight-bolder ">
                            Our stories
                        </h1>
                        <div className="ca-text-underline" />
                        <br /><br />
                    </div>
                    <MDBCol md='6'>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                src="https://player.vimeo.com/video/506449846" allowFullScreen></iframe>
                        </div>
                        <br />
                        <h6 className='black-text'>1inclusion video</h6>
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media4}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                        </MDBCard>
                        <br />
                        <h6 className='black-text' onClick={handleActionClick}>Go to gallery <MDBIcon icon='angle-double-right'
                            className='ml-2' /></h6>

                    </MDBCol>
                </MDBRow>

                {/*Our partners*/}
                <MDBRow className="pt-3 pb-5 ">
                    <div className=" w-100 ">
                        <h1 className="text-center pt-3 font-weight-bolder ">
                            Our partners
                        </h1>
                        <div className="ca-text-underline" />
                    </div>
                </MDBRow>
                <MDBRow className='mb-5'>
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={nasscomFoundation} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Principal Partner</p>
                    </MDBCol>
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={ksf} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Principal Partner</p>
                    </MDBCol>
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={societeGenerale} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Designed and Executed by</p>
                    </MDBCol>
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={nish} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Academia Partner</p>
                    </MDBCol>
                </MDBRow>

                {/*Our Networks*/}
                <MDBRow className="pt-3 pb-5 ">
                    <div className=" w-100 ">
                        <h1 className="text-center pt-3 font-weight-bolder ">
                            Our Networks
                        </h1>
                        <div className="ca-text-underline" />
                    </div>
                </MDBRow>
                <MDBRow className='mb-5'>
                    <MDBCol md='3' />
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={theLalit} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Principal Partner</p>
                    </MDBCol>
                    <MDBCol md='3'>
                        <div className='d-flex justify-content-center'>
                            <img src={societeGenerale} className="img-fluid" alt="..." />
                        </div>
                        <p className='text-center font-weight-bold'>Designed and Executed by</p>
                    </MDBCol>
                    <MDBCol md='3' />
                </MDBRow>

                {/*Latest articles from blog*/}
                <MDBRow className="pt-3 pb-5 ca-bg-ivory">
                    <div className="w-100 ">
                        <h1 className="text-center pt-3 mt-3 font-weight-bolder ">
                            Latest articles from blog
                        </h1>
                        <div className="ca-text-underline" />
                        <br /><br />
                    </div>
                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media5}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                        </MDBCard>
                        <MDBCardBody className="p-0">
                            <MDBCardText className="p-0">
                                <p className="font-weight-bold">
                                    Our Diversity & Inclusion Vision and Journey
                                </p>
                                At Société General Global Solution Centre (SG GSC), we are a diverse workforce fostered in an inclusive environment where...
                            </MDBCardText>
                        </MDBCardBody>
                        <Link to="/blog-page-1">Read More</Link>
                    </MDBCol>

                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media6}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                        </MDBCard>
                        <MDBCardBody className="p-0">
                            <MDBCardText className="p-0">
                                <p className="font-weight-bold">
                                    How I became a (proud) Ally
                                                    </p>
                                                    My journey to become an ally wasn’t immediate or even straightforward, there was a time I held
                                                    conservative beliefs...
                                                </MDBCardText>
                        </MDBCardBody>
                        <Link to="/blog-page-2">Read More</Link>
                    </MDBCol>



                    <MDBCol md='4'>
                        <MDBCard className="bg-transparent shadow-none">
                            <MDBCardImage
                                top
                                src={media8}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />
                        </MDBCard>
                        <MDBCardBody className="p-0">
                            <MDBCardText className="p-0">
                                <p className="font-weight-bold">
                                    Accessibility for women with disabilities in times of COVID-19
                                                </p>
                                                Hearing the news of the lockdown in late March, I immediately thought of all the blind
                                                                                    students ...
                                            </MDBCardText>
                        </MDBCardBody>
                        <Link to="/blog-page-3">Read More</Link>
                    </MDBCol>
                </MDBRow>

            </div>
            <div ref={divConnectWithUs}>
                <ConnectWithUs />
            </div>
        </MDBContainer>
    );
}