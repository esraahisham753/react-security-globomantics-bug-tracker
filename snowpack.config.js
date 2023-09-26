/** @type {import("snowpack").SnowpackUserConfig } */

import proxy from "http2-proxy";

module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  routes: [
    {
      match: "routes",
      src: "/new.html",
      dest: (req, res) => proxy.web(req, res, { port: 8081 }),
    },
  ],

  plugins: [],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {
    open: "none",
  },
  buildOptions: {},
};
