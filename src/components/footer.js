import React from "react"
import { CONFIG } from "./config.js"
import Icon from './icons/icon.js'; // Corrected import statement

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links">
            <a
              href="https://prgportfolio.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="PRG" className="bounce" />
            </a>
            <a
              href="mailto:support@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope fa-bounce"></i>
            </a>
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-bounce"></i>
            </a>
            <a
              href="https://github.com/scottgriv/PRG-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork fa-bounce"></i>{" "}
            </a>
            <a
              href="https://www.buymeacoffee.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="BMC" className="bounce" />
            </a>
          </div>
        </div>
        <iframe
              src="https://github.com/sponsors/scottgriv/button"
              title="Sponsor scottgriv"
              height="32"
              width="114"
              style={{
                border: 0,
                borderRadius: '6px',
              }}
            />
        <div id="pagefoot">
          Copyright © 2023-{new Date().getFullYear()} Scott Grivner + Night Owl Labs, LLC. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
