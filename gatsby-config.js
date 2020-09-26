module.exports = {
  siteMetadata: {
    title: `Card Connect SF`,
    description: `Built by Klutch dev and MadJoy.dev`,
    author: `Kyle "Klutch" Leary | MadJoy.dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CardConnectSF`,
        short_name: `CardConnectSF`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: ``, // This path is relative to the root of the site.
      },
    },
  ],
}