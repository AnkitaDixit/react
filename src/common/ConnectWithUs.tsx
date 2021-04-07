import {MDBBtn, MDBCol, MDBContainer, MDBFormInline, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";


export const ConnectWithUs: React.FC = () => {
    const {register, handleSubmit, errors, reset} = useForm<any>();
    const rowSize = 8;
    const [radio, setRadio] = useState(1);
    const [displaySpinner, setDisplaySpinner] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleActionClick = () => {
        history.push("/#connect");
    }
    const onRadioClick = (nr: any) => {
        setRadio(nr);
    };


    const onSubmit = (data: any) => {
        setMessage('');
        setErrorMessage('');
        console.log("data", data);

        // get user name from form
        const nameInput = data.name;
        const myEmail = data.email;
        const number = data.number;
        const interests = data.interests;
        const comments = data.comments;

        // create email object
        const email = {
            personalizations: [
                {
                    to: [
                        {
                            email: "contact@1inclusion.com"
                        }
                    ],
                    subject: `Contact form submitted by ${nameInput}`
                }
            ],
            from: {
                name: nameInput,
                email: 'contact@1inclusion.com'
            },
            content: [
                {
                    type: "text/plain",
                    value: `Details from contact form :
                   Name : ${nameInput}:
                   Email is :${myEmail}:
                   Contact Number is: ${number}:
                   Interest are: ${interests}:
                   Comments are: ${comments}`
                }
            ]
        };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        };
        setDisplaySpinner(true);
        fetch('https://connectform.azurewebsites.net/sendmail', requestOptions)
            .then(async response => {
                console.log(response);
                setMessage('Request sent successfully');
                reset();
                setDisplaySpinner(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setMessage('Request not sent! Kindly try again.');
                setDisplaySpinner(false);
            });
    };
    return (
        <MDBContainer>
            <form onSubmit={handleSubmit(onSubmit)} id='connect'>
                <MDBRow className='bg-dark mb-5'>
                    <MDBCol md='12' className='mt-5 mb-5'>
                        <div className='display-4 font-weight-bold text-center text-white p-2'>Connect with us</div>
                        {
                            (displaySpinner &&
                                <div className='text-center'>
                                    <div className="spinner-border text-warning" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                        }
                        {
                            (errorMessage && (
                                <div className='text-danger text-center font-weight-bold'>{errorMessage}</div>
                            ))
                        }
                        {
                            (message && (
                                <div className='text-success text-center font-weight-bold'>{message}</div>
                            ))
                        }
                    </MDBCol>

                    <MDBCol md='6' className='p-2 mt-2'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                 <MDBIcon icon="user-alt"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Full Name"
                                name="name"
                                ref={register({required: true})}
                            />
                        </div>
                        {errors.name && errors.name.type === "required" && (
                            <div className='error-message'>You must enter your name.</div>
                        )}
                    </MDBCol>

                    <MDBCol md='6' className='p-2 mt-2'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                 <MDBIcon icon="envelope"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control "
                                id="email"
                                placeholder="Email"
                                name="email"
                                ref={register({required: true})}
                            />
                        </div>
                        {errors.email && errors.email.type === "required" && (
                            <div className='error-message'>You must enter email.</div>
                        )}
                    </MDBCol>
                    <MDBCol md='6' className='p-2 mt-2'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                 <MDBIcon icon="phone-alt"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control "
                                id="number"
                                placeholder="Phone number"
                                name="number"
                                ref={register({required: true})}
                            />
                        </div>
                        {errors.number && errors.number.type === "required" && (
                            <div className='error-message'>You must enter your mobile number.</div>
                        )}
                    </MDBCol>
                    <MDBCol md='6' className='p-2 mt-2'>
                        <select
                            id="interests"
                            name="interests"
                            ref={register({required: true})}
                            className="browser-default custom-select">
                            <option>Interested in</option>
                            <option value="Jobs">Jobs</option>
                            <option value="Corporates">Corporates</option>
                            <option value="Programs">Programs</option>
                            <option value="Mentors">Mentors</option>
                        </select>
                        {errors.interests && errors.interests.type === "required" && (
                            <div className='error-message'>Please enter your interests.</div>
                        )}
                    </MDBCol>
                    <MDBCol md='12' className='p-2 mt-2'>
                    <textarea
                        className="form-control mb-3"
                        id="exampleFormControlTextarea1"
                        placeholder="Comments"
                        name="comments"
                        rows={rowSize}
                        ref={register({required: true})}
                    />
                        {errors.comments && errors.comments.type === "required" && (
                            <div className='error-message'>Please enter your Comments.</div>
                        )}
                    </MDBCol>
                    <MDBCol md='12' className='p-2'>
                        <label htmlFor="formGroupExampleInput" className='text-white'>Subscribe to get newsletters,
                            updates from 1inclusion to your email,You can unsubscribe any time</label>
                        <MDBFormInline className='text-white' >
                            <MDBInput gap type="radio" size='sm' id="radio1" label='Yes'
                                      onClick={() => onRadioClick(1)}
                                      checked={radio === 1 ? true : false}
                                      containerClass='mr-5'/>
                            <MDBInput gap type="radio" size='sm' id="radio1" label='No'
                                      onClick={() => onRadioClick(0)}
                                      checked={radio === 0 ? true : false}
                                      containerClass='mr-5'/>
                        </MDBFormInline>
                    </MDBCol>
                    <MDBCol md='12' className='p-2'>
                        <MDBBtn rounded={true} type="submit" size="sm" className="btn btn-light float-right mt-2 mb-2">
                            Connect
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    )
}