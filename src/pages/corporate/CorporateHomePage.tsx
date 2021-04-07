import React from "react";

import media1 from '../../assets/images/corporate-home/corporate-home-page-media-1.png';
import media2 from '../../assets/images/corporate-home/corporate-home-page-media-2.png';
import media3 from '../../assets/images/corporate-home/corporate-home-page-media-3.png';

import image1 from '../../assets/images/corporate-home/corporate-image-1.png';
import image2 from '../../assets/images/corporate-home/corporate-image-2.png';

import carousel1 from "../../assets/images/corporate-home/carousel-1.png";
import carousel2 from "../../assets/images/corporate-home/carousel-2.png";


import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBMedia,
    MDBNavLink,
    MDBRow,
    MDBView
} from "mdbreact";


export const CorporateHomePage: React.FC = () => {

    return (
        <>
            <MDBContainer className="mt-3 mb-5">
                <div className="">
                    <MDBRow>
                        {/*Left Container*/}
                        <MDBCol md='9'>


                            {/*MDBCarousel*/}
                            <MDBCarousel
                                activeItem={1}
                                length={2}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1 p-0"
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
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={carousel2}
                                                alt="Second slide"
                                            />
                                        </MDBView>
                                    </MDBCarouselItem>
                                </MDBCarouselInner>
                            </MDBCarousel>


                            <br/>
                            <MDBRow className="p-0 m-0">
                                <MDBCol md="12">
                                    <h6 className="font-weight-bold">Hi IBM</h6>
                                </MDBCol>

                                <MDBCol md="3" className="ca-bg-silver">
                                    <MDBRow className="pt-3 pb-3">
                                        <MDBCol md='3'>
                                            <MDBIcon icon="suitcase" size="2x"
                                                     className="pr-3 align-middle"/>
                                        </MDBCol>
                                        <MDBCol md='9'>
                                            <strong>Create a job post / Search profile</strong>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol md="3" className="ca-bg-silver">
                                    <MDBRow className="pt-3 pb-3">
                                        <MDBCol md='3'>
                                            <MDBIcon icon="calendar" size="2x"
                                                     className="pr-3 align-middle"/>
                                        </MDBCol>
                                        <MDBCol md='9'>
                                            <strong className="align-middle">Create an Event</strong>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol md="3" className="ca-bg-silver">
                                    <MDBRow className="pt-3 pb-3">
                                        <MDBCol md='3'>
                                            <MDBIcon icon="edit" size="2x"
                                                     className="pr-3 align-middle"/>
                                        </MDBCol>
                                        <MDBCol md='9'>
                                            <strong>Create your Own home page</strong>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol md="3" className="ca-bg-silver">
                                    <MDBRow className="pt-3 pb-3">
                                        <MDBCol md='3'>
                                            <MDBIcon icon="search" size="2x"
                                                     className="pr-3 "/>
                                        </MDBCol>
                                        <MDBCol md='9'>
                                            <strong>Search for A partner</strong>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                            </MDBRow>


                            {/*Recommended Profiles*/}
                            <br/>
                            <MDBRow>
                                <MDBCol md="6">
                                    <h6 className="font-weight-bold">Recommended Profiles</h6>
                                </MDBCol>
                                <MDBCol md="6">
                                    <a href="#" className="float-right">Show all</a>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="pt-2 ">
                                <MDBCol md='4'>
                                    <MDBCard className="bg-transparent shadow-none">
                                        <MDBMedia tag="li">
                                            <MDBMedia left href="#" className="shadow-none">
                                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
                                            </MDBMedia>
                                            <MDBMedia body>
                                                <MDBMedia heading>
                                                    Swetha Sharma
                                                </MDBMedia>
                                                <small>Senior Program manager</small>
                                                <br/>
                                                <small>Societe Générale, Bangalore</small>
                                                 </MDBMedia>
                                        </MDBMedia>
                                        <MDBCardBody className="p-0">
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <a className="float-right">View</a></MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md='4'>
                                    <MDBCard className="bg-transparent shadow-none">
                                        <MDBMedia tag="li">
                                            <MDBMedia left href="#" className="shadow-none">
                                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
                                            </MDBMedia>
                                            <MDBMedia body>
                                                <MDBMedia heading>
                                                    Tom Brown
                                                </MDBMedia>
                                                <small>Senior Program manager</small>
                                                <br/>
                                                <small>Societe Générale, Bangalore</small>
                                            </MDBMedia>
                                        </MDBMedia>
                                        <MDBCardBody className="p-0">
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <a className="float-right">View</a></MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md='4'>
                                    <MDBCard className="bg-transparent shadow-none">
                                        <MDBMedia tag="li">
                                            <MDBMedia left href="#" className="shadow-none">
                                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
                                            </MDBMedia>
                                            <MDBMedia body>
                                                <MDBMedia heading>
                                                    Anna Smith
                                                </MDBMedia>
                                                <small>Senior Program manager</small>
                                                <br/>
                                                <small>Societe Générale, Bangalore</small>
                                            </MDBMedia>
                                        </MDBMedia>
                                        <MDBCardBody className="p-0">
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <a className="float-right">View</a></MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>



                            {/*Popular Programs*/}
                            <br/>
                            <MDBRow>
                                <MDBCol md="6">
                                    <h6 className="font-weight-bold">Popular Programs</h6>
                                </MDBCol>
                                <MDBCol md="6">
                                    <a href="#" className="float-right">Show all</a>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="pt-2 ">
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Accessibility Survey</p>
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Mentorship program</p>
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Empower program by TCS</p>
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>


                                            <br/>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>


                            {/*Upcoming events*/}
                            <br/>
                            <MDBRow>
                                <MDBCol md="6">
                                    <h6 className="font-weight-bold">Upcoming events</h6>
                                </MDBCol>
                                <MDBCol md="6">
                                    <a href="#" className="float-right">Show all</a>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="pt-2 ">
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Tech innovation day</p>
                                            <MDBCardText className="p-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Word press accessibility day</p>
                                            <MDBCardText>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
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
                                        <MDBCardBody className="p-0">
                                            <p className="font-weight-bold">Accessibility club conference</p>
                                            <MDBCardText>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                <br/><br/>
                                                <MDBRow>
                                                    <MDBCol md="8"><MDBIcon far icon="calendar"
                                                                              size="lg"/> 25Dec20</MDBCol>
                                                    <MDBCol md="4">View</MDBCol>
                                                </MDBRow>
                                            </MDBCardText>


                                            <br/>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>

                        </MDBCol>

                        {/*Right Container*/}
                        <MDBCol md='3'>

                            {/*Profile*/}
                            <MDBRow className="pt-5 pb-5 ca-bg-silver m-0">
                                <MDBCol md='3'>
                                    <MDBIcon icon="building" className="text-danger" size="4x"/>
                                </MDBCol>
                                <MDBCol md='9'>
                                    <strong>IBM</strong>
                                    <br/>
                                    <small>IBM Technologies</small>
                                    <br/>
                                    <small>Societe Générale, Bangalore</small>
                                </MDBCol>
                                <MDBCol md='12' className="text-center">
                                    {/* <MDBBtn rounded={true} size="sm" className="btn btn-light shadow-none mt-4"> */}
                                        <MDBNavLink size="sm" to="/corporatesProfilePage">Update your profile</MDBNavLink>
                                    {/* </MDBBtn> */}
                                </MDBCol>
                            </MDBRow>

                            {/*Jobs*/}
                            <br/>
                            <strong>Jobs</strong>
                            <MDBRow className="pt-4 pb-4 ca-bg-silver m-0">
                                <MDBCol md='9'>
                                    <small> Posted jobs</small>
                                </MDBCol>
                                <MDBCol md='3'>
                                    <strong> 5</strong>
                                </MDBCol>
                                <br/><br/>
                                <MDBCol md='9'>
                                    <small> Applications recieved</small>
                                </MDBCol>
                                <MDBCol md='3'>
                                    <strong>85</strong>
                                </MDBCol>
                            </MDBRow>

                            {/*Events*/}
                            <br/>
                            <strong>Events</strong>
                            <MDBRow className="pt-4 pb-4 ca-bg-silver m-0">
                                <MDBCol md='9'>
                                    <small>New events posted</small>
                                </MDBCol>
                                <MDBCol md='3'>
                                    <strong>4</strong>
                                </MDBCol>
                                <br/><br/>
                                <MDBCol md='9'>
                                    <small>Upcoming events</small>
                                </MDBCol>
                                <MDBCol md='3'>
                                    <strong> 12</strong>
                                </MDBCol>
                            </MDBRow>

                            <br/><br/>
                            <MDBCardImage
                                top
                                src={image1}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />

                            <br/><br/>
                            <MDBCardImage
                                top
                                src={image2}
                                overlay='white-slight'
                                hover
                                waves
                                alt='MDBCard image cap'
                            />

                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        </>
    )
}