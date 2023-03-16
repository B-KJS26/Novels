import styled from "styled-components";
import { TbMail } from 'react-icons/tb';
export default function Footer() {
    return (
        <Footermain>
            <Lines></Lines>
            <Title>사이트 이름 추천 받습니다.</Title>
            <Support>
                <Texting>건의 사항은 아래 메일로</Texting>
                <Icon>
                    <TbMail size={50}></TbMail>
                </Icon>
                <Mailadress>digyrh456789@gmail.com</Mailadress>
            </Support>
        </Footermain>
    );
}

const Icon = styled.div`
    position: absolute;
`
const Mailadress = styled.p`
    font-family: kimlight;
    margin-left: 4vw;
    font-size: 30px;
`
const Texting = styled.p`
    font-family: kimbold;
    font-size: 30px;
`

const Support = styled.div`
    width: 20vw;
    height: 25vh;
    margin-left: 3vw;
    margin-top: 5vh;
`

const Title = styled.h1`
    margin-top: 5vh;
    margin-left: 3vw;
    font-family: heiroregular;
    text-shadow: 5px 5px 10px gray;
`
const Lines = styled.div`
    width: 100vw;
    height: 0.2vh;
    background-color: black;
`
const Footermain = styled.div`
    bottom: 0px;
    width: 100%;
    height: 600px;
    color: black;
    text-align: left;   
    margin-top: 10vh;
`