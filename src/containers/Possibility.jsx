import React from 'react';
import styled from 'styled-components';
import possibilityIMG from "../assets/possibility.png"

function Possibility() {
    return (
        <POssibility className="section__padding" id="posibility">
            <PImage>
                <img src={possibilityIMG} alt="" />
            </PImage>
            <Content>
                    <h4>Request Early Access to Get Started</h4>
                    <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <h4>Request Early Access to Get Started</h4>
            </Content>
        </POssibility>
    )
}

export default Possibility;


const POssibility = styled.div`
    display: flex;
    @media screen and (max-width: 950px){
        flex-direction: column;
    } 
`

const PImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;

    &>img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 950px){
        margin: 1rem 0;
    } 
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &>h4{
        font-family: var(--font-family);
        font-weight: 500;
        color: #71E5FF;
        font-size: 16px;
        line-height: 30px;
    }

    &>h4:last-child{
        color: #FF8A71;
    }

    &>h1{
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 34px;
        line-height: 45px;
    }

    &>p{
        font-family: var(--font-family);
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 2rem;
        color: var(--color-text);
    }
`