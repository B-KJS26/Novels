import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Jeong from '../images/jeong.png';
export default function Main() {
    const nav = useNavigate();
    function gofirst() {
        nav('/firstnovel');
    }
    return(
        <Mainpage>
            <Title>현재 인기 있는 소설</Title>
            <Firstnovel onClick={gofirst}>
            </Firstnovel>
        </Mainpage>
    )
}
const Mainpage = styled.div`
    width: 100vw;
    height: 90vh;
`
const Title = styled.h1`
    position: absolute;
    margin-left: 10vw;
    margin-top: 10vh;
`
const Firstnovel = styled.div`
    position: absolute;
    background-color: gray;
    width: 15vw;
    height: 55vh;
    margin-left: 10vw;
    margin-top: 22vh;
    background-image: url(${Jeong});
    background-size: cover;
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
    background-color: gray;
    width: 14vw;
    height: 46vh;
    margin-left: 26vw;
    margin-top: 22vh;
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