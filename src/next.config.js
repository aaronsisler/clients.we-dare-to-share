module.exports = {
  distDir: "../build",
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "/",
    domains: [
      "cdn-e-and-b-solutions.s3.amazonaws.com",
      "cdn-e-and-b-solutions.s3.amazonaws.com/clients/we-dare-to-share",
      "beta.wedaretoshare.org",
      "wedaretoshare.org",
    ],
  },
};
