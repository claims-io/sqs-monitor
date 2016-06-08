'use strict';

const
  co = require('co'),
  sleep = require('co-sleep'),
  config = require('./config'),
  slack = require('./slack'),
  sqs = require('./sqs');

co(function* () {
  while (true) {
    // Get initial queue size
    let initialSize = yield sqs.size(),
      currentSize = 0;

    for (let i = 0; i < config.retries; i++) {
      // Get queue size
      currentSize = yield sqs.size();

      // Sleep between size calls
      yield sleep(config.interval);
    }

    if (currentSize > 0 && currentSize >= initialSize) {
      yield _sendSlack(currentSize);
      console.log('Slack notified');
    }
  }
})
  .then((value) => {
    console.log('SCRIPT FINISHED SUCCESSFULL');
  }, (err) => {
    console.error(err.stack);
  });

function* _sendSlack(size) {
  // Notify slack
  let slackData = {
    username: 'Monitor',
    attachments: [
      {
        color: 'danger',
        title: `Queue ${config.aws.queue_name} is not decreasing`,
        title_link: `https://console.aws.amazon.com/sqs/home?region=${config.aws.queue_region}`,
        fallback: `Queue is not decreasing - ${config.aws.queue_name}`,
        fields: [
          { title: 'Name', value: config.aws.queue_name },
          { title: 'Region', value: config.aws.queue_region },
          { title: 'Size', value: size }
        ]
      }
    ]
  };
  yield slack.send(slackData);
}