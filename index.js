var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://github.com/sumeng535894711/qingniusdk.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);

