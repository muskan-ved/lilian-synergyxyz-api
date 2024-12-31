'use strict';

/**
 * website-configuration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-configuration.website-configuration');
