import React, {Component} from "react";
import Header from "./header/index";
import background from "./header/images/dots_bg.png"
import styled from "styled-components";
const Wrapper = styled.section`
  background: url(${background});
  z-index: 999;
`;
const Wrapper2 = styled.section`
 background: rgba(31, 35, 80,10);
`;

class App extends Component{
    render() {

        return(
            <Wrapper>
                <Wrapper2>
                    <Header/>
                </Wrapper2>
             </Wrapper>

        )
    }
}
export default App