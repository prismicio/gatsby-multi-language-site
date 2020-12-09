import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../images/logo.png'

const TopMenu = ({ topMenu, activeDocMeta }) => {
  const renderedMenuLinks = topMenu.menu_links
    ? topMenu.menu_links.map((menuLink, index) => (
      <li key={`top-nav-${index}`}>
        <Link id={menuLink.link.id} to={menuLink.link.url}>
          {RichText.asText(menuLink.label.raw)}
        </Link>
      </li>
    ))
    : null

  return (
    <header>
      <div className="menu">
        <Link to="/">
          <img className="logo" src={logo} alt="Site logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          {renderedMenuLinks}
          <LanguageSwitcher activeDocMeta={activeDocMeta} />
        </ul>
      </div>
    </header>
  )
}

export const query = graphql`
fragment TopMenuFragment on PrismicTopMenu {
  type
  lang
  data {
    menu_links {
      label {
        raw
        html
        text
      }
      link {
        id
        url
      }
    }
  }
}
`

export default TopMenu

