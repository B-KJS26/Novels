import React from 'react';
import styled from 'styled-components';
import Jeongs from '../../images/sirona.png'
export default function Fncharacter() {
    return (
        <Fncharactermain>
            <Main>
                <Jeong src={Jeongs}>
                </Jeong>
                <Name>정 브라자 근우 (정현우) - 19세</Name>
                <Line></Line>
                <Explanation>
                    <Ex>정 브라자 근우는 빙신국의 브라자가문의 곧 마왕이 될 왕녀이다. 정 브라자 근우의 어머니 이름은 박 브라자 근혜, 김 브라자 정은이다.</Ex>
                </Explanation>
            </Main>
        </Fncharactermain>
    );
}
const Ex = styled.p`
    font-family: heirobold;
    font-size: 2.5rem;
`
const Explanation = styled.div`
    position: absolute;
    width: 50vw;
    height: 20vh;
    margin-left: 31vw;
    margin-top: 20vh;
`
const Line = styled.div`
    position: absolute;
    width: 60vw;
    height: 0.5vh;
    background-color: black;
    margin-left: 31vw;
    margin-top: 15vh;
`
const Name = styled.h1`
    position: absolute;
    margin-left: 31vw;
    margin-top: 5vh;
    font-family: heiroregular;
    font-size: 2.5rem;
`
const Jeong = styled.img`
    position: absolute;
    width: 650px;
`
const Main = styled.div`
    margin-top: 10vh;
`
const Fncharactermain = styled.div`
    width: 100vw;
    height: 200vh;
    text-align: left;
`