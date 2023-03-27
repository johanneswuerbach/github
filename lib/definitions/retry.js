/**
 * Default exponential backoff configuration for retries.
 */
const RETRY_CONF = {
  retries: 10,
  retryAfterBaseValue: 1000,
  doNotRetry: [400, 401],
};

module.exports = {RETRY_CONF};
