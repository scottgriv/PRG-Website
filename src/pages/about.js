import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1 className="title-header-large">About PRG</h1>
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
      <div className="about-container">
        <div className="photo-container">
          <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
            <img
              className="about-image"
              src="/images/about/scott_grivner.jpg"
              alt="Scott Grivner"
            />
          </a>
        </div>

        <div className="description-container">
          <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
            <h2>Scott Grivner</h2>
          </a>
          <p>
            Founder of <a href="https://nightowllabs.io" target="_blank" rel="noreferrer">Night Owl Labs</a>, Scott brings over a decade of
            professional software engineering and design experience to the team.
            He has worked with a wide range of technologies in multiple
            industries, and is passionate about building functional and
            beautiful software. Check out his{" "}
            <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
              Portfolio Website
            </a>{" "}
            to learn more about him and his work.
          </p>
          <div className="social-links">
            <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              href="https://github.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/scottgrivner/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/scottgrivner"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="mailto:scott.grivner@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="about-container-flipped">
        <div className="photo-container">
          <a
            href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-image"
              src="/images/about/anya_druzhenko.jpg"
              alt="Anya Druzhenko"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Anya Druzhenko</h2>
          </a>

          <p>
            Classically trained as a Chef and working in some of the most
            prestigious restaurants in Manhattan, NYC, Anya's culinary expertise
            is only matched by her passion for software design. She brings a
            unique perspective to the team by using her creative talents to
            craft beautiful and intuitive user experiences.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/anyaenko"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </Layout>
  )
}
