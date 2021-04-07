import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdbreact";
import logo from '../../assets/images/logo-full.png';

export const SignupPage = (props: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('Job seeker');

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setgender] =useState('');
    const [education, seteducation ] = useState('');
    const [experience, setexperience] = useState('');

    const [validCred, setValidCred] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState('');
    const [about, setAbout] = useState('');

    useEffect(() => {
        if (success === "true") {
            const response1 = { username: email, accountType: type, firstName: firstName, lastName: lastName }
            const tk = props.UserChange(response1)
            console.log("success", success)
        } else if (success === "false") {
            const tk = props.UserChange(undefined)
            console.log("success", success)
        }
    }, [about]);

    useEffect(() => {
        if (validCred === "true") {
            setSuccess("true")
        }
    }, [validCred]);

    const Signup = () => {
        console.log(email)
        console.log(password)
        console.log(type)
        if (email.indexOf('@') < 1 || email.indexOf('.') < 1) {
            seterrorMsg("Incorrect email")
            setValidCred("false")
        } else if (password.length < 8) {
            seterrorMsg("Password must consist of minimum 8 characters.")
            setValidCred("false")
        } else {
            const requestHeaders = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "username": email, "password": password, "account_type": type, "grant_type": "password_grant" })
            };
            fetch('http://oneinclusionhk.centralindia.cloudapp.azure.com:8099/user/signup', requestHeaders).then(res => res.json()).then((data) => {
                console.log(data.msg)
                if (data.msg.length > 0 && data.msg.indexOf('exists') > 0) {
                    seterrorMsg("Profile already exists, login using credentials")
                    setValidCred("false")
                } else {
                    setValidCred("true")
                }
                setResponse(data.msg)
            })
        }
    }

    const About = () => {
        setAbout("true")
    }
    if (success === "true" && about==="true") {
        return <Redirect to={{
            pathname: '/candidate-profile',
            state: { data: response }
        }} />
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="6">
                    <img style={{ maxWidth: "-webkit-fill-available", width: "auto", height: "-webkit-fill-available", objectFit: "cover" }} src={logo} alt="1inclusion" className="" />
                </MDBCol>

                {(validCred !== "true") ? 
                <MDBCol sm="12" lg="6">
                    <MDBContainer style={{ marginTop: "25vh" }}>
                        <MDBRow>
                            <MDBCol md="12">
                                <form>
                                    <p className="h4 text-center mb-4">Sign up for 1inclusion</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Email
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Create password
                                      </label>
                                    <input type="password" id="defaultFormLoginPasswordEx" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Account type
                                      </label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={type} onChange={e => setType(e.target.value)} required>
                                        <option>Job seeker</option>
                                        <option>Corporate</option>
                                        <option>Mentor</option>
                                        <option>Service Provider</option>
                                        <option>Others</option>
                                    </select>

                                    <div className="text-center mt-4">
                                        <p className="text-center mb-4">By clicking Agree & Sign up, You Agree to  Terms & Conditions  of 1inclusion platform</p>
                                        {(validCred === 'false') ? <p style={{ color: "red" }} className="text-center mb-4">{errorMsg}</p> : <p></p>}
                                        <MDBBtn
                                            color="dark"
                                            onClick={() => Signup()}
                                        >Agree & Signup</MDBBtn>
                                        <p style={{ marginTop: "5vh" }} className="text-center mb-4">Have an account ? <a href="/Login">Login</a></p>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol> : 
                <MDBCol sm="12" lg="6">
                    <MDBContainer style={{ marginTop: "20vh" }}>
                        <MDBRow>
                            <MDBCol md="12">
                                <form>
                                    <p className="h4 text-center mb-4">Tell us about yourself</p>
                                    <p className="h6 text-center mb-4">You are signing up as <span style={{textDecoration: "underline"}}>{type}</span></p>
                                    <br />
                                    <MDBRow>
                                    <MDBCol sm ="6" md="6" lg="6"> <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        First name
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={firstName} onChange={e => setfirstName(e.target.value)} required />
                                    </MDBCol>
                                    <MDBCol sm ="6" md="6" lg="6"> <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Last name
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={lastName} onChange={e => setlastName(e.target.value)} required />
                                    </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                    <MDBCol sm ="6" md="6" lg="6"> <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Date of Birth (optional)
                                      </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} required />
                                    </MDBCol>
                                    <MDBCol sm ="6" md="6" lg="6">
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Gender (optional)
                                      </label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={gender} onChange={e => setgender(e.target.value)} required>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    </MDBCol>
                                    </MDBRow>
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Education
                                      </label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={education} onChange={e => seteducation(e.target.value)} required>
                                        <option>Select your highest level of education</option>
                                        <option>10th</option>
                                        <option>12th/Diploma</option>
                                        <option>Undergraduate</option>
                                        <option>Graduate</option>
                                        <option>Masters</option>
                                        <option>Post Graduate</option>
                                    </select>
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Experience
                                      </label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={experience} onChange={e => setexperience(e.target.value)} required>
                                        <option>Fresher</option>
                                        <option>More than 2 years</option>
                                        <option>2-5 years</option>
                                        <option>5-10 years</option>
                                        <option>More than 10 years</option>
                                    </select>

                                    <div className="text-center mt-4">
                                        <MDBBtn
                                            color="dark"
                                            onClick={() => About()}
                                        >Next</MDBBtn>
                                        <p style={{ marginTop: "5vh" }} className="text-center mb-4">Have an account ? <a href="/Login">Login</a></p>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
                }


            </MDBRow>
        </MDBContainer>
    );
}
