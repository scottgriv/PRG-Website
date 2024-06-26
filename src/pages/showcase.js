import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/icons/icon.js" // Corrected import statement

export default function Showcase() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { fileAbsolutePath: { regex: "/showcase/" } }
      ) {
        edges {
          node {
            frontmatter {
              githubUsername
              githubURL
              prgPortfolioURL
              date
            }
          }
        }
      }
    }
  `)

  const getImageSrc = (username, attempt = "jpg") => {
    return `/showcase/${username}/${username}-showcase.${attempt}`
  }

  const handleImageError = (e, username) => {
    if (e.target.src.endsWith(".jpg")) {
      console.log(`Failed to load JPG for ${username}, trying PNG`)
      e.target.src = getImageSrc(username, "png") // Try .png if .jpg fails
    } else {
      console.log(`Both JPG and PNG failed for ${username}, using placeholder`)
      e.target.src = "/images/placeholder/showcase-placeholder.png"
    }
  }

  return (
    <Layout>
      <h1 className="title-header-small">Welcome to PRG! 👋</h1>
      <h2>What is PRG?</h2>
      <p>
        <b>Personal Repository Guidelines</b>, or <b>PRG</b> for short, is a
        repository categorization and guideline framework. By harnessing the
        power of GitHub Actions, it automatically crafts a tier-based display,
        neatly categorizing your repositories for enhanced clarity and impact.
        Beyond mere organization, it sets forth comprehensive guidelines,
        templates for <span class="code-inline">READMEs</span>, and overall
        repository structure, ensuring each project is showcased with maximum
        professionalism and coherence.
      </p>
      <p>
        <Icon name="PRG" /> Visit the{" "}
        <a
          className="regular-link"
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
          target="_blank"
          rel="noreferrer"
        >
          <b>Personal Repository Guidelines (PRG)</b>
        </a>{" "}
        GitHub repository to get started!
      </p>
      <p>
        <Icon name="PRG" /> Check out a finished{" "}
        <a
          className="regular-link"
          href="https://prgportfolio.com"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG Portfolio</b>
        </a>{" "}
        in action and see how it can help you categorize your projects and
        repositories!
      </p>
      <hr />
      <h2>PRG Showcase</h2>
      <p>
        The <b>PRG Showcase</b> is a collection of personal and organizational
        accounts that use <b>PRG</b> to showcase their projects and portfolios.
      </p>
      <p>
        If you'd like to get recognition and add your GitHub profile and{" "}
        <b>PRG Portfolio</b> to the below showcase, please follow the{" "}
        <span class="code-inline">README</span> instructions and submit a pull
        request to the{" "}
        <a
          className="regular-link"
          href="https://github.com/scottgriv/PRG-Website"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG Website Repository</b>
        </a>{" "}
        (this website).
      </p>
      <p>
        <li>
          Click on the GitHub username below to view the users GitHub profile.
        </li>
        <li>
          Click on the image bubble to view the <b>PRG Portfolio</b>, a list of
          all the projects categorized using <b>PRG</b>, for each account below.
        </li>
      </p>
      <br />
      {/* ... Dynamic Showcase Content ... */}
      <div className="showcase-container">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { githubUsername, githubURL, prgPortfolioURL } =
            node.frontmatter
          return (
            <div key={githubUsername} className="showcase-item">
              <a href={prgPortfolioURL} target="_blank" rel="noreferrer">
                <img
                  className="showcase-image"
                  src={getImageSrc(githubUsername)}
                  alt={githubUsername}
                  onError={e => handleImageError(e, githubUsername)}
                />
              </a>
              <div className="github-link-container">
                <a
                  className="regular-link"
                  href={githubURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{githubUsername}
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {/* ... */}
      <br />
      <hr />
    </Layout>
  )
}
