import React from 'react';
import styled from 'styled-components';
import people from "../assets/people.png";
import ai from "../assets/ai.png";

function Header() {
    return (
        <HeaderContainer className="gpt3__header section__padding" id="home">
            <HeaderContent>
                <h1 className="gradient__text">
                    Let&apos;s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <HeaderContentInput>
                    <input type="text" placeholder="Enter your email" />
                    <button>Get Started</button>
                </HeaderContentInput>
                <HeaderContentPeople>
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </HeaderContentPeople>

            </HeaderContent>
            <HeaderImg>
                <img src={ai} alt="" />
            </HeaderImg>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1050px){
        flex-direction: column;
    }
`

const HeaderContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 5rem;

    &>h1{
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        letter-spacing: -0.04rem;

        @media screen and (max-width: 490px){
            font-size: 36px;
            line-height: 48px;
        }

        @media screen and (max-width: 650px){
            font-size: 45px;
            line-height: 60px;
        }
    }

    &>p{
        font-family: var(--font-family);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 27px;
        color: var(--color-text);
        margin-top: 1.5rem;

        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
        }

        @media screen and (max-width: 650px){
            font-size: 14px;
            line-height: 24px;
        }
    }

    @media screen and (max-width: 1050px){
        margin: 0 0 3rem;
    }
`

const HeaderContentInput = styled.div`
    margin: 2rem 0 1rem;
    width: 100%;
    display: flex;
    &>input{
        flex: 2;
        width: 100%;
        min-height: 50px;
        font-family: var(--font-family);
        font-size: 20px;
        line-height: 27px;
        background: var(--color-footer);
        border: 2px solid var(--color-footer);
        border-radius: 5px 0 0 5px;
        outline: none;
        padding: 0 1rem;
        color: #fff;

        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
        }

        @media screen and (max-width: 650px){
            font-size: 12px;
            line-height: 16px;
        }
    }
    
    &>button{
        flex: 0.6;
        width: 100%;
        min-height: 50px;
        font-family: var(--font-family);
        font-weight: bold;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-size: 20px;
        line-height: 27px;
        background: #FF4820;
        padding: 0 1rem;
        border: none;
        outline: none;
        cursor: pointer;

        :hover{
            background: #FF5C2E;
        }

        @media screen and (max-width: 650px){
            font-size: 12px;
            line-height: 16px;
        }

        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
        }
    }
`

const HeaderContentPeople = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;

    &>img{
        width: 182px;
        height: 38px;
    }

    &>p{
        font-family: var(--font-family);
        margin: 0 0 0 1rem;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
        text-align: center;

        @media screen and (max-width: 650px){
            margin: 0;
        }
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
    }
`

const HeaderImg = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &>img{
        width: 100%;
        height: 100%;
    }
`