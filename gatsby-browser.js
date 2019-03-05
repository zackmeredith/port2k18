/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof window !== `undefined`) {
    document.body.classList.add('lag-o');
    document.body.classList.add('lag-o');

    window.addEventListener('load', function () {
      document.body.classList.remove('js-loading');
      setTimeout(function() {
        document.body.classList.remove('lag-o');
       }, 2000);
    }, false);

    setTimeout(function() {
      document.body.classList.remove('lag-o');
     }, 2000);
  }
}
