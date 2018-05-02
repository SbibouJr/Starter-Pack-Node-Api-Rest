const { isEqual } = require('lodash');
const { ERROR_MESSAGES } = require('./errorMessages');
const routes = require('./routes');

const router = (req, res) => {
  const request = { req, res };

  let response = ERROR_MESSAGES.NOT_FOUND;
  const url = req.url;

  if (isEqual(url, routes.ROUTES.TEST)) response = routes.get(routes.ROUTES.TEST, request);

  res.statusCode = response.status;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(response))
  res.end();
};

module.exports = router;
