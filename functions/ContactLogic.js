const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.API_KEY); // Replace with your SendGrid API key

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Email message options
    const msg = {
      to: process.env.MY_EMAIL, // Replace with your email address to receive messages
      from: data.email,
      subject: `New message from ${data.name}`,
      text: data.message,
    };

    // Send the email using SendGrid
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }), // Return the error message
    };
  }
};