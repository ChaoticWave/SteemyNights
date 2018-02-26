'use strict'

const Promise = require('bluebird')
const steem = Promise.promisifyAll(require('steem'))
const config = require('../../config')

steem.api.setOptions({url: config.steemit_url})

steem.api.getAccounts([config.user], function (err, result) {
  console.log(err, result)
})
