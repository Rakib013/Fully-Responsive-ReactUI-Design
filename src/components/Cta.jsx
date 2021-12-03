import React from 'react';
import styled from 'styled-components';

function Cta() {
    return (
        <CTA>
            <Content>
                <p>Request Early Access to Get Started</p>
                <h3>Register Today & start exploring the endless possibilities.</h3>
            </Content>
            <BTN>
                <button>Get Started</button>
            </BTN>
        </CTA>
    )
}

export default Cta;

const CTA = styled.div`
    border: 1px solid wheat;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem;
    padding: 2rem;
    border-radius: 1rem;
    background: var(--gradient-bar);

    @media screen and (max-width: 650px){
        flex-direction: column;
    }

    @media screen and (max-width: 550px){
        margin: 4rem 2rem;
    }
`

const Content = styled.div`
    &>p{
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 12px;
        line-height: 30px;
        color: #0E0E0E;

        @media screen and (max-width: 550px){
            font-size: 14px;
            line-height: 28px;
        }
    }

    &>h3{
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 24px;
        line-height: 45px;
        color: #000000;

        @media screen and (max-width: 550px){
            font-size: 18px;
            line-height: 32px;
        }
    }
`

const BTN = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;

    &>button{
        font-family: var(--font-family);
        background: #000000;
        color: white;
        border-radius: 40px;
        font-weight: bold;
        line-height: 30px;
        font-size: 18px;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        cursor: pointer;
        min-width: 150px;
    }

    @media screen and (max-width: 650px){
        margin: 2rem 0 0;
    }
`
