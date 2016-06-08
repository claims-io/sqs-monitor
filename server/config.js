'use strict';

if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ silent: true });
}

module.exports = {

  retries: process.env.RETRIES || 5, // minimum of 1
  interval: process.env.INTERVAL || 2000, // in miliseconds

  aws: {
    key: process.env.AWS_KEY_ID,
    secret: process.env.AWS_KEY_SECRET,
    queue_name: process.env.AWS_QUEUE_NAME,
    queue_url: process.env.AWS_QUEUE_URL,
    queue_region: process.env.AWS_QUEUE_REGION
  },

  slack: {
    hook_url: process.env.SLACK_HOOK
  }

};
