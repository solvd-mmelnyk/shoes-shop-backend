module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/products/count",
      handler: "product.count",
    },
  ],
};
