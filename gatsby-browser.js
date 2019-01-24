require("./src/styles/prims.css");

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
