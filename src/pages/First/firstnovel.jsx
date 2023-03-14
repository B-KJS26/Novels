import React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Firstnovel() {
    const Titlearray =[ 
        '-프롤로그-',
        'zi존월드?',
        '의문의 그녀',
        '위험해진 정근우?',
        '초초초초미소녀의 정체?!',
        '초초초초 미소녀의 정체는??! 삐슝?!'
    ]
    const [pagenum, setPagenum] = React.useState(1);
    function previous() {
        if(pagenum > 1) {
            setPagenum(pagenum - 1);
        }
    }
    function next() {
        if(pagenum < 6){
            setPagenum(pagenum + 1);
        }
    }
    return (
        <FadeIn>
            <NovelMain>
                <Select>
                    <LeftArrow onClick={previous}>
                        <BiChevronLeft size={60}></BiChevronLeft>
                    </LeftArrow>
                    <RightArrow onClick={next}>
                        <BiChevronRight size={60}></BiChevronRight>
                    </RightArrow>
                    <Num>{pagenum}</Num>
                </Select>
                <Novel>
                    <Novtitle>{Titlearray[pagenum-1]}</Novtitle>
                </Novel>
            </NovelMain>
        </FadeIn>
    );
}

const Novtitle = styled.h1`
    font-size: 3rem;
`
const LeftArrow = styled.span`
position: absolute;
margin-top: 1.7vh;
margin-left: -7vw;
color: black;
cursor:pointer;
`

const RightArrow = styled.span`
margin-top: 1.7vh;
margin-left: 7vw;
color: black;
cursor:pointer;
`

const Novel = styled.div`
    position: absolute;
    width: 60vw;
    height: 130vh;
    margin-top: 10vh;
    background-color: gray;
`


const Num = styled.h1`
    position: absolute;
    font-size: 2rem;
`

const Select = styled.div`
    display: flex;
    width: 30vw;
    height: 10vh;
    margin-top: -10vh;
    text-align:center;
    justify-content: center;
    z-index: 2;
`
const NovelMain = styled.div`
    display: flex;
    width: 100vw;
    height: 160vh;
    background-color: white;
    text-align:center;
    justify-content: center;
`