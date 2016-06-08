'use strict';

const
  AWS = require('aws-sdk'),
  config = require('./config');

// Configure AWS
AWS.config.update({
  accessKeyId: config.aws.key,
  secretAccessKey: config.aws.secret
});

let sqs = new AWS.SQS({ region: config.aws.queue_region }),
  params = {
    QueueUrl: config.aws.queue_url,
    AttributeNames: ['ApproximateNumberOfMessages']
  };

function queueSize() {
  // Check size
  return new Promise((resolve, reject) => {
    sqs.getQueueAttributes(params, (err, result) => {
      if (err) {
        console.log('Failed to read queue size', err);
        return reject(err);
      }

      let size = result.Attributes.ApproximateNumberOfMessages;
      return resolve(parseInt(size, 10));
    });
  });
}

module.exports = {
  size: queueSize
};