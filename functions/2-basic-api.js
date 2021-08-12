const items = require('../assets/data');

exports.handler = async (event, context) => {
  // cb(null, { statusCode: 200, body: 'Hello World' });
  // console.log(context);
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
