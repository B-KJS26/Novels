import React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Noveljson from '../../files/novel.json';
import Footer from '../Footer/Footer';

export default function Firstnovel() {
    const Titlearray = [
        '- 프롤로그 -',
        'zi존월드?',
        '의문의 남자'
    ]
    const [pagenum, setPagenum] = React.useState(1)
    function previous() {
        if (pagenum > 1) {
            setPagenum(pagenum - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    function next() {
        if (pagenum < Titlearray.length) {
            setPagenum(pagenum + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <Novtitle>{Titlearray[pagenum - 1]}</Novtitle>
                    <Novmain>{Object.keys(Noveljson.novel[pagenum - 1])[0]}</Novmain>
                    <Selectunder>
                        <LeftArrow onClick={previous}>
                            <BiChevronLeft size={60}></BiChevronLeft>
                        </LeftArrow>
                        <RightArrow onClick={next}>
                            <BiChevronRight size={60}></BiChevronRight>
                        </RightArrow>
                        <Num>{pagenum}</Num>
                    </Selectunder>
                </Novel>
            </NovelMain>
        </FadeIn>
    );
}

const Selectunder = styled.div`
    display: flex;
    width: 30vw;
    height: 10vh;
    text-align:center;
    justify-content: center;
    margin-top: 15vh;
    margin-left: 34vw;
    z-index: 2;
`
const Novmain = styled.p`
    margin-left: 20vw;
    white-space: pre-line;
    line-height: 5vh;
    font-family: kimregular;
`
const Novtitle = styled.h1`
    font-size: 2.5rem;
    margin-left: 20vw;
    font-family: kimbold;
`
const LeftArrow = styled.div`
position: absolute;
margin-top: 1.7vh;
margin-left: -7vw;
color: black;
cursor:pointer;
`

const RightArrow = styled.div`
margin-top: 1.7vh;
margin-left: 7vw;
color: black;
cursor:pointer;
`

const Novel = styled.div`
    width: 100vw;
    margin-top: 10vh;
    justify-content: center;
    text-align: left;
`


const Num = styled.h1`
    position: absolute;
    font-size: 2rem;
`

const Select = styled.div`
    position: absolute; 
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
    text-align: center;
    justify-content: center;
`