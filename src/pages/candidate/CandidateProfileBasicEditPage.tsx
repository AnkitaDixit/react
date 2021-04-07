import React from "react";
import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBFormInline,
    MDBIcon,
    MDBInput,
    MDBProgress,
    MDBRow
} from "mdbreact";
import candidateprofilepic from '../../assets/images/candidate-profile/candidate-profile-pic.png';
import mentoringprogram from '../../assets/images/candidate-profile/mentoring-program.png';
import lGBTQMentoringPrgm from '../../assets/images/candidate-profile/LGBTQMentoringPrgm.png';
// import { isPropertySignature } from "typescript";

export const CandidateProfileBasicEditPage= (props: any) => {
    const rowSize = 4;
    console.log(props)
    const CandidateUpdate = () => {
        console.log('details update')
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
                                <MDBCol md='9'>
                                    {/* <p><strong>Profile Picture</strong></p> */}
                                    {/* <MDBRow>
                                        <MDBCol md='6'>
                                            <p>CHANGE PICTURE</p>
                                        </MDBCol>
                                      
                                    </MDBRow> */}
                                    <MDBRow className='mt-5'>
                                        <MDBCol md='6'>
                                            <label htmlFor="formGroupExampleInput">First name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                                value={props.User.firstName}
                                            />
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <label htmlFor="formGroupExampleInput">Second name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                                value={props.User.lastName}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className='mt-3'>
                                        <MDBCol md='12'>
                                            <label htmlFor="formGroupExampleInput">Current designation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                            //    value="Sr. Software Engineer"
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className='mt-3'>
                                        <MDBCol md='12'>
                                            <label htmlFor="formGroupExampleInput">Current Company</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                             //   value="Societe Générale, Bangalore"
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className='mt-3'>
                                        <MDBCol md='6'>
                                            <label htmlFor="formGroupExampleInput">Mobile number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                              //  value="+91-000000000"
                                            />
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <label htmlFor="formGroupExampleInput">Email ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                                value={props.User.username}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="text-center mt-4">
                                        <MDBCol>
                                            <MDBBtn size="sm" className='btn-blue-grey float-right' onClick={() => CandidateUpdate()}>Save</MDBBtn>
                                            {/* <MDBBtn size="sm" className='btn-blue-grey float-right'>Close</MDBBtn> */}
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className='mt-5'>
                                        <MDBCol md='12'>
                                            <p>Mentor assigned</p>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <p><strong>Rajan Guru</strong></p>
                                            <p>Project Manager</p>
                                            <p>Cisco Systems India</p>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <p className='text-primary'><strong>Request to change</strong></p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>About</strong></p>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="Add description about your profile"
                                            rows={rowSize}
                                        />
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Profile completeness</strong></p>
                                        <p>Add description about your profile</p>
                                        <p>3 pending actions</p>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Resume</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'>Update</strong></p>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Skills</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'>Add</strong></p></MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='4'><p>Recommendations</p></MDBCol>
                                            <MDBCol md='4'><p><strong className='text-info'>Add</strong></p></MDBCol>
                                        </MDBRow>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Education</strong> <MDBIcon
                                            className='float-right' icon="plus-circle"/></p>

                                        <MDBRow>
                                            <MDBCol md='12'>
                                                <label htmlFor="formGroupExampleInput">Institution</label>
                                            </MDBCol>
                                            <MDBCol md='11'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="National Institute of Technology, Trichy"
                                                />
                                            </MDBCol>
                                            <MDBCol md='1'><MDBIcon icon="search"/></MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-3'>
                                            <MDBCol>
                                                <label htmlFor="formGroupExampleInput">Degree</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="Masters in Technology"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-3'>
                                            <MDBCol>
                                                <label htmlFor="formGroupExampleInput">Year</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="09/2013"/> to
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="mm/yyyy"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="text-center mt-4">
                                            <MDBCol>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Save</MDBBtn>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Close</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr/>
                                        <p>National Institute of Technology, Trichy <MDBIcon className='ml-5'
                                                                                             icon="pen"/></p>
                                        <p>Bachelors in Technology</p>
                                        <p>July 2009- Aug 2013</p>

                                        <p className='float-right'>See 2 more</p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Employment</strong> <MDBIcon
                                            className='float-right' icon="plus-circle"/></p>
                                        <MDBRow>
                                            <MDBCol md='12'>
                                                <label htmlFor="formGroupExampleInput">Company</label>
                                            </MDBCol>
                                            <MDBCol md='11'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="Societe Generale, Bangalore"
                                                />
                                            </MDBCol>
                                            <MDBCol md='1'><MDBIcon icon="search"/></MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-3'>
                                            <MDBCol>
                                                <label htmlFor="formGroupExampleInput">Designation</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="Senior Software Engineer"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-3'>
                                            <MDBCol>
                                                <label htmlFor="formGroupExampleInput">Is this your current
                                                    company</label>
                                                <MDBFormInline>
                                                    <MDBInput gap type="radio" size='sm' id="radio1" label='Yes'
                                                              containerClass='mr-5'/>
                                                    <MDBInput gap type="radio" size='sm' id="radio1" label='No'
                                                              containerClass='mr-5'/>
                                                </MDBFormInline>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-3'>
                                            <MDBCol>
                                                <label htmlFor="formGroupExampleInput">Year</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    value="09/2013"/> to
                                                <br/>
                                                <label htmlFor="formGroupExampleInput" className='mt-1'>Present</label>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className='mt-2'>
                                            <MDBCol md='12'>
                                                <label htmlFor="formGroupExampleInput">Summary</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                                    rows={rowSize}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="text-center mt-4">
                                            <MDBCol>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Save</MDBBtn>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Close</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr/>
                                        <p>Tata Consultancy Services <MDBIcon className='ml-5' icon="pen"/></p>
                                        <p>Software Engineer</p>
                                        <p>April 2013- Mar 2017</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Resume</strong></p>
                                        <p className="text-center"><MDBIcon icon="paperclip" className='mr-3'
                                                                            size='lg'/><strong>Swetha Sharma Sr software
                                            eng
                                            resume.pdf</strong></p>
                                        <p className="text-center">Uploaded 6 months back</p>
                                        <p className="text-center">
                                            <MDBBtn rounded={true} size="sm" className="btn btn-outline-black mt-1">
                                                Update Resume
                                            </MDBBtn>
                                        </p>
                                    </div>
                                </MDBCol>

                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Skills</strong></p>
                                        <label htmlFor="formGroupExampleInput">Add your expertise / Skill</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="Python, C#/.Net, IT Auditing"
                                            rows={rowSize}
                                        />
                                        <MDBRow className="text-center mt-4">
                                            <MDBCol>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Save</MDBBtn>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Close</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                </MDBCol>
                                <MDBCol md='12' className='ca-bg-light-blue ca-min-v-150 mb-3'>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Personal details</strong></p>
                                        <label htmlFor="formGroupExampleInput">DOB</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="10/09/1990"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Gender</label>
                                        <MDBFormInline>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Male'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Female'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Others'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Prefer not to say'
                                                      containerClass='mr-5'/>
                                        </MDBFormInline>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Martial Status</label>
                                        <select className="browser-default custom-select">
                                            <option>Single / Unmarried</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Do you want to disclose your gender
                                            preference</label>
                                        <MDBFormInline>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Yes'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='No'
                                                      containerClass='mr-5'/>
                                        </MDBFormInline>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Preferred Gender Pronoun</label>
                                        <select className="browser-default custom-select">
                                            <option>She / Her / Hers</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Are you OUT at work</label>
                                        <MDBFormInline>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Yes, I am'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='No, I am'
                                                      containerClass='mr-5'/>
                                        </MDBFormInline>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">I identify as</label>
                                        <select className="browser-default custom-select">
                                            <option>Lesbian</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='mt-2'>
                                        <p><u>Upload gender / LGBT certificate </u><MDBIcon icon="paperclip"
                                                                                            className='ml-2' size='1x'/>
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Specially abled</label>
                                        <MDBFormInline>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='Yes'
                                                      containerClass='mr-5'/>
                                            <MDBInput gap type="radio" size='sm' id="radio1" label='No'
                                                      containerClass='mr-5'/>
                                        </MDBFormInline>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline mt-2">
                                        <label className="custom-control-label" htmlFor="defaultInline1">Do you like to
                                            share your disability information</label>
                                        <input type="checkbox" className="custom-control-input" id="defaultInline1"/>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Disability Type</label>
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <select className="browser-default custom-select">
                                                    <option>Orthopaedic</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                </select>
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <select className="browser-default custom-select">
                                                    <option>Specify sub disability type</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                </select>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className='mt-2'>
                                        <p><strong className='text-info'>Add additional disability type</strong></p>
                                    </div>
                                    <div className='mt-2'>
                                        <p><u>Upload disability certificate</u><MDBIcon icon="paperclip"
                                                                                        className='ml-2' size='1x'/>
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className="mt-2">
                                        <p>Communication Preferences</p>
                                        <MDBRow className="custom-control custom-checkbox custom-control-inline">
                                            <MDBCol md='6'>
                                                <label className="custom-control-label" htmlFor="defaultInline1">Comfortable
                                                    with phone calls</label>
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultInline1"/>
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <label className="custom-control-label" htmlFor="defaultInline1">Comfortable
                                                    with emails / messages</label>
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultInline1"/>
                                            </MDBCol>
                                            <MDBCol md='12' className='mt-1'>
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultInline1"/>
                                                <label className="custom-control-label"
                                                       htmlFor="defaultInline1">Need interpretor support</label>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <hr/>
                                    <div className="mt-2">
                                        <p>Transportation Preferences</p>
                                        <MDBRow className="custom-control custom-checkbox custom-control-inline">
                                            <MDBCol md='6'>
                                                <label className="custom-control-label" htmlFor="defaultInline1">Need
                                                    wheelchair assistance</label>
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultInline1"/>
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <label className="custom-control-label" htmlFor="defaultInline1">Available
                                                    for in-person interviews</label>
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultInline1"/>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className='mt-2'>
                                        <p>Other specifications</p>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder=""
                                            rows={rowSize}
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <p>Communities relevant to you</p>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="LGBT +, PWD Search / Add your communities Suggested communities Vetaran Sports Returnship Autism"
                                            rows={rowSize}
                                        />
                                    </div>
                                    <hr/>
                                    <div className="custom-control custom-checkbox custom-control-inline mt-2">
                                        <label className="custom-control-label" htmlFor="defaultInline1">Subscribe to
                                            news letter</label>
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultInline1"/>
                                    </div>
                                    <hr/>
                                    <div className='mt-2'>
                                        <p>Add languages</p>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="Hindi, Kannada, Search language"
                                            rows={rowSize}
                                        />
                                    </div>
                                    <hr/>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Address 1</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Type your house number, Building name / Apartment name"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Address 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Type your street name / Locality / Area name"
                                        />
                                    </div>
                                    <MDBRow className='mt-2'>
                                        <MDBCol md='12'>
                                            <label htmlFor="formGroupExampleInput">Town / City</label>
                                        </MDBCol>
                                        <MDBCol md='11'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                                placeholder="Search"
                                            />
                                        </MDBCol>
                                        <MDBCol md='1'><MDBIcon icon="search"/></MDBCol>
                                    </MDBRow>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">State / Provinance</label>
                                        <select className="browser-default custom-select">
                                            <option>Select</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <MDBRow className='mt-2'>
                                        <MDBCol md='12'>
                                            <label htmlFor="formGroupExampleInput">Pincode / Zipcode</label>
                                        </MDBCol>
                                        <MDBCol md='11'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput"
                                                placeholder="Search"
                                            />
                                        </MDBCol>
                                        <MDBCol md='1'><MDBIcon icon="search"/></MDBCol>
                                    </MDBRow>
                                    <div className='mt-2'>
                                        <label htmlFor="formGroupExampleInput">Country</label>
                                        <select className="browser-default custom-select">
                                            <option>Select</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='mt-2 mb-2'>
                                        <MDBRow className="text-center mt-4">
                                            <MDBCol>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Save</MDBBtn>
                                                <MDBBtn size="sm" className='btn-blue-grey float-right'>Close</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
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