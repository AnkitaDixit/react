import React from "react";

import media1 from '../../assets/images/candidate-home/candidate-home-page-media-1.png';
import media2 from '../../assets/images/candidate-home/candidate-home-page-media-2.png';
import media3 from '../../assets/images/candidate-home/candidate-home-page-media-3.png';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBFormInline,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import logo from '../../assets/images/logo.png';
import {useHistory} from "react-router";

export const CandidateHomePage: React.FC = () => {

    const history = useHistory();
    const handleUpdateProfile = () => {
        history.push("/candidate-profile");
    }

    return (
        <>
            <MDBContainer className="mt-3 mb-5">
                <div className="">
                <MDBRow>
                    {/*Left Container*/}
                    <MDBCol md='9'>


                        <MDBRow className="pt-5 pb-5 ca-bg-candidate-home-1 p-o m-0">
                            <MDBCol md='7'>
                                <img src={logo } alt="1inclusion" className="" width="32px"/>
                                <br/><br/>
                                <h3 className="font-weight-bold">The Best Careers for Diverse Workforce </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is
                                </p>
                                <MDBBtn rounded={true} size="sm" className="btn shadow-none m-0">
                                    Know more
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>

                        {/*Popular courses*/}
                        <br/>
                        <MDBRow>
                            <MDBCol md="6">
                                <h6 className="font-weight-bold">Popular courses</h6>
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
                                        <p className="font-weight-bold">Data science 1</p>
                                        <MDBCardText className="p-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                                        <p className="font-weight-bold">Cloud infrastructure</p>
                                        <MDBCardText className="p-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                                        <p className="font-weight-bold">Crytocurrency development</p>
                                        <MDBCardText className="p-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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

                        {/*Jobs Details*/}
                        <hr/>
                        <MDBRow>
                            <MDBCol md='2'><h6 className="font-weight-bold">Recent Jobs</h6> </MDBCol>
                            <MDBCol md='8'>
                                <MDBFormInline className="p-0">
                                    <MDBInput
                                        label='Full Time'
                                        type='checkbox'
                                        id='checkbox1'
                                        containerClass='mr-5'
                                    />
                                    <MDBInput
                                        label='Part Time'
                                        type='checkbox'
                                        id='checkbox2'
                                        containerClass='mr-5'
                                    />
                                    <MDBInput
                                        label='Contract'
                                        type='checkbox'
                                        id='checkbox3'
                                        containerClass='mr-5'
                                    />
                                </MDBFormInline>
                            </MDBCol>
                            <MDBCol md='2' className="float-left">
                                <a href="#!">Show all</a>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBTable small striped>
                            <MDBTableHead>
                                <tr>
                                    <th>Posted</th>
                                    <th>Position</th>
                                    <th>Status</th>
                                    <th>Skills</th>
                                    <th>Company</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>This week</td>
                                    <td>
                                        <strong>Sr Project Manager</strong>
                                        <br/>
                                        <small> Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
                                            is</small>
                                    </td>
                                    <td>New</td>
                                    <td>MySQL, Project Mgmt</td>
                                    <td>CAPCO India</td>
                                </tr>
                                <tr>
                                    <td>This week</td>
                                    <td>
                                        <strong>Sr Project Manager</strong>
                                        <br/>
                                        <small> Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
                                            is</small>
                                    </td>
                                    <td>New</td>
                                    <td>MySQL, Project Mgmt</td>
                                    <td>CAPCO India</td>
                                </tr>
                                <tr>
                                    <td>This week</td>
                                    <td>
                                        <strong>Sr Project Manager</strong>
                                        <br/>
                                        <small> Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
                                            is</small>
                                    </td>
                                    <td>New</td>
                                    <td>MySQL, Project Mgmt</td>
                                    <td>CAPCO India</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>

                        <MDBRow>
                            <MDBCol md="12">
                                <MDBBtn rounded={true} size="sm" className="float-right btn btn-light shadow-none m-0">
                                    Search for more jobs
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    {/*Right Container*/}
                    <MDBCol md='3'>
                        {/*Profile*/}
                        <MDBRow className="pt-5 pb-5 ca-bg-silver m-0">
                            <MDBCol md='3'>
                                <MDBIcon icon="user" className="text-danger" size="4x"/>
                            </MDBCol>
                            <MDBCol md='9'>
                                <strong>Swetha Sharma</strong>
                                <br/>
                                <small>Senior Software Engineer</small>
                                <br/>
                                <small>Societe Générale, Bangalore</small>
                            </MDBCol>
                            <MDBCol md='12' className="text-center">
                                <MDBBtn rounded={true} size="sm" className="btn btn-light shadow-none mt-4" onClick={handleUpdateProfile}>
                                    Update your profile
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>

                        {/*Jobs*/}
                        <br/>
                        <strong>Jobs</strong>
                        <MDBRow className="pt-4 pb-4 ca-bg-silver m-0">
                            <MDBCol md='9'>
                                <small> My applications</small>
                            </MDBCol>
                            <MDBCol md='3'>
                               <strong> 0</strong>
                            </MDBCol>
                            <br/><br/>
                            <MDBCol md='9'>
                                <small> My applications</small>
                            </MDBCol>
                            <MDBCol md='3'>
                                <strong>85</strong>
                            </MDBCol>
                        </MDBRow>

                        {/*Courses*/}
                        <br/>
                        <strong>Courses</strong>
                        <MDBRow className="pt-4 pb-4 ca-bg-silver m-0">
                            <MDBCol md='9'>
                                <small>My applications</small>
                            </MDBCol>
                            <MDBCol md='3'>
                                <strong>5</strong>
                            </MDBCol>
                            <br/><br/>
                            <MDBCol md='9'>
                                <small>My applications</small>
                            </MDBCol>
                            <MDBCol md='3'>
                                <strong> 1</strong>
                            </MDBCol>
                            <br/><br/>
                            <MDBCol md='9'>
                                <small> My applications</small>
                            </MDBCol>
                            <MDBCol md='3'>
                                <strong>81</strong>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                </div>
            </MDBContainer>
        </>
    )
}