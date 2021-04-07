import React, {useRef} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBRow
} from "mdbreact";
import organisation from "../../assets/images/corporate-tool-kit/organisation.png";
import media3 from "../../assets/images/corporate-tool-kit/image-1.png";

import edCast from '../../assets/images/corporate-tool-kit/ed-cast.png';
import nasscom from '../../assets/images/corporate-tool-kit/nasscom.png';
import ksf from '../../assets/images/corporate-tool-kit/ksf.png';
import digitalSchool from '../../assets/images/corporate-tool-kit/digital-school.png';
import {ConnectWithUs} from "../../common/ConnectWithUs";


export const CorporateToolKitPage: React.FC = () => {

    const divConnectWithUs = useRef(null);
    const handleActionClick = () => {
        // @ts-ignore
        divConnectWithUs.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    }

    return (
        <MDBContainer>
            <MDBNav className="font-weight-bold p-0">
                <MDBNavItem>
                    <MDBNavLink disabled to='#' link className='pl-0'>
                        Finishing School
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink active to='#' link className='black-text pl-0'>
                        Corporate tool kit
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <br/>
            <MDBRow>
                <MDBCol md='12'>
                    <h1 className="display-4 font-weight-bold">
                        Is my organisation really inclusive ?
                    </h1>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-5'>
                <MDBCol md='6' className='mb-3'>
                    <p>The key chanllenge faced by the organisations today is not having the access to right information
                        or lack of information to embark and continue the PWD and LGBTQ+ journey.</p>
                    <br/>
                    <p>Even if many organisations started the diversity journey, do they really understand the
                        inclusiveness mindset and workplace need.</p>
                    <MDBBtn rounded color="orange" className='mt-5' onClick={handleActionClick}>Check your readiness</MDBBtn>
                </MDBCol>
                <MDBCol md='6' className='mb-3'>
                    <img src={organisation} className="img-fluid" alt="..."/>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-4 pt-5 pb-5 ca-bg-corporate-toolkit-embrace'>
                <MDBRow className='mt-4 ml-3 mr-3'>
                    <MDBCol md='4' className="text-white ">
                        <p>CORPORATES</p>
                        <p className="display-4 ca-text-light-green font-weight-bold">
                            Why to Embrace Inclusiveness
                        </p>
                    </MDBCol>
                    <MDBCol md='3' className="text-white">
                        <h4>Bigger talent pool & Better decision making</h4>
                        <p>Expanding your recruitment searches to more diverse candidates-including background,
                            ethnicity, age, etc. Widens your talent pool and increases your chances of finding the best
                            hire. Diverse teams make better decisions.</p>
                    </MDBCol>
                    <MDBCol md='5' className="text-white">
                        <h4>Increased employee engagement and trust</h4>
                        <p>When employees feel included, they’re more engaged. Highly engaged employees go the extra
                            mile for the organisation. The higher engagement has a ripple effect on Profitability, team
                            morale and retention.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='ml-3 mr-3'>
                    <MDBCol md='4'>
                    </MDBCol>
                    <MDBCol md='3' className="text-white">
                        <h4>Social responsibility</h4>
                        <br/>
                        <p>To work an ethical framework and obligation to work and cooperate with other individuals
                            and</p>
                        <MDBBtn rounded className='mt-5 cyan-text font-weight-bold' color='light' onClick={handleActionClick}>Talk to us</MDBBtn>
                    </MDBCol>
                    <MDBCol md='5' className="text-white">
                        <h4>New perspectives and Innovation</h4>
                        <br/>
                        <p>Your company has a much higher chance of coming up with fresh ideas with a more diverse
                            group. The Harvard Business review found a statistically significant relationship between
                            diversity and innovation outcomes.</p>
                    </MDBCol>
                </MDBRow>
            </MDBRow>
            <MDBRow className='ca-bg-ivory'>
                <MDBCol md='6' className='mt-5'>
                    <p>BENEFITS</p>
                    <h1 className='ca-text-orange font-weight-bolder'>How we can help</h1>
                </MDBCol>
                <MDBCol md='6' className='mt-5'>
                    <div>
                        <h1 className='font-weight-bolder'>Work place Assessment</h1>
                        <p>Enable Organisations for self -assessment of inclusivity Readiness and course correction
                            steps.</p>
                    </div>
                    <div>
                        <h1 className='font-weight-bolder'>Learning and development</h1>
                        <p>Tailor made training for inclusiveness and mindset change. Help in career planning / Upskill
                            journey path</p>
                    </div>
                    <div>
                        <h1 className='font-weight-bolder'>Consulting Services</h1>
                        <p>Evolved sound HR practices with tailer made requirement Processes. Best practices and
                            guidelines for equality in workplace facilities including assistive technologies. Have the
                            access to right information about laws, regulation, best practices, etc. for informed
                            decision making.</p>
                    </div>
                    <div>
                        <MDBBtn rounded color='light' className='mt-5 float-right font-weight-bold cyan-text mb-5'onClick={handleActionClick}>Reach
                            to us</MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-5'>
                <p className='font-weight-bold display-4 grey-text ml-3'>Inclusive Assessment & Training for you</p>
            </MDBRow>
            <MDBNav className="font-weight-bold ">
                <MDBNavItem>
                    <MDBNavLink active to='#' link className='black-text pl-0 pl-1'>
                        Assessment
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink disabled to='#' link>
                        Training
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <MDBRow className='mt-5'>
                <MDBCol md='4'>
                    <MDBCard className="bg-light shadow-none ca-min-v-280">
                        <MDBCardBody className="">
                            <MDBCardTitle className=" font-weight-bold p-0">Inception/ Beginner's</MDBCardTitle>
                            <br/>
                            <MDBCardText className="">
                                Organisations yet to start the inclusive journey.
                            </MDBCardText>
                            <br/>
                            <MDBBtn rounded={true} size="sm" className="btn btn-dark shadow-none mt-4" onClick={handleActionClick}>
                                Check your readiness
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard className="bg-light shadow-none ca-min-v-280 mb-2">
                        <MDBCardBody className="">
                            <MDBCardTitle className=" font-weight-bold p-0">Growth/ Intermediate</MDBCardTitle>
                            <br/>
                            <MDBCardText className="">
                                Organisations who have started the inclusive journey but going through growth,
                                transition.
                            </MDBCardText>
                            <br/>
                            <MDBBtn rounded={true} size="sm" className="btn btn-dark shadow-none mt-4" onClick={handleActionClick}>
                                Reach to us
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>

                    <MDBCard className="bg-light shadow-none ca-min-v-280">

                        <MDBCardBody className="">
                            <MDBCardTitle className=" font-weight-bold p-0">Matured/ Advance</MDBCardTitle>
                            <br/>
                            <MDBCardText className="">
                                Organisations who have already Embrace the inclusive journey and want to check the
                                maturity of readiness.
                            </MDBCardText>
                            <br/>
                            <MDBBtn rounded={true} size="sm" className="btn btn-dark shadow-none mt-4" onClick={handleActionClick}>
                                Check your readiness
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow className="pt-5 pb-5 ">
                <MDBCol md='4'>
                    <MDBCard className="bg-transparent shadow-none">
                        <MDBCardBody className="p-0">
                            <MDBCardTitle className="p-0">Case Study</MDBCardTitle>
                            <h1 className="ca-text-purple display-4 font-weight-bold">
                                How IBM built a PWD inclusive workforce
                            </h1>
                            <a href='#!' className='black-text'>
                                <h6 onClick={handleActionClick}>
                                    See more
                                    <MDBIcon icon='angle-double-right' className='ml-2'/>
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
                                If you are looking out to source new employee talent, you can find gold in a
                                population that is often overlooked and underemployed. However, most of the
                                organizations complained that tapping this potentially large talent is a
                                challenge in itself.
                                <br/><br/>
                                Ritesh Rajani, Diversity Engagement Partner, IBM Asia Pacific
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow className='mb-5'>
                <MDBCol md='12'>
                    <div className='font-weight-bold display-4 grey-text mb-3'>Our Partners</div>
                </MDBCol>

                <MDBCol md='3'>
                    <img src={edCast} className="img-fluid" alt="..."/>
                </MDBCol>
                <MDBCol md='3'>
                    <img src={nasscom} className="img-fluid" alt="..."/>

                </MDBCol>
                <MDBCol md='3'>
                    <img src={ksf} className="img-fluid" alt="..."/>
                </MDBCol>
                <MDBCol md='3'>
                    <img src={digitalSchool} className="img-fluid" alt="..."/>
                </MDBCol>
            </MDBRow>
            <div ref={divConnectWithUs}>
            <ConnectWithUs/>
            </div>
        </MDBContainer>
    )
}