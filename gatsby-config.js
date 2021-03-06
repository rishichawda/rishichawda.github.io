require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const autoPrefixer = require(`autoprefixer`)
const cssnano = require('cssnano')
const tailwind = require('tailwindcss')

const tailwindConfig = require('./tailwind')
const siteData = require('./config/site.config')

module.exports = {
  siteMetadata: {
    ...siteData,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          components: "./components",
          elements: "./components/components",
          content: "./content",
          pages: "./pages",
          templates: "./templates",
          utils: "./utils",
          assets: "./images",
          static: "../static",
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "rishichawda",
              includeDefaultCss: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: "oldschool",
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          tailwind(tailwindConfig),
          autoPrefixer,
          ...(process.env.NODE_ENV === `production` ? [cssnano] : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rishi Kumar Chawda - Portfolio and Blog`,
        short_name: `Rishi Kumar Chawda`,
        start_url: `/`,
        background_color: tailwindConfig.colors.bg,
        theme_color: tailwindConfig.colors.bg,
        display: `standalone`,
        include_favicon: true,
        icon: `static/favicon.png`,
        theme_color_in_head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7fffd4`,
        showSpinner: true,
        minimum: 0.2,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
