const { get: lodash_get, isEqual } = require('lodash');
const { ERROR_MESSAGES } = require('./errorMessages');

const ROUTES = {
  TEST: '/test',
};

const get = (route, request) => {
  const method = lodash_get(request, 'req.method', '');
  const headers = lodash_get(request, 'req.headers', {});
  let response = ERROR_MESSAGES.INTERNAL_ERROR;
  switch (route) {
    case ROUTES.TEST:
    if (isEqual(method, 'GET')) {
      try {
        const data = require('./fakeData.json');
        response.status = 200;
        response.data = {
          data,
        }
      } catch (e) {
        response = ERROR_MESSAGES.FETCHING_DATA;
      }
    } else {
      response = {
        status: 500,
        error: `The '${method}' method does not exist for the endpoint '${ROUTES.TEST}'`,
      };
    }
      break;
    default:
  }
  return response;
};

module.exports = {
  ROUTES,
  get,
};
