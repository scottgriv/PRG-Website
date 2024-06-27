import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About PRG</h1>
      <h2>Who made PRG and why?</h2>
      <p>
        <b>PRG</b> was created by software engineer{" "}
        <a
          className="regular-link"
          href="https://scottgrivner.dev"
          target="_blank"
          rel="noreferrer"
        >
          Scott Grivner
        </a>{" "}
        and UI/UX designer{" "}
        <a
          className="regular-link"
          href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
          target="_blank"
          rel="noreferrer"
        >
          Anya Druzhenko
        </a>{" "}
        of{" "}
        <a className="regular-link" href="https://nightowllabs.io">
          Night Owl Labs
        </a>
        , a software and design company that specializes in crafting beautiful
        and functional software. <br /><br />Scott wanted to showcase his GitHub Portfolio
        by{" "} 
        <a
          className="regular-link"
          href="/categories"
          rel="noreferrer"
        >
          categorizing his repositories in tiers
        </a>, however, GitHub does not have
        the native capability to do this. So, simply put, he saw a problem and this was the solution!
      </p>
      <h2>Email us!</h2>
      <p>For general inquiries or consulting services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="mailto:info@nightowllabs.io"
        target="_blank"
        rel="noreferrer"
      >
        info@nightowllabs.io
      </a>
      <p>For support around our products and prior provided services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="mailto:support@nightowllabs.io"
        target="_blank"
        rel="noreferrer"
      >
        support@nightowllabs.io
      </a>
      <br />
      <br />
      <hr />
      <div className="closing-wrapper">
        <p>
          Like this website? Feel free to...
          <br />
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
    </Layout>
  )
}
