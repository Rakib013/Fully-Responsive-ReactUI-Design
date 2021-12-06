import React from 'react';
import styled from 'styled-components';
import gpt3Logo from "../assets/logo.svg";

function Footer() {
    return (
        <FOOTER className="section__padding">
            <Header>
                <h1 className="gradient__text">Do you want to step in to future before others</h1>
            </Header>

            <Btn>
                <p>Request Early Access</p>
            </Btn>

            <Links>
                <Logo>
                    <img src={gpt3Logo} alt="" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </Logo>
                <Link>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </Link>

                <Link>
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </Link>

                <Link>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </Link>

            </Links>
            <Copyright>
                <p>@2021 GPT-3. All rights reserved.</p>
            </Copyright>
        </FOOTER>
    )
}

export default Footer;

const FOOTER = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-footer);
`

const Header = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;

    &>h1{
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        letter-spacing: -0.04rem;

        @media screen and (max-width: 850px){
            font-size: 44px;
            line-height: 50px;
        }

        @media screen and (max-width: 550px){
            font-size: 34px;
            line-height: 42px;
        }
    }
`

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
    cursor: pointer;

    &>p{
        font-family: var(--font-family);
        border: 1px solid #ffff;
        font-size: 18px;
        line-height: 21px;
        padding: 1rem;
        color: #ffff;
        word-spacing: 2px;
    }

    @media screen and (max-width: 850px){
        margin-bottom: 5rem;
    }
`

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;

    &>div{
        width: 250px;
        margin: 1rem;

        @media screen and (max-width: 850px){
            margin: 1rem 0;
        }
    }
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;

    &>img{
        width: 118px;
        height: 30px;
        margin-bottom: 1rem;
    }

    &>p{
        font-family: var(--font-family);
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;

        @media screen and (max-width: 850px){
            font-size: 14px;
            line-height: 20px;
        }
    }
`

const Link = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &>h4{
        font-family: var(--font-family);
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    &>p{
        font-family: var(--font-family);
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 0.5rem 0;
        color: #ffffff;
    }
`

const Copyright = styled.div`
    margin-top: 2rem;
    text-align: center;
    width: 100%;

    &>p{
        font-family: var(--font-family);
        font-size: 12px;
        line-height: 14px;
    }
`