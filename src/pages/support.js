import React from "react"
import Layout from "../components/layout"

export default function Support() {
  return (
    <Layout>
      <h1 className="title-header-small">Support the PRG Project!</h1>
      <h2 className="title-header-small">Who made PRG?</h2>
      <p>
        <b>PRG</b> was created by software engineer{" "}
        <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
          Scott Grivner
        </a>{" "}
        and UI/UX designer{" "}
        <a
          href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
          target="_blank"
          rel="noreferrer"
        >
          Anya Druzhenko
        </a>{" "}
        of <a href="https://nightowllabs.io">Night Owl Labs</a>, a software and
        design company that specializes in crafting beautiful and functional
        software.
      </p>
      <h2 className="title-header-small">How can I help out?</h2>
      <p>
        Every contribution helps us continue to develop and maintain the future
        of PRG. If you'd like to support the project, please consider donating
        to PRG's creator, <b>Scott Grivner's</b>{" "}
        <a
          href="https://www.buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <b>Buy Me a Coffee</b>.
        </a>{" "}
      </p>
      <p align="center">
        <a href="https://www.buymeacoffee.com/scottgriv" target="_blank" rel="noreferrer">
        <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="support-logo"
          />
        </a>
      </p>
      <hr />
    </Layout>
  )
}
