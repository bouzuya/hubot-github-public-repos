# hubot-github-public-repos

A Hubot script that list public repositories for the specified user

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20140911/20140911140245.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-github-public-repos.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-github-public-repos.git#TAG'

## Example

    bouzuya> hubot help github-public-repos
      hubot> hubot github-public-repos - list public repositories for the specified user

    bouzuya> hubot github-public-repos bouzuya
      hubot> https://github.com/bouzuya/hubot-github-public-repos

## Configuration

See [`src/scripts/github-public-repos.coffee`](src/scripts/github-public-repos.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-github-public-repos
[travis-badge]: https://travis-ci.org/bouzuya/hubot-github-public-repos.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-github-public-repos
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-github-public-repos.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-github-public-repos
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-github-public-repos.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
