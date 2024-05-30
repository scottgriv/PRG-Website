import React from "react"
import { Link } from "gatsby"
import { CONFIG } from "./config.js"

const Header = () => {
  const showHeader = CONFIG.showHeader

  return (
    <>
      <div id="pagehead" style={{ display: showHeader ? "block" : "none" }}>
        <div id="headlogo">
          <Link to="/">
            <img
              src="/images/company/prg-banner_large.png"
              alt="PRG"
              title="PRG"
              className="desktop-logo"
            />
            <img
              src="/images/company/prg-banner_small.png"
              alt="PRG"
              title="PRG"
              className="mobile-logo"
            />
          </Link>
        </div>
        <div id="menutabs">
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Showcase
              </Link>
            </li>
            <li>
              <Link to="https://prgportfolio.com" target="_blank" rel="noreferrer">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/categories" activeClassName="active">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/guidelines" activeClassName="active">
                Guidelines
              </Link>
            </li>
            <li>
              <Link to="/templates" activeClassName="active">
                Templates
              </Link>
            </li>
            <li>
              <Link to="/support" activeClassName="active">
                Become a Supporter
              </Link>
            </li>
            {/* ... other navigation items */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
