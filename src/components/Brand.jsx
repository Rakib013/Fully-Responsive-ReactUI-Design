import React from 'react';
import styled from "styled-components";
import google from "../assets/google.png"
import slack from "../assets/slack.png"
import dropbox from "../assets/dropbox.png"
import atlassian from "../assets/atlassian.png"
import shopify from "../assets/shopify.png"


function Brand() {
    return (
        <BRAND className="section__padding">
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
        </BRAND>
    )
}

export default Brand;

const BRAND = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &>div{
        flex: 1;
        max-width: 150px;
        min-width: 120px;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`