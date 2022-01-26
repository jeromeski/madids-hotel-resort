const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware;

module.exports = function (app) {
	app.use(proxy("/auth/google", { target: "http://localhost:4000" }));
	app.use(proxy("/api", { target: "http://localhost:4000" }));
};
