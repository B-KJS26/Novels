import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Jeong from '../images/jeong.png';
import Jo from '../images/jo.png';
export default function Main() {
    const nav = useNavigate();
    function gofirst() {
        nav('/firstnovel');
    }
    function gosecond() {
        nav('/secondnovel');
    }
    return (
        <Mainpage>
            <FadeIn>
                <Title>현재 인기 있는 소설</Title>
                <Firstnovel onClick={gofirst}>
                    <Text>작가 : 아잉아잉</Text>
                </Firstnovel>
                <Secondnovel onClick={gosecond}>
                    <Text>작가 : 앗핫맛</Text>
                </Secondnovel>
            </FadeIn>
        </Mainpage>
    )
}

const Text = styled.p`
    margin-top: 60vh;
    font-size: 20px;
    font-family: kimbold;
`
const Mainpage = styled.div`
    width: 100vw;
    height: 120vh;
    
`
const Title = styled.h1`
    position: absolute;
    margin-left: 10vw;
    margin-top: 10vh;
    font-family: heiroregular;
`
const Firstnovel = styled.div`
    position: absolute;
    width: 15vw;
    height: 55vh;
    margin-left: 10vw;
    margin-top: 22vh;
    background-image: url(${Jeong});
    background-size: 15vw 55vh;
    background-repeat: no-repeat;
    text-align: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Secondnovel = styled.div`
    position: absolute;
    width: 15vw;
    height: 55vh;
    margin-left: 30vw;
    margin-top: 22vh;
    background-image: url(${Jo});
    background-size: 15vw 55vh;
    background-repeat: no-repeat;
    text-align: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Thirdnovel = styled.div`
    position: absolute;
    background-color: gray;
    width: 14vw;
    height: 46vh;
    margin-left: 42vw;
    margin-top: 22vh;
`
const Fourthnovel = styled.div`
    position: absolute;
    background-color: gray;
    width: 14vw;
    height: 46vh;
    margin-left: 58vw;
    margin-top: 22vh;
`
const Fifthnovel = styled.div`
    position: absolute;
    background-color: gray;
    width: 14vw;
    height: 46vh;
    margin-left: 74vw;
    margin-top: 22vh;
`