# Description
#   A Hubot script that list public repositories for the specified user
#
# Dependencies:
#   "hubot-arm": "^0.2.1",
#   "hubot-request-arm": "^0.2.1"
#
# Configuration:
#   None
#
# Commands:
#   hubot github-public-repos - list public repositories for the specified user
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  require('hubot-arm') robot

  robot.respond /github[-\s]+public[-\s]+repos\s+(\S+)(\s+count)?$/i, (res) ->
    user = res.match[1]
    count = res.match[2]
    if count?
      res.robot.arm('request')
        method: 'GET'
        url: "https://api.github.com/users/#{user}"
        json: true
        headers:
          'User-Agent': 'hubot-github-public-repos'
      .then (r) ->
        res.send r.body.public_repos
    else
      res.robot.arm('request')
        method: 'GET'
        url: "https://api.github.com/users/#{user}/repos"
        qs:
          sort: 'pushed'
        json: true
        headers:
          'User-Agent': 'hubot-github-public-repos'
      .then (r) ->
        repos = r.body
        message = repos
          .filter (item, i) -> i < 10
          .map (repo) -> repo.html_url
          .join '\n'
        res.send message
