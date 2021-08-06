import * as React from 'react'

import twitterIcon from '../images/twitter.png'
import instagramIcon from '../images/instagram.png'
import facebookIcon from '../images/facebook.png'

export const Footer = () => (
  <footer>
    <p className="copyright">
      &copy; {new Date().getFullYear()} Todoapp-Powered by Prismic
    </p>
    <div className="social">
      <img src={facebookIcon} alt="Facebook social icon" />
      <img src={instagramIcon} alt="Instagram social icon" />
      <img src={twitterIcon} alt="Twitter social icon" />
    </div>
  </footer>
)
