const fetchAscents = require("./fetchAscents");

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 *
 */
module.exports = async (event, context) => {
  // console.log("---> request event", event);
  // console.log("---> request context", context);
  try {
    if (!event || !event.queryStringParameters) {
      return getServerError("Invalid request", 400);
    }
  
    const type = event.queryStringParameters.type;
    const userId = parseInt(event.queryStringParameters.userId, 10)
    if (!userId || !type) {
      return getServerError("Invalid request", 400);
    }

    return getResponse({
      userId: userId,
      ascentType: type,
      ascents: await fetchAscents(userId, type)
    });
  } catch (err) {
    return getResponse(
      {
        name: err.name,
        error: err.message,
        stack: err.stack
      },
      500
    );
  }
};

const getServerError = (error, code = 500) => getResponse({ error }, code);

const getResponse = (response, code = 200) => {
  const res = {
    statusCode: code,
    body: JSON.stringify(response, null, 2)
  };
  // console.log("---> response:", res);
  return res;
};
