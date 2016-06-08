'use strict';

const
  config = require('./config'),
  request = require('co-request');

function* send(postData) {
  let result = yield request({
    uri: config.slack.hook_url,
    method: 'POST',
    body: JSON.stringify(postData || {})
  });

  if (result.statusCode >= 400) {
    console.log(` SLACK HELPER :: Failed with code: ${result.statusCode}`);
  }
}

module.exports = {
  send
};
