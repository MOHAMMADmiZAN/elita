import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import styled from "styled-components";
import logo from "./images/logo.png"


const Button = styled.button`
background : #f63b82;
padding : 10px 20px;
border: none;
outline: none;
border-radius: 5px

`;
const Text = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
color: #fff;
font-family: 'Archivo Black', sans-serif;
font-size: 20px;
font-weight: 900;
text-transform: uppercase;
&:hover{
color: white;
text-decoration: none;
}
`;
const Wrapper = styled.section`

`;
const Overlay = styled.div`
 background:rgba(217,217,217,0.1);
 padding: 50px;
`;

class Header extends Component {

    render() {
        return (
            <Wrapper>
                <Container>
                   <Overlay>
                       <Row className='align-items-center justify-content-between'>
                           <div className='col-lg-2'>
                               <div className='logo'>
                                   <img src={logo} alt="logo.png"/>
                               </div>
                           </div>
                           <div className='col-lg-2'>
                               <Button>
                                   <Text herf="#">
                                       Hire me
                                   </Text>
                               </Button>
                           </div>
                       </Row>
                   </Overlay>


                </Container>
            </Wrapper>

        )
    }
}

export default Header