import React, {useRef, useState, useEffect} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBRow
} from "mdbreact";
import {ConnectWithUs} from "../common/ConnectWithUs";


import image2 from "../assets/images/about-us/image2.png";

import pic1 from "../assets/images/about-us/pic4.png";
import pic2 from "../assets/images/about-us/pic4.png";


import alaguMuthiah from "../assets/images/about-us/team/alagu-muthiah.png";
import ankitaDixit from "../assets/images/about-us/team/ankita-dixit.png";
import anuragKakustham from "../assets/images/about-us/team/anurag-kakustham.png";
import avishkarThangavelu from "../assets/images/about-us/team/avishkar-thangavelu.png";
import baburam from "../assets/images/about-us/team/baburam.png";
import bobbyJohn from "../assets/images/about-us/team/bobby-john.png";
import candiceRodrigues from "../assets/images/about-us/team/candice-rodrigues.png";
import govinduPuchakala from "../assets/images/about-us/team/govindu-puchakala.png";
import gowthamanRajan from "../assets/images/about-us/team/gowthaman-rajan.png";
import heartin from "../assets/images/about-us/team/heartin.png";
import jayesh from "../assets/images/about-us/team/jayesh.jpg";
import honishaMoorjani from "../assets/images/about-us/team/honisha-moorjani.png";
import kaushikGhosh from "../assets/images/about-us/team/kaushik-ghosh.png";
import kayenatSulatana from "../assets/images/about-us/team/kayenat-sulatana.png";
import murugavel from "../assets/images/about-us/team/murugavel.png";
import nagarajanKrishnan from "../assets/images/about-us/team/nagarajan-krishnan.png";
import nibu from "../assets/images/about-us/team/nibu.png";
import nidhiHatwalne from "../assets/images/about-us/team/nidhi-hatwalne.png";
import nishanCorrea from "../assets/images/about-us/team/nishan-correa.png";
import pragyaSingla from "../assets/images/about-us/team/pragya-singla.png";
import prasadNayak from "../assets/images/about-us/team/prasad-nayak.png";
import preet from "../assets/images/about-us/team/preet.png";
import rashmi from "../assets/images/about-us/team/rashmi.png";
import rejunPhilip from "../assets/images/about-us/team/rejun-philip.png";
import sagarRamgare from "../assets/images/about-us/team/sagar-ramgare.png";
import santhoshVernekar from "../assets/images/about-us/team/santhosh-vernekar.png";
import soniaThomas from "../assets/images/about-us/team/sonia-thomas.png";
import sriSampada from "../assets/images/about-us/team/sri-sampada.png";
import sudeepPattanaik from "../assets/images/about-us/team/sudeep-pattanaik.png";
import sureshKrishnan from "../assets/images/about-us/team/suresh-krishnan.png";
import trinetriArora from "../assets/images/about-us/team/trinetri-arora.png";
import utkarashGupta from "../assets/images/about-us/team/utkarash-Gupta.png";
import vivek from "../assets/images/about-us/team/vivek.png";
import ashokPamidi from "../assets/images/about-us/advisory-team/ashok-pamidi.png";
import mageshSambasivan from "../assets/images/about-us/advisory-team/magesh-sambasivan.png";
import maheshBathija from "../assets/images/about-us/advisory-team/mahesh-bathija.png";
import mathewRuneckles from "../assets/images/about-us/advisory-team/mathew-runeckles.png";
import pankajamSridevi from "../assets/images/about-us/advisory-team/pankajam-sridevi.png";
import richaSingh from "../assets/images/about-us/advisory-team/richa-singh.png";


export const AboutUs: React.FC = () => {
    const [collapseID, setCollapseID] = useState(false);

    const divConnectWithUs = useRef(null);
    const handleActionClick = () => {
        // @ts-ignore
        divConnectWithUs.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    }
    const toggleCollapse = () => {
        setCollapseID(!collapseID);
    }

    return (
        <MDBContainer>
            <div className="container-xl">

                <MDBRow className='ca-bg-black'>
                    <MDBCol md='6' className='pl-4'>
                        <br/>
                        <br/>
                        <br/>
                        <h4 className='white-text font-weight-bolder'>About Inclusion</h4>
                        <br/><br/>
                        <p className='orange-text display-4 font-weight-bold'>A Partner of Choice
                            for all DNI Services</p>
                        <br/>
                        <h3 className='orange-text'>“Building balanced organisations where
                            inclusiveness happens unconsciously”
                            (#unconciousinclusivity)</h3>
                        <br/><br/>
                        <br/><br/>
                        <br/>
                    </MDBCol>
                    <MDBCol md='6'/>
                </MDBRow>
                <MDBRow className='ca-bg-light-yellow'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </MDBRow>
                <MDBRow className='ca-bg-light-yellow'>
                    <MDBCol md='4' className='pl-4'>
                        <p className='display-3 orange-text font-weight-bold'>Who we Are</p>
                    </MDBCol>
                    <MDBCol md='8' className='text-black font-weight-bolder fo'>
                        <p>
                            At 1inclusion we believe in bringing People, Communities and technologies together to build
                            a culture of inclusion. 1inclusion is a one stop platform enabling Organisations achieve
                            their objectives around Diversity & Inclusion by providing the leadership, means, tools,
                            templates and resources needed to engage in this journey.
                        </p>
                        <br/>
                        <p>
                            We focus on enabling the community to identify opportunities to achieve a respectable
                            livelihood through professional skill development programs, entrepreneurship and leveraging
                            the wide network.
                        </p>
                        <br/>
                        <p>
                            The platform brings together the Community, Academia,Corporates, Service providers, NGO’s,
                            Government institutions and all Other stakeholders alike.
                        </p>
                    </MDBCol>
                    <MDBCol md='12' className='p-2'>
                        <MDBBtn rounded={true} size="sm" className="btn-yellow float-right mt-5 mr-5 mb-5"
                                onClick={handleActionClick}>
                            Connect with us
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='justify-content-center'>
                    <p className='display-3 orange-text font-weight-bold'>Our network</p>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='4'>
                        <h3 className='ca-text-light-brown font-weight-bolder'>Diverse Community</h3>
                        <hr/>
                        <p>Social connect, Up skilling, Jobs, Mentorship and Guidance </p>
                        <br/>
                        <h3 className='ca-text-light-cyan font-weight-bolder'>Academia</h3>
                        <hr/>
                        <p>1inclusion Academy : Identifies, Prepares and Connects them to opportunities.</p>
                        <br/>
                        <h3 className='ca-text-light-purple font-weight-bolder'>Corporates</h3>
                        <hr/>
                        <p>Get diversified talents, Corporate toolkit for organisation inclusion assessment
                            and consulting.</p>
                    </MDBCol>
                    <MDBCol md='4' className=''>
                        <div className='d-flex justify-content-center'>
                            <img
                                src={image2}
                                alt="About Us"
                                className='img-fluid'
                            />
                        </div>
                    </MDBCol>
                    <MDBCol md='4' className=''>
                        <h3 className='ca-text-light-maroon font-weight-bolder'>Service Channels</h3>
                        <hr/>
                        <p>Database of Accessibility resources and Training Institutes</p>
                        <br/>
                        <h3 className='ca-text-light-navyBlue font-weight-bolder'>Ecosystem <span
                            className='ca-text-light-navyBlue font-weight-bolder'>(NGO’s,Non profit & Govt)</span></h3>
                        <hr/>
                        <p>Connect directly to avail programme
                            benefits</p>
                        <br/>
                        <h3 className='ca-text-light-skyblue font-weight-bolder'>Assistive manufacturers</h3>
                        <hr/>
                        <p>Market place for new offerings</p>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className='ca-bg-silver ca-min-v-150 mb-3 '>
                        <MDBRow className="pt-3 pb-5 ">
                            <div className=" w-100 ">
                                <h1 className="text-center pt-3 font-weight-bolder ">
                                    Core team</h1>
                                <div className="ca-text-underline color-light-maroon"/>
                            </div>
                        </MDBRow>

                        <MDBRow className='justify-content-center'>
                            <MDBCol size="auto" className="">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={nibu} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Chandranathan Nibu</div>
                                            Founder
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={nidhiHatwalne} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Nidhi Hatwalne</div>
                                            Product Manager
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={rashmi} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Rashmi Kamal</div>
                                            Program Manager
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={heartin} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Heartin Kanikathottu</div>
                                            Engineering Head
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={trinetriArora} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Trinetri Arora</div>
                                            Content Head
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>

                        <MDBCollapse id="basicCollapse" isOpen={collapseID}>
                            <MDBRow className='justify-content-center'>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={sureshKrishnan} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Suresh Krishnan</div>
                                                Mentor - Veteran connect
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={vivek} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Vivek</div>
                                                Learning Partners
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={soniaThomas} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Sonia Thomas</div>
                                                Learning Partners
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={nishanCorrea} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Nishan Correa</div>
                                                Finishing School
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={baburam} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Baburam</div>
                                                Finishing School
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={preet} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Preet</div>
                                                HR Partner
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={nagarajanKrishnan} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Nagarajan Krishnan</div>
                                                Community Connect
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={bobbyJohn} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Bobby John</div>
                                                CSRIT Lead
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={sudeepPattanaik} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Sudeep Pattanaik</div>
                                                Toolkit for Corporate
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={kaushikGhosh} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Kaushik Ghosh</div>
                                                Head - Design thinking
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={gowthamanRajan} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Gowthaman Rajan</div>
                                                Lead Designer
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                                                        <MDBCardImage className="img-fluid" src={jayesh} waves/>
                                                                        <MDBCardBody className="bg-dark">
                                                                            <MDBCardText className='text-white'>
                                                                                <div className="font-weight-medium">Jayesh Nair</div>
                                                                                Lead Engineer
                                                                            </MDBCardText>
                                                                        </MDBCardBody>
                                                                    </MDBCard>
                                                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={candiceRodrigues} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Candice Rodrigues</div>
                                                Content Lead
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={honishaMoorjani} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Hanisha Moorjani</div>
                                                Comms Partner
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={murugavel} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Murugavel</div>
                                                Mobile App
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={pragyaSingla} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Pragya Singla</div>
                                                Mobile App
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={rejunPhilip} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Rejun Philip</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={anuragKakustham} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Anurag Kakustham</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={avishkarThangavelu} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Avishkar Thangavelu</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={alaguMuthiah} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Alagu Muthiah</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={sagarRamgare} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Sagar Ramgare</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={utkarashGupta} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Utkarsh Gupta</div>
                                                Widget
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={prasadNayak} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Prasad Nayak</div>
                                                Website
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={sriSampada} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Sri Sampada</div>
                                                Website
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={ankitaDixit} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Ankita Dixit</div>
                                                Website
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={santhoshVernekar} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Santhosh Vernekar</div>
                                                Website
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={kayenatSulatana} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Kayenat Sulatana</div>
                                                Platform
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={govinduPuchakala} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Govindu Puchakala</div>
                                                Mobile app
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                        <MDBCardImage className="img-fluid" src={pic1} waves/>
                                        <MDBCardBody className="bg-dark">
                                            <MDBCardText className='text-white'>
                                                <div className="font-weight-medium">Santhosh Kumar</div>
                                                Mobile app
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                            </MDBRow>
                        </MDBCollapse>

                        <MDBRow className="pt-3 pb-5 ">
                            <div className=" w-100 ">
                                <div className="text-center pt-3 font-weight-bolder ">
                                    {!collapseID && (
                                        <MDBBtn
                                            color="elegant"
                                            onClick={() => toggleCollapse()}
                                            style={{marginBottom: "1rem", backgroundColor: "transparent"}}
                                        >Meet more team members</MDBBtn>
                                    )}
                                    {collapseID && (
                                        <MDBBtn
                                            color="elegant"
                                            onClick={() => toggleCollapse()}
                                            style={{marginBottom: "1rem", backgroundColor: "transparent"}}
                                        >Show less</MDBBtn>
                                    )}
                                </div>
                            </div>
                        </MDBRow>
                        <br/>
                        <MDBRow className="pt-3 pb-5 ">
                            <div className=" w-100 ">
                                <h1 className="text-center pt-3 font-weight-bolder ">
                                    Advisory team</h1>
                                <div className="ca-text-underline color-light-maroon"/>
                            </div>
                        </MDBRow>
                        <MDBRow className='justify-content-center'>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={ashokPamidi} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Ashok Pamidi</div>
                                            CEO, NASSCOM Foundation
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={pankajamSridevi} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Pankajam Sridevi</div>
                                            MD, Commonwealth Bank of Australia
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={richaSingh} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Richa Singh</div>
                                            Head LND, Lalit Group, Keshav Suri Foundation
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={mathewRuneckles} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Mathew Runeckles</div>
                                            Head of DNI, Société Générale
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={maheshBathija} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Mahesh Bathija</div>
                                            Head of CSR, Société Générale
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size="auto">
                                <MDBCard style={{width: "12rem", height: "18rem", marginBottom: "1rem"}}>
                                    <MDBCardImage className="img-fluid" src={mageshSambasivan} waves/>
                                    <MDBCardBody className="bg-dark">
                                        <MDBCardText className='text-white'>
                                            <div className="font-weight-medium">Magesh Sambasivan</div>
                                            Head HR, Société Générale
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        <br/>

                    </MDBCol>
                </MDBRow>

            </div>
            <div ref={divConnectWithUs}>
                <ConnectWithUs/>
            </div>
        </MDBContainer>
    )
}