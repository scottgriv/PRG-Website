import React from "react"
import Layout from "../components/layout"

export default function Templates() {
  return (
    <Layout>
      <h1 className="title-header-large">PRG README Templates</h1>
      <p>
        Each tier category has its own <span class="code-inline">README</span> template. The templates are designed to be easy to
        use and customize, and are fully compatible with GitHub's Markdown syntax.
      </p>
      <p>
      Visit the{" "}
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/templates/template_guide.md"
          target="_blank"
          rel="noreferrer"
        >
          <b>PRG Template Guide</b>
        </a>{" "}
        for more information on how to use them.
      </p>
      <p>
        Below are the included <span class="code-inline">README</span> templates to help you get your
        repositories up and running quickly using the PRG system. 
      </p>
      <hr />
      <div className="project-card">
        <h3>
          {" "}
          <a className="regular-link"
            href="https://github.com/scottgriv/PRG-Platinum-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            PRG Platinum Tier Template
          </a>
        </h3>
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Platinum-Tier-Template"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="projects-image"
            src="/images/templates/banner_large-platinum.png"
            alt="Platinum Template"
          />
        </a>
        <p>Designed for the most ambitious and sophisticated projects, this template transcends the ordinary, offering a comprehensive framework for thorough documentation, advanced feature integration, and high-level project presentation.</p>
        <div className="social-links">
          <a
            href="https://github.com/scottgriv/PRG-Platinum-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project-card">
        <h3>
          {" "}
          <a className="regular-link"
            href="https://github.com/scottgriv/PRG-Gold-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            PRG Gold Tier Template
          </a>
        </h3>
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Gold-Tier-Template"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="projects-image"
            src="/images/templates/banner_large-gold.png"
            alt="Gold Template"
          />
        </a>
        <p>Tailored for advanced and comprehensive projects, this template includes extensive sections and badges suitable for a robust and detailed presentation.</p>
        <div className="social-links">
          <a
            href="https://github.com/scottgriv/PRG-Gold-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project-card">
        <h3>
          {" "}
          <a className="regular-link"
            href="https://github.com/scottgriv/PRG-Silver-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            PRG Silver Tier Template
          </a>
        </h3>
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Silver-Tier-Template"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="projects-image"
            src="/images/templates/banner_large-silver.png"
            alt="Silver Template"
          />
        </a>
        <p>Designed for intermediate-level projects, this template balances detail and simplicity, providing a streamlined yet informative layout.</p>
        <div className="social-links">
          <a
            href="https://github.com/scottgriv/PRG-Silver-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project-card">
        <h3>
          {" "}
          <a
            href="https://github.com/scottgriv/PRG-Bronze-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            PRG Bronze Tier Template
          </a>
        </h3>
        <a className="regular-link"
          href="https://github.com/scottgriv/PRG-Bronze-Tier-Template"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="projects-image"
            src="/images/templates/banner_large-bronze.png"
            alt="Bronze Template"
          />
        </a>
        <p>Ideal for basic or beginner-level projects, this template focuses on simplicity and ease of use, ensuring a clear and concise project overview.</p>
        <div className="social-links">
          <a
            href="https://github.com/scottgriv/PRG-Bronze-Tier-Template"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
    </Layout>
  )
}
