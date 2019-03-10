/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location, prevLocation }) => {
    document.body.classList.add('lag-o');
    document.body.classList.remove('lag-p');

    setTimeout(function() {
      document.body.classList.remove('lag-o');
      document.body.classList.add('lag-p');
    }, 1900);
}
