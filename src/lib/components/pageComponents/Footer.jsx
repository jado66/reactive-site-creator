import {useContext, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faTiktok, faDiscord, faEtsy, faGithub, faImdb, faLinkedinIn,faPatreon, faPinterestP, faReddit, faShopify, faSpotify, faSoundcloud, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"
import {
  Link
} from "react-router-dom";

import {WebContext} from "../Website"


export default function SocialLinks(props) {

  const {webStyle, socialMedias} = useContext(WebContext)

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
            <div className='mt-3' style = {{...props.style, width:`50%`, margin:"25px auto"}} data-no-dnd = "true">
              {/* {JSON.stringify(webStyle.componentStyles)} */}
              <div className='row' style={{justifyContent:"space-around"}}>
                {socialLinkComponents}
              </div>
            </div>)
  
};

