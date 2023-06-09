import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const nav = useNavigate();
    function Main() {
        nav('/');
    }
    return (
        <Headers>
            <Title onClick={Main}>오버 노베르</Title>
        </Headers>
    )
}
const Headers = styled.div`
    position: relative;
    width: 100vw;
    height: 90px;
    box-shadow: 0px 3px 5px 1px gray;
    text-align: center;
    justify-content: center;
`
const Title = styled.h1`
    position: absolute;
    margin-left: 1.5vw;
    cursor: pointer;
    font-family: heirobold;
    text-shadow: 5px 5px 10px gray;
`