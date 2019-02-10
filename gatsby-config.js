module.exports = {
  siteMetadata: {
    title: "Jacob Gatsby Portfolio V1",
    author: "Jacob Amador",
    description: "A website portfolio."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-page-transitions',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ebeae6',
        theme_color: '#ebeae6',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
