import React from "react"
import Layout from "../components/layout"

export default function Categories() {
  return (
    <Layout>
      <h1 className="title-header-large">Tier Categories</h1>
      <p>
        <b>PRG</b> categorizes your project repositories into four "tiers":
        Platinum, Gold, Silver, and Bronze. Each tier has its own criteria for for what it takes for a project to be included in that tier.
        <br />
        <br />
        <a
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/category_guidelines.md"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="category-image"
            src="/images/templates/tier_graphic.png"
            alt="Tier Graphic"
          />
        </a>
      </p>
      <p>
      Visit the{" "}
        <a
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/category_guidelines.md"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG Category Guidelines</b>
        </a>{" "}
        for more information on how to use them.
      </p>
      <p>
        Check out an example of what the final categorized product, a PRG Portfolio, looks like {" "}
        <a
          href="https://prgoptimized.com"
          target="_blank"
          rel="noreferrer"
        >here</a>.
      </p>
      <hr />
    </Layout>
  )
}
