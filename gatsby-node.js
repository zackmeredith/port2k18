/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.modifyWebpackConfig = ({ config, stage }) => {
 if (stage === 'build-html') {
   config.loader('null', {
     test: /webfontloader/,
     loader: 'null-loader'
   })
 }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
      output: {
        globalObject: 'this',
      },
  })
}
