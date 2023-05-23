"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", {
  async count(ctx) {
    return strapi.query("api::product.product").count({ where: ctx.query });
  },
});
