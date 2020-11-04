import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import styled from "styled-components";
import shape from "./images/bsh1.png"
import pro from "./images/pro.png"

const Wrapper = styled.section`


`
const Prodiv = styled.div`
width: 450px;
height: 450px;
 background: rgba(31, 35, 80,10);
 border-radius: 50%;
 position: relative;
 overflow: hidden;
 z-index: 1;
`
const Overlay = styled.div`
 background:rgba(217,217,217,0.1);
 padding: 100px 50px;
`;
const Shape = styled.img`
position:absolute;
top: -90px;
right: 0;

`;
const Textcontent = styled.div`

`;
const Texth = styled.h1`

`;

class Banner extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                  <Overlay>
                      <Row>
                          <div className={'col-lg-6'}>
                            <Prodiv>
                                <img src={pro} alt="pro"/>
                            </Prodiv>
                              <Shape src={shape} alt={'shape'}/>
                          </div>

                      </Row>
                  </Overlay>
                </Container>
            </Wrapper>
        )
    }

}

export default Banner