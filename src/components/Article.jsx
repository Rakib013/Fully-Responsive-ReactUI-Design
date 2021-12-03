import React from 'react';
import styled from 'styled-components';

function Article({imgUrl, text, date}) {
    return (
        <Articles>
            <Image>
                <img src={imgUrl} alt="" />
            </Image>
            <Content>   
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article.</p>
            </Content>
        </Articles>
    )
}

export default Article;

const Articles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--color-footer);
`

const Image = styled.div`
    width: 100%;
    height: 100%;

    &>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    height: 100%;

    &>div{
        &>p{
            font-family: var(--font-family);
            font-weight: bold;
            font-size: 12px;
            line-height: 35px;
            color: white;
        }
        &>h3{
            font-family: var(--font-family);
            font-size: 25px;
            color: white;
            line-height: 30px;
            font-weight: 800;
            margin-bottom: 4rem;
            cursor: pointer;

            @media screen and (max-width: 550px){
                font-size: 18px;
                line-height: 25px;
            }
        }
    }

    &>p{
        font-family: var(--font-family);
        font-weight: bold;
        font-size: 12px;
        line-height: 35px;
        color: white;
        cursor: pointer;
    }
`
