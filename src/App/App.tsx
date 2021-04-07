import './App.css';
import React, {useRef, useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import {Footer} from "../common/Footer";
import {Header} from "../common/Header";
import {HomePage} from "../pages/HomePage";
import {LoginPage} from "../pages/Login/LoginPage";
import {SignupPage} from "../pages/Login/SignupPage"
import {CandidateHomePage} from "../pages/candidate/CandidateHomePage";
import {CorporateHomePage} from "../pages/corporate/CorporateHomePage";

import {CorporateProfilePage} from "../pages/corporate/CorporateProfilePage"
import {CandidateProfilePage} from "../pages/candidate/CandidateProfilePage";
import {CandidateProfileBasicEditPage} from "../pages/candidate/CandidateProfileBasicEditPage";
import {CorporateToolKitPage} from "../pages/corporate/CorporateToolKitPage";
import {AboutUs} from "../pages/AboutUs";
import {BlogPage1} from "../pages/blog/BlogPage1"
import {BlogPage2} from "../pages/blog/BlogPage2"
import {BlogPage3} from "../pages/blog/BlogPage3";


const App: React.FC = () => {
    const [user, setUser] = useState('');
    const UserChange = (value:any) => {
        console.log(value)
        setUser(value)
      }
    useEffect(() => {
        if (user !== undefined) {
            console.log("success", user)
        } else {
            console.log(user)
        }
    }, [user]);
   
    return (
        <Router>
            <Header props={user} UserChange={UserChange}/>
            <switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/Signup"  component={() => <SignupPage User={user} UserChange={UserChange} />} />
                <Route exact path="/Login" component={() => <LoginPage User={user} UserChange={UserChange} />} />

                {/* <Route exact path="/Login" component={() => <LoginPage User={user} UserChange={UserChange} />} /> */}

                <Route exact path="/candidate-profile" component={() => <CandidateProfilePage User={user} />}></Route>
                <Route exact path="/candidate-profile-basic-edit" component={() => <CandidateProfileBasicEditPage User={user} />}></Route>
                <Route exact path="/candidate" component={CandidateHomePage}></Route>

                <Route exact path="/corporates" component={CorporateHomePage}></Route>

                <Route exact path="/corporatesProfilePage" component={CorporateProfilePage}></Route>

                {/* <Route exact path="/candidate-profile" component={CandidateProfilePage}></Route> */}
                {/* <Route exact path="/candidate-profile-basic-edit" component={CandidateProfileBasicEditPage}></Route> */}

                <Route exact path="/corporate-tool-kit" component={CorporateToolKitPage}></Route>
                <Route exact path="/blog-page-1" component={BlogPage1}></Route>
                <Route exact path="/blog-page-2" component={BlogPage2}></Route>
                <Route exact path="/blog-page-3" component={BlogPage3}></Route>
                <Route exact path="/about-us" component={AboutUs}></Route>
            </switch>
            <Footer/>
        </Router>
    );
}

export default App;
