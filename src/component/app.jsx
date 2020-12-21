import React, {Component} from "react";
import Header from "./header";
import background from "./header/images/dots_bg.png"
import Banner from "./banner";
import styled from "styled-components";



const Wrapper = styled.section`
background: #171a3c;
`;
const Wrapper2 = styled.section`
 background: url(${background});
`;


class App extends Component{
    render() {

        return(
            <Wrapper>
                <Wrapper2>
                    <Header/>
                    <Banner/>
                </Wrapper2>
             </Wrapper>

        )
    }
}
export default App