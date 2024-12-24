import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "1234567890", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_c2202hn", // Replace with your EmailJS template ID
  PUBLIC_KEY: "0eFEUbijFn0ciRLAj", // Replace with your EmailJS public key
  TO_EMAIL: "70121639@student.uol.edu.pk"
};

export const sendEmail = async (values: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
    
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}