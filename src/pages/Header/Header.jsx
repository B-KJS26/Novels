import React from 'react';
import styled from 'styled-components';
export default function Header() {
    return(
        <Headers>
            <Title>사이트 이름 추천 받습니다.</Title>
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
`