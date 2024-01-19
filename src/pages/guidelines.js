import React from "react"
import Layout from "../components/layout"

export default function Guidelines() {
  return (
    <Layout>
      <h1 className="title-header-large">PRG Guidelines, Guides, and Files</h1>
      <p>
        <b>PRG</b> Contains a number of guides, guidelines, and files to help
        you get started with your repositories.
      </p>
      <p>
        Below are the included guidelines to help you get your repositories up
        and running quickly using the PRG system. Visit each link to learn more
        about each guideline.
      </p>
      <hr />
      <br />
      <div style={{ display: "table", margin: "auto" }}>
        {/* Row 1 */}
        <div style={{ display: "table-row" }}>
          {/* Cell 1 */}
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/category_guidelines.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="Category Guidelines"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Category Guidelines</b>
            </a>
            <p>
              Guidelines for categorizing your repository tiers and naming
              conventions.
            </p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/brand_guidelines.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="Brand Guidelines"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Brand Guidelines</b>
            </a>
            <p>Guidelines for creating your own brand for your project.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/readme_guidelines.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="README Guidelines"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>README Guidelines</b>
            </a>
            <p>Guidelines for repository READMEs.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/repository_structure_guidelines.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="Repository Structure Guidelines"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Repository Structure Guidelines</b>
            </a>
            <p>Guidelines for repository structure and files.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/guidelines/repository_settings_guidelines.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="Repository Settings Guidelines"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Repository Settings Guidelines</b>
            </a>
            <p>Guidelines for repository settings.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://prgoptimized.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-rounded.png"
                alt="PRG Portfolio Website"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>PRG Portfolio Website</b>
            </a>
            <p>An example PRG Portfolio from PRG's creator.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/categories/table_generator_guide.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon_2-pyrg-rounded.png"
                alt="Table Generator Guide"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Table Generator Guide</b>
            </a>
            <p>
              Guide for setting up the Python (PyRG) project tier table
              generator script.
            </p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/categories/badge_reference_guide.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon_2-rounded.png"
                alt="Badge Reference Guide"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Badge Reference Guide</b>
            </a>
            <p>Guide for displaying the tier badges.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/templates/template_guide.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon_2-rounded.png"
                alt="Template Guide"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Template Guide</b>
            </a>
            <p>Guide for using the provided templates.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Platinum-Tier-Template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-platinum-rounded.png"
                alt="Platinum Tier Template"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Platinum Tier Template</b>
            </a>
            <p>Platinum project template for your repositories.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Gold-Tier-Template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-gold-rounded.png"
                alt="Gold Tier Template"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Gold Tier Template</b>
            </a>
            <p>Gold project template for your repositories.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Silver-Tier-Template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-silver-rounded.png"
                alt="Silver Tier Template"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Silver Tier Template</b>
            </a>
            <p>Silver project template for your repositories.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Bronze-Tier-Templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-bronze-rounded.png"
                alt="Bronze Tier Template"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Bronze Tier Template</b>
            </a>
            <p>Bronze project template for your repositories.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/PRG.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-placeholder-rounded.png"
                alt="PRG Connection File (PRGCF)"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>PRG Connection File</b>
            </a>
            <p>Connection File (PRGCF) for your repositories.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/scripts/project_tier_table_generator.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-placeholder-rounded.png"
                alt="Table Generator Script"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Table Generator Script</b>
            </a>
            <p>Python script for generating the project tier table (PyRG).</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/categories/project_tier_table.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-placeholder-rounded.png"
                alt="Project Tier Table"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Project Tier Table</b>
            </a>
            <p>Project tier table for your projects.</p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/categories/project_tier_table_private.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-placeholder-rounded.png"
                alt="Private Project Tier Table"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>Private Project Tier Table</b>
            </a>
            <p>
              Project tier table for external/non-GitHub or private projects.
            </p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/blob/main/templates/license_examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-placeholder-rounded.png"
                alt="License Example Directory"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>License Example Directory</b>
            </a>
            <p>
              Directory for license examples for your repositories (MIT, Apache,
              etc.).
            </p>
          </div>
        </div>
        <div style={{ display: "table-row" }}>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://prgoptimized.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-website-rounded.png"
                alt="PRG's Official Website"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>PRG's Official Website</b>
            </a>
            <p>A website dedicated to PRG and all of those who utilize it.</p>
          </div>
          <div
            style={{
              display: "table-cell",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #7A7A7A",
            }}
          >
            <a
              href="https://github.com/scottgriv/PRG-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="guideline-image"
                src="/images/guidelines/icon-website-rounded.png"
                alt="PRG's Official Website Repository"
                style={{ maxWidth: "85px", height: "auto", width: "85px" }}
              />
              <br />
              <b>PRG's Official Website Repository</b>
            </a>
            <p>
              Submit a pull request to add your PRG Portfolio to the PRG
              Showcase.
            </p>
          </div>
        </div>
      </div>
      <h3>Key</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #7A7A7A",
        }}
      >
        <thead>
          <tr style={{ border: "1px solid #7A7A7A" }}>
            <th style={{ border: "1px solid #7A7A7A" }}>Color</th>
            <th style={{ border: "1px solid #7A7A7A" }}>Document Type</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid #7A7A7A" }}>
            <td style={{ border: "1px solid #7A7A7A" }}>
              <img
                src="https://via.placeholder.com/20/6236FF/000000?text=+"
                alt="Color 6236FF"
              />
            </td>
            <td style={{ border: "1px solid #7A7A7A" }}>Guideline</td>
          </tr>
          <tr style={{ border: "1px solid #7A7A7A" }}>
            <td style={{ border: "1px solid #7A7A7A" }}>
              <img
                src="https://via.placeholder.com/20/680F7F/000000?text=+"
                alt="Color 680F7F"
              />
            </td>
            <td style={{ border: "1px solid #7A7A7A" }}>Guide</td>
          </tr>
          <tr style={{ border: "1px solid #7A7A7A" }}>
            <td style={{ border: "1px solid #7A7A7A" }}>
              <img
                src="https://via.placeholder.com/20/E5E4E2/000000?text=+"
                alt="Color E5E4E2"
              />
              <img
                src="https://via.placeholder.com/20/FFD700/000000?text=+"
                alt="Color FFD700"
              />
              <img
                src="https://via.placeholder.com/20/C0C0C0/000000?text=+"
                alt="Color C0C0C0"
              />
              <img
                src="https://via.placeholder.com/20/CD7F32/000000?text=+"
                alt="Color CD7F32"
              />
            </td>
            <td style={{ border: "1px solid #7A7A7A" }}>Template</td>
          </tr>
          <tr style={{ border: "1px solid #7A7A7A" }}>
            <td style={{ border: "1px solid #7A7A7A" }}>
              <img
                src="https://via.placeholder.com/20/FFFFFF/000000?text=+"
                alt="Color FFFFFF"
              />
            </td>
            <td style={{ border: "1px solid #7A7A7A" }}>File/Directory</td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
    </Layout>
  )
}
