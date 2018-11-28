'use strict';

const awsExpress = require('aws-serverless-express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const express = require('express')
const cors = require('cors')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/**
 * endpoint: https://90tkq7orz6.execute-api.ap-northeast-2.amazonaws.com/NextJS/{addr}
 */
/**
 * @error-1 `Error: EROFS: read-only file system, rmdir '/var/task/.next' || '/var/task/tmp'`
 * @description 펑션 안에서는 `/tmp` 폴더만 조작이 가능한듯?
 * @solution next.config.js 에서 distDir을 '../../tmp/.next'로 조작항 ㅕ해결
 */
module.exports.ssrrender = (event, context, callback) => {
  const done = (err, res) => callback(null, {
		statusCode: err ? 400 : 200,
		body: err ? err.message : JSON.stringify(res),
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		},
  });
  
  console.log('event.pathParameters.addr', event.pathParameters.addr);
  const exp = express();
  exp.use(cors());   // CORS setting : enable crossdomain access
  app.prepare().then(() => {
    exp.use(awsServerlessExpressMiddleware.eventContext());
    exp.get('/'+event.pathParameters.addr, async (req, res) => {
      try {
        const renderer = await app.render(req, res, '/'+event.pathParameters.addr, req.query)
        res.send(renderer)
      } catch(e) {
        done({message: '렌더링에 실패하였습니다.'}, null);
      }
    });
    exp.get('*', (req, res) => {
      return handle(req, res)
    })
    const server = awsExpress.createServer(exp);
    awsExpress.proxy(server, event, context);
  });
};
