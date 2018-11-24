// #region : @event param explanation
// @event Example
// { 
//   headers: { 
//     Host: 'localhost:3000',
//     Connection: 'keep-alive',
//     'Cache-Control': 'max-age=0',
//     'Upgrade-Insecure-Requests': '1',
//     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
//     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//     'Accept-Encoding': 'gzip, deflate, br',
//     'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//     Cookie: 'io=g54CmEm2jZgMsNJZAAAG' 
//   },
//   multiValueHeaders: { 
//     Host: [ 'localhost:3000' ],
//     Connection: [ 'keep-alive' ],
//     'Cache-Control': [ 'max-age=0' ],
//     'Upgrade-Insecure-Requests': [ '1' ],
//     'User-Agent':
//      [ 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36' ],
//     Accept:
//      [ 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' ],
//     'Accept-Encoding': [ 'gzip, deflate, br' ],
//     'Accept-Language': [ 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' ],
//     Cookie: [ 'io=g54CmEm2jZgMsNJZAAAG' ] 
//   },
//   path: '/two',
//   pathParameters: null,
//   requestContext: { 
//     accountId: 'offlineContext_accountId',
//     resourceId: 'offlineContext_resourceId',
//     apiId: 'offlineContext_apiId',
//     stage: 'NextJS',
//     requestId: 'offlineContext_requestId_6202682648007887',
//     identity: { 
//       cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
//       accountId: 'offlineContext_accountId',
//       cognitoIdentityId: 'offlineContext_cognitoIdentityId',
//       caller: 'offlineContext_caller',
//       apiKey: 'offlineContext_apiKey',
//       sourceIp: '127.0.0.1',
//       cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
//       cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
//       userArn: 'offlineContext_userArn',
//       userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
//       user: 'offlineContext_user' 
//     },
//     authorizer: { 
//       principalId: 'offlineContext_authorizer_principalId',
//       claims: undefined 
//     },
//     protocol: 'HTTP/1.1',
//     resourcePath: '/two',
//     httpMethod: 'GET' 
//   },
//   resource: '/two',
//   httpMethod: 'GET',
//   queryStringParameters: null,
//   multiValueQueryStringParameters: null,
//   stageVariables: null,
//   body: null,
//   isOffline: true 
// }
// #endregion : @event param explanation

'use strict';

// const awsXRay = require('aws-xray-sdk');
// const awsSdk = awsXRay.captureAWS(require('aws-sdk'));

module.exports.nextjs = (event, context, callback) => {
  console.log(event.path)
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

  const done = (err, res) => callback(null, {
		statusCode: err ? 400 : 200,
		body: err ? err.message : JSON.stringify(res),
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		},
	});

  const routes = {
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five',
  }

  switch (event.path.substring(1)) {
    case routes.one:
      return done(null, {
        message: 'one returned'
      });
      break;
    case routes.two:
      return done(null, {
        message: 'two returned'
      });
      break;
    case routes.three:
      return done(null, {
        message: 'three returned'
      });
      break;
    case routes.four:
      return done(null, {
        message: 'four returned'
      });
      break;
    case routes.five:
      return done(null, {
        message: 'five returned'
      });
      break;
    default:
      // callback(null, response);
      return done({
        message: '잘못된 접근'
      }, null);
      break;
  }

};
