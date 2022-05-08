import {useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faTiktok, faDiscord, faEtsy, faGithub, faImdb, faLinkedinIn,faPatreon, faPinterestP, faReddit, faShopify, faSpotify, faSoundcloud, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"
import {
  Link
} from "react-router-dom";

import {WebContext} from "../Website"
import ComponentMargin from '../subComponents/ComponentMargin';

const componentMapping = {
  Email:faEnvelope,
  Facebook: faFacebookSquare,
  Twitter: faTwitter,
  Instagram: faInstagram,
  Youtube: faYoutube,
  Tiktok: faTiktok,
  Discord: faDiscord,
  Etsy: faEtsy,
  Github: faGithub,
  Imdb: faImdb,
  LinkedinIn: faLinkedinIn,
  Patreon: faPatreon,
  Pinterest: faPinterestP,
  Reddit: faReddit,
  Shopify: faShopify,
  Spotify: faSpotify,
  Soundcloud: faSoundcloud,
  Snapchat: faSnapchatGhost
};

export default function SocialLinks(props) {

  const {webStyle, socialMedias} = useContext(WebContext)

  

    let componentStyles = {}
    try {
      componentStyles = 
      {
        textColor:webStyle.componentStyles.footer.textColor,
      }
    } catch (error) {
      
    }

    const socialMediaLinks = [...socialMedias]

    const socialLinkComponents = socialMediaLinks.filter(({location}) => {
      if (location === "New Link") {
        return false; // skip
      }
      return true;
    }).map(({link,location}) =>
      <div className='col text-center' key = {location}>
        <Link  to={{ pathname: link}} target={"_blank"} style={{color:webStyle.colors[componentStyles.textColor]}}><FontAwesomeIcon className={"socialMediaLink m-auto"} icon={componentMapping[location]} /></Link>
      </div>
    );

    return(
      <ComponentMargin  componentName = {"header"} webStyle = {webStyle}>
        <div className='mx-auto w-50' style = {{...props.style}} data-no-dnd = "true">
          {/* {JSON.stringify(webStyle.componentStyles)} */}
          <div className='row' style={{justifyContent:"space-around"}}>
            {socialLinkComponents}
          </div>
        </div>
      </ComponentMargin>
    )
    
};

