'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {

    // Ensure the entry is created
    const entity = await super.create(ctx);

    // Extract contact form data
    const contactFormData = entity.data.attributes;
    // Define email content
    const emailContent = {
      to: process.env.EMAIL_TO_ADDRESS, // Replace with the owner's email address
      subject: 'New Contact Form Submission',
      text: `
        New contact form submission:

        Name: ${contactFormData.name}
        Email: ${contactFormData.email}
        Phone: ${contactFormData.phone}
        Budget: ${contactFormData.budget}
        Type of Service: ${contactFormData.typeOfService}
        Objective: ${contactFormData.objective}
        Message: ${contactFormData.message}
        Terms Accepted: ${contactFormData.terms ? 'Yes' : 'No'}
      `,
      html: `
        <p>New contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${contactFormData.name}</li>
          <li><strong>Email:</strong> ${contactFormData.email}</li>
          <li><strong>Phone:</strong> ${contactFormData.phone}</li>
          <li><strong>Budget:</strong> ${contactFormData.budget}</li>
          <li><strong>Type of Service:</strong> ${contactFormData.typeOfService}</li>
          <li><strong>Objective:</strong> ${contactFormData.objective}</li>
          <li><strong>Message:</strong> ${contactFormData.message}</li>
          <li><strong>Terms Accepted:</strong> ${contactFormData.terms ? 'Yes' : 'No'}</li>
        </ul>
      `,
    };

    // Send email
    await strapi.plugins['email'].services.email.send(emailContent);

    // Return the newly created entry
    return entity;
  },
}));
