import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

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
      <h2 className="title-header-small">What is PRG?</h2>
      <p>
        <b>Personal Repository Guidelines</b>, or <b>PRG</b> for short, is a
        system that transforms the way repositories are organized and presented
        in your GitHub portfolio. By harnessing the power of GitHub Actions, it
        automatically crafts a tier-based display, neatly categorizing your
        repositories for enhanced clarity and impact. Beyond mere organization,
        it sets forth comprehensive guidelines, templates for READMEs, and
        overall repository structure, ensuring each project is showcased with
        maximum professionalism and coherence.
      </p>
      <p>
        Visit the{" "}
        <a
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
          target="_blank"
          rel="noreferrer"
        >
          <b>Personal Repository Guidelines (PRG)</b>
        </a>{" "}
        GitHub repository to get started!
      </p>
      <hr />
      <h2 className="title-header-small">PRG Showcase</h2>
      <p>
        The <b>PRG Showcase</b> is a collection of personal and organizational
        accounts that use <b>PRG</b> to showcase their projects. 
      </p>
      <p>
        If you'd like to add your repository to the list, please submit a pull request to the{" "}
        <a
          href="https://github.com/scottgriv/PRG-Website"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG Website Repository</b>
        </a>{" "}
        (this website). 
      </p>
      <p>
        <li>Click on the GitHub username below to view the users GitHub profile.</li>
        <li>Click on the image bubble to view the <b>PRG Portfolio</b>, a list of all the
        projects categorized using <b>PRG</b>, for each account below.</li>
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
                <a href={githubURL} target="_blank" rel="noreferrer">
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
