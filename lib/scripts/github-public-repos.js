// Description
//   A Hubot script that list public repositories for the specified user
//
// Dependencies:
//   "hubot-arm": "^0.2.1",
//   "hubot-request-arm": "^0.2.1"
//
// Configuration:
//   None
//
// Commands:
//   hubot github-public-repos - list public repositories for the specified user
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  require('hubot-arm')(robot);
  return robot.respond(/github[-\s]+public[-\s]+repos\s+(\S+)(\s+count)?$/i, function(res) {
    var count, user;
    user = res.match[1];
    count = res.match[2];
    if (count != null) {
      return res.robot.arm('request')({
        method: 'GET',
        url: "https://api.github.com/users/" + user,
        json: true,
        headers: {
          'User-Agent': 'hubot-github-public-repos'
        }
      }).then(function(r) {
        return res.send(r.body.public_repos);
      });
    } else {
      return res.robot.arm('request')({
        method: 'GET',
        url: "https://api.github.com/users/" + user + "/repos",
        qs: {
          sort: 'pushed'
        },
        json: true,
        headers: {
          'User-Agent': 'hubot-github-public-repos'
        }
      }).then(function(r) {
        var message, repos;
        repos = r.body;
        message = repos.filter(function(item, i) {
          return i < 10;
        }).map(function(repo) {
          return repo.html_url;
        }).join('\n');
        return res.send(message);
      });
    }
  });
};
