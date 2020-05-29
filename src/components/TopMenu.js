import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'
import LanguageSwitcher from './LanguageSwitcher'

const TopMenu = ({ topMenu, activeDocMeta }) => {
  const renderedMenuLinks = topMenu.menu_links
    ? topMenu.menu_links.map((menuLink, index) => (
      <li key={`top-nav-${index}`}>
        <Link to={linkResolver(menuLink.link._meta)}>
          {RichText.asText(menuLink.label)}
        </Link>
      </li>
    ))
    : null

  return (
    <header>
      <div className="menu">
        <Link to="/">
          <img
            className="logo"
            src={topMenu.site_logo ? topMenu.site_logo.url : ''}
            alt={topMenu.site_logo ? topMenu.site_logo.alt : ''}
          />
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

export default TopMenu
