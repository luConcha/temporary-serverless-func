//domain/.netlify/functions/1-hello
// exports
// const person = { name: 'lucy' }; JSON.stringify(person)

exports.handler = async (event, context) => {
  // cb(null, { statusCode: 200, body: 'Hello World' });
  // console.log(context);
  return {
    statusCode: 200,
    body: 'Hello world Example',
  };
};
