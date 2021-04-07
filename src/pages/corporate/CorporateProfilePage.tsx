import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBNav, MDBNavItem, MDBNavLink, MDBRow,} from "mdbreact";

import media1 from '../../assets/images/home/main-landing-page-bg-1.png';

export const CorporateProfilePage: React.FC = () => {
    return (
        <>
            <MDBContainer>
                <img src={media1} className="img-fluid" alt="..." />
                <br /><br />
                <MDBNav className="font-weight-bold">
                    <MDBNavItem>
                        <MDBNavLink active to='#' link className='black-text'>
                            My Profile
                    </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink disabled to='#' link>
                            My Job posts
                    </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink disabled to='#' link>
                            My Programs
                    </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink disabled to='#' link>
                            My Events
                    </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
                <br /><br />
                <MDBRow>
                    <MDBCol md="1">
                        <MDBIcon icon="building" className="text-danger" size="4x" />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBRow>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Company logo
                          </label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                </label>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Company name
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Industry
                          </label>
                                <div>
                                    <select className="browser-default custom-select">
                                        <option>Banking and Information technology</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Location
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Website
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Company Size
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Headquarters
                          </label>
                                <div>
                                    <select className="browser-default custom-select">
                                        <option>Select</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol md="6">

                            </MDBCol>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Founded
                          </label>
                                <div>
                                    <select className="browser-default custom-select">
                                        <option>Select</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Contact number
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                            <MDBCol md="6">
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Email ID
                          </label>
                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <div className="text-right mt-4">
                            <MDBBtn size="sm" color="light" type="submit">Close</MDBBtn>
                            <MDBBtn size="sm" color="dark" type="submit">Save</MDBBtn>
                        </div>
                    </MDBCol>

                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="3" className='ca-bg-light-blue ca-min-v-150 mb-3'>

                        <MDBRow className="d-flex align-items-center justify-content-center">
                            <MDBIcon icon="building" className="text-danger" size="4x" />
                        </MDBRow>
                        <br />
                        <MDBRow className="d-flex align-items-center justify-content-center">
                            <div className="align-items-center justify-content-center">
                                <h6>Description about your company</h6>
                                <br />
                                <p className="d-flex align-items-center justify-content-center">Comments: 35</p>
                                <p className="d-flex align-items-center justify-content-center">Views: 55</p>
                                <p className="d-flex align-items-center justify-content-center">Responses: 23</p>
                            </div>
                            <MDBCol md='12' className="text-center">
                                <MDBBtn rounded={true} className="btn btn-light shadow-none mt-4">
                                    Create your own profile
                                </MDBBtn>
                            </MDBCol>

                        </MDBRow>

                        <br /> <br />
                        <MDBRow md='12' className="text-center">
                            Coorporates create their own page to reach out to audience to show case their activities and abilities.
                            </MDBRow>
                    </MDBCol>
                </MDBRow>
                <br /><br />
                <MDBRow>
                    {/* <MDBCol md="1"></MDBCol> */}
                    <MDBCol md="7" className='ca-bg-light-blue ca-min-v-150 mb-3'>
                        <MDBRow className="pt-2 pl-2">
                            <h6 className="font-weight-bold">About</h6>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                            >
                                Add description about your organisation
                        </textarea>
                        </MDBRow>
                        <br />
                        <div className="text-right mt-4">
                            <MDBBtn size="sm" color="light" type="submit">Close</MDBBtn>
                            <MDBBtn size="sm" color="dark" type="submit">Save</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
                <br /><br />
                <MDBRow>
                    {/* <MDBCol md="1"></MDBCol> */}
                    <MDBCol md="7" className='ca-bg-light-blue ca-min-v-150 mb-3'>
                        <MDBRow className="pt-2 pl-2">
                            <h6 className="font-weight-bold">Accessibility</h6>
                        </MDBRow>
                        <hr></hr>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                            <label className="custom-control-label">  Subscribe to news letter</label>
                        </div>
                        <hr></hr>
                        <label>Select the Accessibility features available at your organisation</label>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                    <label className="custom-control-label">Accessible Infrastructure</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                    <label className="custom-control-label">Wheelchairs</label>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                    <label className="custom-control-label">In-house interpretors</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                    <label className="custom-control-label">Assistive Technology tools</label>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <hr></hr>
                        <label>Other specifications</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                        >
                            Add other specifications
                    </textarea>
                        <br />
                        <div className="text-right mt-4">
                            <MDBBtn size="sm" color="light" type="submit">Close</MDBBtn>
                            <MDBBtn size="sm" color="dark" type="submit">Save</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
                <br /><br />
                <MDBRow>
                    {/* <MDBCol md="1"></MDBCol> */}
                    <MDBCol md="7" className='ca-bg-light-blue ca-min-v-150 mb-3'>
                        <MDBRow className="pt-2 pl-2">
                            <h6 className="font-weight-bold">Contact</h6>
                        </MDBRow>
                        <input type="email" className="form-control" placeholder="Address 1" />
                        <br></br>
                        <input type="email" className="form-control" placeholder="Address 2" />
                        <br />
                        <div>
                            <select className="browser-default custom-select">
                                <option>Choose your country</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <br></br>
                        <div>
                            <select className="browser-default custom-select">
                                <option>Choose your city</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <br></br>
                        <input type="email" className="form-control" placeholder="Zip/Pin code" />
                        <br></br>
                        <div className="text-right mt-4">
                            <MDBBtn size="sm" color="light" type="submit">Close</MDBBtn>
                            <MDBBtn size="sm" color="dark" type="submit">Save</MDBBtn>

                        </div>
                    </MDBCol>
                </MDBRow>
                <br /><br />
                <MDBRow>
                    {/* <MDBCol md="1"></MDBCol> */}
                    <MDBCol md="7" className='ca-bg-light-blue ca-min-v-150 mb-3'>
                        <MDBRow className="pt-2 pl-2">
                            <h6 className="font-weight-bold">Events</h6>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </MDBRow>
                    </MDBCol>
                </MDBRow>
                <br /><br />
                <MDBRow>
                    {/* <MDBCol md="1"></MDBCol> */}
                    <MDBCol md="7" className='ca-bg-light-blue ca-min-v-150 mb-3'>
                        <MDBRow className="pt-2 pl-2">
                            <h6 className="font-weight-bold">Programs</h6>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </MDBRow>
                    </MDBCol>
                </MDBRow>
                <br /><br />
            </MDBContainer>
        </>
    );
}