import React from "react"
import Layout from "../components/layout"

export default function Support() {
  return (
    <Layout>
      <h1>Become a Supporter of the PRG Project!</h1>
      <h2>How can I help out?</h2>
      <p>
        Every contribution helps us continue to develop and maintain the future
        of PRG.
      </p>
      <li>
        If you'd like to support the project, please consider donating to PRG's
        creator, <b>Scott Grivner's</b>{" "}
        <a
          className="regular-link"
          href="https://www.buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <b>Buy Me a Coffee</b>
        </a>
        .
      </li>
      <p align="center">
        <a
          className="regular-link"
          href="https://www.buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="support-logo"
          />
        </a>
      </p>
      <li>
        Or consider sponsoring <b>Scott Grivner</b> on{" "}
        <a
          className="regular-link"
          href="https://github.com/sponsors/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <b>GitHub Sponsors</b>
        </a>
        .
      </li>
      <p align="center">
        <a
          className="regular-link"
          href="https://github.com/sponsors/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/company/github_sponsors.png"
            alt="GitHub Sponsors"
            className="support-logo"
          />
        </a>
      </p>
      <li>
        All supporters will be acknowledged on the{" "}
        <a
          className="regular-link"
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG GitHub Repository</b>
        </a>
        !
      </li>
      <li>Thank you ahead of time! Your contributions allow this project to stay afloat.</li>
      <br />
      <hr />
    </Layout>
  )
}
