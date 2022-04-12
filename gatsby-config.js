/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here. */
  siteMetadata: {
    title: 'Savio Tsui',
    siteUrl: 'https://saviotsui.com/',
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/sitemap.xml',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.saviotsui.com',
        sitemap: 'https://www.saviotsui.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      }
    }
  ],
  // pathPrefix: "/reponame",
}
