/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet"
    }
  ],
  // pathPrefix: "/reponame",
  siteMetadata: {
    title: 'Savio Tsui',
    siteUrl: 'https://saviotsui.com/',
  },
}
