import {useState} from 'react'
import styled from 'styled-components';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#gpt3">What is GPT3?</a></p>
            <p><a href="#posibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <GPT3Navbar>
            <GPT3NavbarLinks>
                <GPT3NavbarLinkLogo>
                    <img src={logo} alt="" />
                </GPT3NavbarLinkLogo>
                <GPT3NavbarLinksContainer>
                    <Menu />
                </GPT3NavbarLinksContainer>
            </GPT3NavbarLinks>
            <GPT3NavbarSign>
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </GPT3NavbarSign>
            <GPT3NavbarMenu>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(!toggleMenu)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(!toggleMenu)} />
                }{toggleMenu && (
                    <GPT3NavbarMenuContainer>
                        <GPT3NavbarMenuContainerLinks>
                            <Menu />
                        </GPT3NavbarMenuContainerLinks>
                        <GPT3NavbarMenuContainerLinksSign>
                            <p>Sign In</p>
                            <button type="button">Sign Up</button>
                        </GPT3NavbarMenuContainerLinksSign>
                    </GPT3NavbarMenuContainer>
                )}
            </GPT3NavbarMenu>
        </GPT3Navbar>
    )
}

export default Navbar;

const GPT3Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 6rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 4rem;
    }
`

const GPT3NavbarLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const GPT3NavbarLinkLogo = styled.div`
    margin-right: 2rem;

    img{
        width: 62px;
        height: 16px;
    }
`

const GPT3NavbarLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    p{
        color: white;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        text-transform: capitalize;
        line-height: 25px;
        margin : 0 1rem;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const GPT3NavbarSign = styled(GPT3NavbarLinksContainer)`
    justify-content: flex-end;
    align-items: center;

    button{
        padding: 0.5rem 1rem;
        width: 130px;
        height: 58px;
        color: white;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        cursor: pointer;
        left: 1153px;
        top: 55px;
        line-height: 25px;
        border-radius: 5px;
        border: none;
        background-color: #FF4820;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const GPT3NavbarMenu = styled.div`
    margin-left: 1rem;
    display: none;
    position: relative;

    svg{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        display: flex;
    }
`

const GPT3NavbarMenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
    background: var(--color-footer);
    position: absolute;
    top: 40px;
    right: 0;
    min-width: 220px;
    margin-top: 1rem;
    box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

    p{
        margin: 1rem 0;
    }
`

const GPT3NavbarMenuContainerLinks = styled.div`
    @media screen and (min-width: 768px){
        display: none;
    }
`

const GPT3NavbarMenuContainerLinksSign = styled.div`

`

