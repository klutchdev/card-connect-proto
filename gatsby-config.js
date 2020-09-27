/* eslint-disable no-undef */
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
        name: `card-connect-sf`,
        short_name: `ccsf`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: ``,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`barlow`, `noto sans`, `rubik`],
      },
    },
  ],
}