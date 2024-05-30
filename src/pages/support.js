import React from "react"
import Layout from "../components/layout"

export default function Support() {
  return (
    <Layout>
      <h1>Become a Supporter of the PRG Project!</h1>
      <h2>Who made PRG?</h2>
      <p>
        <b>PRG</b> was created by software engineer{" "}
        <a className="regular-link" href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
          Scott Grivner
        </a>{" "}
        and UI/UX designer{" "}
        <a className="regular-link"
          href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
          target="_blank"
          rel="noreferrer"
        >
          Anya Druzhenko
        </a>{" "}
        of <a className="regular-link" href="https://nightowllabs.io">Night Owl Labs</a>, a software and
        design company that specializes in crafting beautiful and functional
        software.
      </p>
      <h2>How can I help out?</h2>
      <p>
        Every contribution helps us continue to develop and maintain the future
        of PRG. 
      </p>
      <li>If you'd like to support the project, please consider donating
        to PRG's creator, <b>Scott Grivner's</b>{" "}
        <a className="regular-link"
          href="https://www.buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <b>Buy Me a Coffee</b>
        </a>.
      </li>
      <p align="center">
        <a className="regular-link" href="https://www.buymeacoffee.com/scottgriv" target="_blank" rel="noreferrer">
        <img 
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="support-logo"
          />
        </a>
      </p>
      <li>Or consider sponsoring <b>Scott Grivner</b> on {" "}
        <a className="regular-link"
          href="https://github.com/sponsors/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <b>GitHub Sponsors</b>
        </a>.
      </li>
      <p align="center">
        <a className="regular-link" href="https://github.com/sponsors/scottgriv" target="_blank" rel="noreferrer">
        <img 
            src="/images/company/github_sponsors.png"
            alt="GitHub Sponsors"
            className="support-logo"
          />
        </a>
      </p>
      <li>All supporters will be acknowledged on the {" "}
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG GitHub Repository</b>
        </a>!
      </li>
      <h2>Email us!</h2>
      <p>For general inquiries or support, feel free to reach out:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a className="regular-link"
         href="mailto:info@nightowllabs.io" 
         target="_blank" 
         rel="noreferrer">
         info@nightowllabs.io
      </a>
      <hr />
      <div className="closing-wrapper">
        <p>Like this website? Feel free to...<br />
        <br />
        <i id="github-fork" className="fa-solid fa-code-fork"></i>&nbsp;
          <a
            className="regular-link"
            href="https://github.com/scottgriv/business-website"
            target="_blank"
            rel="noreferrer"
          >
            <b>Fork and Star it on GitHub!</b>
          </a>
          &nbsp;<i id="github-star" className="fa-solid fa-star"></i>
        </p>  
      </div>
      <div className="social-links-wrapper">
        <div className="social-links">
          <a href="https://github.com/Night-Owl-Labs">
          <img
            src="/images/company/nol-footer.png"
            alt="Night Owl Labs"
            title="Night Owl Labs"
            className="landing-logo"
            id="landing-footer"
          />
          </a>
        </div>
        </div>
        <hr />
    </Layout>
  )
}
