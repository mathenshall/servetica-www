/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "servetica-www",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { 
        aws: {
          region: "us-west-1"
        },
        cloudflare: true
      },

    };
  },
  async run() {
    new sst.aws.Nextjs("ServeticaNextJs", {
      domain: {
        name: "servetica.com",
        redirects: ["www.servetica.com"],
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
