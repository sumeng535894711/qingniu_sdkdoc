var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://github.com/sumeng535894711/qingniu_sdkdoc.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);

