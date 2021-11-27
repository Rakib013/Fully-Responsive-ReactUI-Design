import React from 'react';
import styled from 'styled-components';

function Feature({title, text, head}) {
    return (
        <FEAture head={head}>
            <ContainerTitle>
                <div/>
                <h1>{title}</h1>
            </ContainerTitle>
            <ContainerText>
                <p>{text}</p>
            </ContainerText>
        </FEAture>
    )
}

export default Feature;

const FEAture = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem;
    min-width: 210px;
    flex-direction: ${props => props.head ? 'row' : 'column'};

    @media screen and (max-width: 550px){
        flex-direction: column;
        margin: 1rem 0;
    }
`

const ContainerTitle = styled.div`
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;

    &>div{
        width: 38px;
        height: 3px;
        background: var(--gradient-bar);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 0.25rem;
    }

    &>h1{
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.04em;
        color: #fff;

        @media screen and (max-width: 550px){
            font-size: 18px;
            line-height: 22px;
        }
    }
`

const ContainerText = styled.p`
    flex: 2;
    max-width: 390px;
    display: flex;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text);

    margin-top: ${props => props.head ? '0' : '1rem'};

    @media screen and (max-width: 550px){
        font-size: 12px;
        line-height: 20px;
    }
`