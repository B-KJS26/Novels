import React from 'react';
import styled from 'styled-components';
import Jeongs from '../../images/sirona.png'
import Question from '../../images/question.png';
export default function Fncharacter() {
    return (
        <Fncharactermain>
            <Main>
                <Mmain src={Jeongs}>
                </Mmain>
                <Name>정 브라자 근우 (정현우) - 19세</Name>
                <Line></Line>
                <Explanation>
                    <Ex>정 브라자 근우는 빙신국의 브라자가문의 곧 마왕이 될 왕녀이다. 정 브라자 근우의 어머니 이름은 박 브라자 근혜, 김 브라자 정은이다.</Ex>
                </Explanation>
            </Main>
            <Main2>
                <Gmain src={Question}>
                </Gmain>
                <Name>이설아 - 19세</Name>
                <Line></Line>
                <Explanation>
                    <Ex>여주인공이다. 평소 조용하고 말이 없으며, 어릴 적에, 이잉 zㅣ존용제킹킹에 의해 부모님을 여의고 현재 혼자 살고 있다. 마을 사람들에게 인기가 많다.</Ex>
                </Explanation>
            </Main2>
            <Main3>
                <Sub src={Question}>
                </Sub>
                <Name>이잉 zㅣ존용제킹킹(이명 : zl존용제나이트) - ??세</Name>
                <Line></Line>
                <Explanation>
                    <Ex>설아의 부모님을 죽여버린 장본인이다. 피도 눈물도 없으며 매우 잔인하다. 게다가 분노조절 장애가 있다.</Ex>
                </Explanation>
            </Main3>
            <Main4>
                <Sub src={Question}>
                </Sub>
                <Name>이주형 – 남(데이터 제거됨)</Name>
                <Line></Line>
                <Explanation>
                    <Ex>(권한 부족)의 (권한 부족)한 나이에 마을의 촌장이 되었다는 기록이 있다.사소한 일에도 책임을 가지고 사람들을 잘 돕는다. (데이터 제거됨) 으로 세계 (권한 부족)를 할 수 있다. 말 끝 마다 '키힛'을 붙이는 습관이 있다.</Ex>
                </Explanation>
            </Main4>
            <Main5>
                <Sub src={Question}>
                </Sub>
                <Name>이구병 - 남(???세)</Name>
                <Line></Line>
                <Explanation>
                    <Ex>전설적인 웨폰마스터. 모든 차원에 각각의 방식으로 기록되어 전해져 내려오는 전설적인 존재이다.</Ex>
                </Explanation>
            </Main5>
        </Fncharactermain>
    );
}

const Ex = styled.p`
    font-family: heirobold;
    font-size: 2.5rem;
`
const Explanation = styled.div`
    width: 50vw;
    height: 20vh;
    margin-left: 31vw;
    margin-top: 10vh;
`
const Line = styled.div`
    position: absolute;
    width: 60vw;
    height: 0.5vh;
    background-color: black;
    margin-left: 31vw;
    margin-top: 3vh;
`
const Name = styled.h1`
    margin-left: 31vw;
    margin-top: 5vh;
    font-family: heiroregular;
    font-size: 2.5rem;
`
const Sub = styled.img`
    position: absolute;
    width: 250px;
    margin-top: 10vh;
    margin-left: 10vw;
`
const Gmain = styled.img`
    position: absolute;
    width: 250px;
    margin-top: 10vh;
    margin-left: 10vw;
`
const Mmain = styled.img`
    position: absolute;
    width: 650px;
`
const Main = styled.div`
    position: absolute;
    margin-top: 10vh;
`
const Main2 = styled.div`
    position: absolute;
    margin-top: 80vh;
`
const Main3 = styled.div`
    position: absolute;
    margin-top: 145vh;
`
const Main4 = styled.div`
    position: absolute;
    margin-top: 210vh;
`
const Main5 = styled.div`
    position: absolute;
    margin-top: 275vh;
`
const Fncharactermain = styled.div`
    width: 100vw;
    height: 400vh;
    text-align: left;
`