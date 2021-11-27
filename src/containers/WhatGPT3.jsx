import React from 'react';
import styled from 'styled-components';
import Feature from '../components/Features';

function WhatGPT3() {
    return (
        <WHatGPT3 className="section__margin" id="gpt3">
            <FEatures>
                <Feature head={true} title="What is GPT-3?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </FEatures>
            <Headings>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p className="gradient__text">Explore the Library</p>
            </Headings>
            <Container>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </Container>
        </WHatGPT3>
    )
}

export default WhatGPT3

const WHatGPT3 = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 2rem;
    background: var(--color-footer);

    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const FEatures = styled.div`
    display: flex;
`

const Headings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 2rem;

    &>h1{
        font-size: 34px;
        line-height: 45px;
        font-weight: 800;
        max-width: 510px;
        font-family: var(--font-family);

        @media screen and (max-width: 550px){
            font-size: 24px;
            line-height: 30px;
        }
    }

    &>p{
        font-family: var(--font-family);
        color: var(--color-subject);
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        cursor: pointer;

        @media screen and (max-width: 550px){
            margin-top: 1rem;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 550px){
        flex-direction: column;
        align-items: flex-start;
    }
`

const Container = styled.div`
    display: flex;
    margin-top: 2rem;

    @media screen and (max-width: 1050px){
        flex-wrap: wrap;
    }
`