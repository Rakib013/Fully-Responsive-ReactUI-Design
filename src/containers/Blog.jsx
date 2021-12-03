import React from 'react';
import styled from 'styled-components';
import Article from '../components/Article';
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";


function Blog() {
    return (
        <BLOG className="section__padding">
            <Headings>
                <h1 className="gradient__text">A lot is happening we are blogging about it.</h1>
            </Headings>
            <Container>
                <ContainerA>
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </ContainerA>
                <ContainerB>
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </ContainerB>
            </Container>
        </BLOG>
    )
}

export default Blog


const BLOG = styled.div``

const Headings = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 5rem;

    &>h1{
        font-family: var(--font-family);
        font-size: 62px;
        line-height: 75px;
        font-weight: 800;
        letter-spacing: -0.04rem;

        @media screen and (max-width: 990px){
            font-size: 46px;
            line-height: 52px;
        }

        @media screen and (max-width: 550px){
            font-size: 34px;
            line-height: 42px;
        }
    }
`

const Container = styled.div`
    display: flex;

    @media screen and (max-width: 990px){
        flex-direction: column-reverse;
    }
`

const ContainerA = styled.div`
    flex: 0.75;
    margin-right: 2rem;

    @media screen and (max-width: 990px){
        margin: 2rem 0;
        width: 100%;
        height: 250px;
    }
`

const ContainerB = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`