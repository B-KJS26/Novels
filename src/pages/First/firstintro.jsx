import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../images/jeong.png'
export default function Firstintro() {
    let nav = useNavigate();
    function gonovel() {
        nav('/firstnovel');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    function gofirstcharacter() {
        nav('/fncharacter');
    }
    return (
        <FadeIn delay={100}>
            <Intro>
                <NovelImage></NovelImage>
                <FadeIn
                    delay={300}
                >
                <Title>정현우, 이세계에서 브라자가문의 장자로 환생하다.</Title>
                <Subtitle>작가 : 아잉아잉</Subtitle>
                <Line></Line>
                <Overview>
                    <Outline>
                        '병신국', '븅신국', '빙신국'의 삼국체제를 유지하고 있는 '지존월드'에서 벌어지는 정현우의 기묘한 모험 이야기
                    </Outline>
                </Overview>
                <Viewbutton onClick={gonovel}>
                    <Text>지금 보러가기</Text>
                </Viewbutton>
                <Introduction onClick={gofirstcharacter}>등장인물들이 궁금하다면?</Introduction>
                </FadeIn>
            </Intro>
        </FadeIn>
    );
}
const Introduction = styled.h1`
    position: absolute;
    margin-left: 55vw;
    margin-top: 72vh;
    font-family: heiroregular;
    color: black;
    font-size: 1.7rem;
    cursor: pointer;
    &::after {position: absolute; content:""; display: block; border-bottom: 3px solid #000; transition: .6s; left: 50%; width: 0; top: 120%;}
    &:hover::after {width: 110%; left: -4%; right: auto;}
    &:hover {
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Text = styled.h1`
    font-family: heiroregular;
    color: black;
    font-size: 1.7rem;
`
const Viewbutton = styled.div`
    position: absolute;
    display: relative;
    width: 18vw;
    height: 8vh;
    background-color: white;
    border: 3px solid;
    border-color: black;
    margin-left: 33.5vw;
    margin-top: 70vh;
    border-radius: 3rem;
    text-align:center;
    justify-content: center;
    &: hover {
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Line = styled.div`
    position: absolute;
    width: 60vw;
    height: 0.3vh;
    background-color: black;
    margin-left: 33.5vw;
    margin-top: 42vh;
`
const Outline = styled.p`
    position: absolute;
    font-size: 2rem;
    font-family: heirobold;
`
const Overview = styled.p`
    width: 60vw;
    height: 20vh;
    position: absolute;
    margin-left: 33.5vw;
    text-align: left;
    margin-top: 43vh;
`
const Subtitle = styled.p`
    position: absolute;
    margin-left: 33.5vw;
    margin-top: 33vh;
    font-size: 1.5rem;
    font-family: heirobold
`
const Title = styled.h1`
    position: absolute;
    margin-left: 33vw;
    margin-top: 23vh;
    font-family: heirobold;
    font-size: 3rem;
`
const NovelImage = styled.div` 
    position: absolute;
    width: 19vw;
    height: 70vh;
    background-color: black;
    margin-left: 10vw;
    margin-top: 20vh;
    background-image: url(${Image});
    background-size: cover;
`
const Intro = styled.div`
    width: 100vw;
    height: 100vh;
`