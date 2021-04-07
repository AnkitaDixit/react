import React from "react";
import { MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from "mdbreact";
import logo from '../assets/images/logo.png';

interface State {
    isOpen: any,
    user: boolean,
    username: any,
}
interface IProps {
    props?: any,
    UserChange? :any
}
export class Header extends React.Component<IProps, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            isOpen: false,
            user: false,
            username: 'user',
        };
      }
   

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    Logout = () => {
        console.log(this.props)
        this.props.UserChange(undefined)
        this.setState({user: false})
    }

    componentDidMount() {
        console.log(this.props)
    }
    componentDidUpdate(prevProps:any, newProps:any) {
        console.log(prevProps)
        console.log(this.props.props)
        if(this.props.props !== undefined && this.props !== false && this.props !== prevProps  && this.props !== 'undefined' && this.props !== null) {
            this.setState({user: true})
            console.log(this.props)
            this.setState({username: this.props.props.username })

        }
    }

    render() {
        return (
            <MDBNavbar light className="border-bottom-0" expand="md">
                <div className="container">

                    <MDBNavbarBrand href="/">
                        <img src={logo} alt="1inclusion" className="" width="100px" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >
                        <MDBNavbarNav left className="navbar-light">
                            <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' link to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' to="/about-us">About Us</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' to="/corporate-tool-kit">Programs</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' to="/candidate">Job Seekers</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink disabled className='text-light font-weight-bold' to="/corporates">Corporates</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink disabled className='text-light font-weight-bold' to="#">Mentors </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav >
                            {this.state.user === false ? 
                            <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' to="/Signup">Signup </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink style={{border: "1px solid black", borderRadius: "20px"}} className='font-weight-bold' to="/Login">Login </MDBNavLink>
                            </MDBNavItem>
                            </MDBNavbarNav>:
                             <MDBNavbarNav right>
                                <MDBNavItem>
                                <MDBNavLink className='font-weight-bold' to="/candidate">{this.state.username} </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink style={{border: "1px solid black", borderRadius: "20px"}} className='font-weight-bold'  onClick={() => this.Logout()} to="/Login">Logout </MDBNavLink>
                            </MDBNavItem>
                            </MDBNavbarNav>
                              }
                    </MDBCollapse>
                </div>
            </MDBNavbar>
        );
    }
}