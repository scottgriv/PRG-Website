import React from "react"
import { CONFIG } from "./config.js"

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links">
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
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2014-{new Date().getFullYear()} Night Owl Labs, LLC. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer