const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

exports.createServer = () => {
    return new Promise((resolve, reject) => {
        app.prepare().then(() => {
            const server = express();
            server.get("*", (req, res) => handle(req, res));
            resolve(server);
        })
    })
}
