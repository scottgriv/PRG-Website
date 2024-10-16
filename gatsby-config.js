/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Personal Repository Guidelines (PRG)`,
    description: `PRG is a repository categorization and guideline framework. By harnessing the power of GitHub Actions, it automatically crafts a tier-based display, neatly categorizing your repositories for enhanced clarity and impact. Beyond mere organization, it sets forth comprehensive guidelines, templates for READMEs, and overall repository structure, ensuring each project is showcased with maximum professionalism and coherence.`,
    author: `@scottgrivner`,
    siteUrl: `https://prgoptimized.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showcase`,
        path: `${__dirname}/static/showcase/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Repository Guidelines (PRG)`,
        short_name: `PRG`,
        start_url: `/`,
        background_color: `#680F7F`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        //theme_color: `#FFFFFF`, //White
        //theme_color: `#FCDB3A`, //Yellow
        //theme_color: `#0E2F00`, //Dark Green
        //theme_color: `#005E1F`, //Lighter Green
        theme_color: `#6236FF`, //Purple
        // display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
  ],
}
