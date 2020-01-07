require('./src/styles/prims.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('typeface-montserrat');

exports.onServiceWorkerUpdateFound = () => {
  console.log(`This application has been updated.`);
  // const answer = window.confirm(
  //   `This application has been updated. ` +
  //     `Reload to display the latest version?`
  // );

  // if (answer === true) {
  //   window.location.reload();
  // }
};
