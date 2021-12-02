import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage } from 'gatsby-plugin-image'

import { LanguageSwitcher } from './LanguageSwitcher'

export const TopMenu = ({ topMenu, activeDocMeta }) => {
  const renderedMenuLinks = topMenu
    ? topMenu.menu_links.map((menuLink, index) => (
        <li key={`top-nav-${index}`}>
          <PrismicLink href={menuLink.link.url}>
            <PrismicText field={menuLink.label.richText} />
          </PrismicLink>
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
