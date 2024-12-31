'use strict';

/**
 * website-configuration controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website-configuration.website-configuration', ({ strapi }) => ({
  async find(ctx) {
    // Call the default core action
    const { data, meta } = await super.find(ctx);

    console.log(ctx.query);

    const locale = ctx.query.locale || 'en';

    // Fetch the count of services
    const serviceCount = await strapi.db.query('api::service.service').count({
      where: {
        locale: locale
      }
    });

    // Fetch the list of services with their headings and slugs
    const services = await strapi.db.query('api::service.service').findMany({
      where: {
        locale: locale
      },
      populate: {
        heading: true
      },
      select: ['slug']
    });

    // Extract the service names and slugs from the services array
    const serviceNames = services.map(service => ({
      name: service.heading?.departmentNameForListing,
      slug: service.slug
    }));

    // Add the service count and names to the response
    data.serviceCount = serviceCount;
    data.serviceNames = serviceNames;

    return { data, meta };
  }
}));
