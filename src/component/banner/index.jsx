import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import shape from "./images/bsh1.png"
import pro from "./images/pro.png"
import background from "../header/images/dots_bg.png"
import item1 from "./images/item1.png"
import item2 from "./images/item4.png"





const Wrapper = styled.section`

 background: url(${background});

`
const Prodiv = styled.div`
width: 450px;
height: 450px;
 background: #171a3c;
 border-radius: 50%;
 position: relative;
 overflow: hidden;
 z-index: 1;
`
const Overlay = styled.div`
 background:rgba(65,69,118,0.2);
 padding: 100px 50px;
 z-index: -1;
`;
const Shape = styled.img`
position:absolute;
top: -90px;
right: 0;

`;
const Textcontent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@500&family=Roboto:wght@300;400;500;700&display=swap');
text-transform: uppercase;
z-index: 2;
position: absolute;
top: 180px;
left: -160px;
`;
const Texth = styled.h1`
font-family: 'Archivo', sans-serif;
font-weight: 600;
font-size: 38px;
color:#fff;
`;
const Textp = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: ${props => props.light ? "300" : "400"};
font-size: ${props => props.skill ? "30px" : "20px"};
color:${props => props.skill ? "#414576" : "#fff"};
margin: 0;
text-transform: ${props => props.skill ? "capitalize" : "uppercase"};
`
const Item = styled.img`
width: 260px;
`
const Item2 = styled.img`
width: 260px;
`
const Item3 = styled.img`
width: 260px;
`


class Banner extends Component {
    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false,
        // };

        return (
            <Wrapper>
                <Container>
                    <Overlay>
                        <Row>
                            <Col lg={'6'}>
                                <Prodiv>
                                    <img src={pro} alt="pro"/>
                                </Prodiv>
                                <Shape src={shape} alt={'shape'}/>
                            </Col>
                            <Col lg={'6'} className={'position-relative zindex-fixed'}>
                                <Textcontent>
                                    <Textp light>
                                        Hello, I’m
                                    </Textp>
                                    <Texth>
                                        Tarique Hasan
                                    </Texth>
                                    <Textp>
                                        a UI/UX Designer form Bangladesh
                                    </Textp>
                                    <Textp skill>
                                        Photoshop, XD, Sketch, HTML,
                                    </Textp>
                                    <Textp skill>
                                        CSS3, Bootstrap 4, Prototype
                                    </Textp>
                                </Textcontent>
                            </Col>



                        </Row>

                    </Overlay>
                </Container>
            </Wrapper>
        )
    }

}

export default Banner