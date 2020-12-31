/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Slamoji`,
    description: `A collection of great Slack emoji`,
    author: `@bryanjclark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inconsolata\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "15bb9522537a2fd4c49303f2d56187a5",
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `slamoji.com`,
      },
    },
  ],
}
