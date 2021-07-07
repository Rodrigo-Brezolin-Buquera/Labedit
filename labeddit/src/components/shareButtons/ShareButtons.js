import React from 'react'
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FiShare2 } from 'react-icons/fi'
import { ButtonsCont, Img } from "./styled"
import Facebook from "../../assets/Facebook.png"
import Linkedin from "../../assets/Linkedin.png"
import Reddit from "../../assets/Reddit.png"
import Twiter from "../../assets/Twiter.png"
import WhatsApp from "../../assets/WhatsApp.png"

const ShareButtons = (props) => {
    const currentURL = window.location.href

    return (
        <ButtonsCont>
            <div> <FiShare2 /> </div>

            <FacebookShareButton
                url={currentURL}
                quote={props.title}
                hashtag="#labbedit"
            >
                <Img src={Facebook} alt="logo Facebook" />
            </FacebookShareButton>

            <LinkedinShareButton
                url={currentURL}
                title={props.title}
                source={currentURL}
            >
                <Img src={Linkedin} alt="logo Linkedin"  />
            </LinkedinShareButton>

            <RedditShareButton
                url={currentURL}
                title={props.title}
            >
                <Img src={Reddit} alt="logo Reddit" />
            </RedditShareButton>

            <TwitterShareButton
                url={currentURL}
                title={props.title}
            >
                <Img src={Twiter} alt="logo Twitter" />
            </TwitterShareButton>

            <WhatsappShareButton
                url={currentURL}
                title={props.title}
            >
                <Img src={WhatsApp} alt="logo WhatsApp" />
            </WhatsappShareButton>

        </ButtonsCont>
    )
}

export default ShareButtons