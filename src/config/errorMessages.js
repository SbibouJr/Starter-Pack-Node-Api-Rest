
const ERROR_MESSAGES = {
  NOT_FOUND: {
    status: 404,
    data: {
      error: 'Route not found',
    },
  },
  FETCHING_DATA: {
    status: 400,
    data: {
      error: 'Error when fetching datas',
    },
  },
  INTERNAL_ERROR: {
    status: 500,
    data: {
      error: 'Internal server error',
    },
  },
};


module.exports.ERROR_MESSAGES = ERROR_MESSAGES;
