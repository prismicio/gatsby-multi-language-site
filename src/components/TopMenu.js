import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { StaticImage } from 'gatsby-plugin-image'

import { LanguageSwitcher } from './LanguageSwitcher'

export const TopMenu = ({ topMenu, activeDocMeta }) => {
  const renderedMenuLinks = topMenu
    ? topMenu.menu_links.map((menuLink, index) => (
        <li key={`top-nav-${index}`}>
          <Link id={menuLink.link.id} to={menuLink.link.url}>
            {RichText.asText(menuLink.label.richText)}
          </Link>
        </li>
      ))
    : null

  return (
    <header>
      <div className="menu">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt="Site logo"
            placeholder="none"
            className="logo"
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

export const query = graphql`
  fragment TopMenuFragment on PrismicTopMenu {
    _previewable
    type
    lang
    data {
      menu_links {
        label {
          richText
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
