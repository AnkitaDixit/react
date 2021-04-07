import React from "react";
import {MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBProgress, MDBRow} from "mdbreact";
import candidateprofilepic from '../../assets/images/candidate-profile/candidate-profile-pic.png';
import mentoringprogram from '../../assets/images/candidate-profile/mentoring-program.png';
import lGBTQMentoringPrgm from '../../assets/images/candidate-profile/LGBTQMentoringPrgm.png';
import {useHistory} from "react-router";

export const CandidateProfilePage= (props: any) => {
    console.log(props)
    const history = useHistory();
    const handleCandidateProfileBasicEdit = () => {
        history.push("/candidate-profile-basic-edit");
    }

    return (
        <>
            <MDBContainer className="mt-3 mb-5">
                <div className='ca-bg-silver'>
                    <MDBRow className='pt-5 pb-5 ml-3'>
                        <MDBCol md='6'>
                            <h1 className='display-5 font-weight-bold'>My Profile Page</h1>
                            <h3>Candidate</h3>
                        </MDBCol>
                        <MDBCol md='3'>
                            <p className='font-weight-bold'>Profile Completeness 15%</p>
                            <MDBProgress material value={15} height="8px" color="danger"/>
                        </MDBCol>
                        <MDBCol md='3'>
                            <p className='font-weight-bold'>Import from LinkedIn <MDBIcon fab icon="linkedin" size='2x'
                                                                                          className='text-info'/></p>
                        </MDBCol>
                    </MDBRow>
                </div>
                <div>
                    <MDBRow className='pt-5 pb-5 ml-3'>
                        <MDBCol md='9'>
                            <MDBRow className=''>
                                <MDBCol md='3'>
                                    <MDBCardImage
                                        top
                                        src={candidateprofilepic}
                                        hover
                                        waves
                                        alt='Candidate Profile Pic'
                                    />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <p><strong>{props.User.firstName} {props.User.lastName} </strong> <MDBIcon className='float-right' icon="pen"
                                                                                onClick={handleCandidateProfileBasicEdit}/>
                                    </p>
                                    <p>Add title</p>
                                    <p>Add organisation</p>
                                    <p>Add mobile number</p>
                                    <p>{props.User.username}</p>
                                </MDBCol>
                                <MDBCol md='5'>
                                    <p>Mentor assigned</p>
                                    <p className='text-primary'><strong>Rajan Guru</strong></p>
                                    <p>Project Manager</p>
                                    <p>Cisco Systems India</p>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>About</strong><MDBIcon className='float-right'
                                                                                                icon="pen"
                                                                                                onClick={handleCandidateProfileBasicEdit}/>
                                        </p>
                                        <p>Add description about your profile</p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Profile completeness</strong></p>
                                        <p>Add description about your profile</p>
                                        <p>3 pending actions</p>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Resume</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'
                                                                        onClick={handleCandidateProfileBasicEdit}>Update</strong>
                                            </p>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Skills</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'
                                                                        onClick={handleCandidateProfileBasicEdit}>Add</strong>
                                            </p></MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Recommendations</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'
                                                                        onClick={handleCandidateProfileBasicEdit}>Add</strong>
                                            </p></MDBCol>
                                        </MDBRow>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Education</strong> <MDBIcon
                                            className='float-right' icon="plus-circle"
                                            onClick={handleCandidateProfileBasicEdit}/></p>
                                        <p>National Institute of Technology, Trichy <MDBIcon className='ml-5'
                                                                                             icon="pen"
                                                                                             onClick={handleCandidateProfileBasicEdit}/>
                                        </p>
                                        <p>Masters in Technology</p>
                                        <p>July 2009- Aug 2013</p>

                                        <hr/>

                                        <p>National Institute of Technology, Trichy <MDBIcon className='ml-5'
                                                                                             icon="pen"
                                                                                             onClick={handleCandidateProfileBasicEdit}/>
                                        </p>
                                        <p>Bachelors in Technology</p>
                                        <p>July 2009- Aug 2013</p>

                                        <p className='float-right'>See 2 more</p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Employment</strong> <MDBIcon
                                            className='float-right' icon="plus-circle"
                                            onClick={handleCandidateProfileBasicEdit}/></p>
                                        <p>Tata Consultancy Services <MDBIcon className='ml-5' icon="pen"
                                                                              onClick={handleCandidateProfileBasicEdit}/>
                                        </p>
                                        <p>Software Engineer</p>
                                        <p>April 2013- Mar 2017</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem. Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                                            printing</p>

                                        <hr/>

                                        <p>Tata Consultancy Services <MDBIcon className='ml-5' icon="pen"
                                                                              onClick={handleCandidateProfileBasicEdit}/>
                                        </p>
                                        <p>Software Engineer</p>
                                        <p>April 2013- Mar 2017</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Resume</strong></p>
                                        <p className="text-center"><strong>Swetha Sharma Sr software eng
                                            resume.pdf</strong></p>
                                        <p className="text-center">Uploaded 6 months back</p>
                                        <p className="text-center">
                                            <MDBBtn rounded={true} size="sm" className="btn btn-outline-black mt-1">
                                                Update Resume
                                            </MDBBtn>
                                        </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='3'>
                            <div>

                                <MDBCardImage
                                    top
                                    src={mentoringprogram}
                                    hover
                                    waves
                                    alt='Mentoring Program'
                                />
                            </div>
                            <div>
                                <MDBCardImage
                                    top
                                    src={lGBTQMentoringPrgm}
                                    hover
                                    waves
                                    alt='LGBTQ Mentoring Prgm'
                                    className='mt-5'
                                />
                            </div>
                            <div className="text-center mt-3">
                                <MDBBtn size="sm" className='btn-dark-green'>Find Mentor</MDBBtn></div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        </>
    )
}