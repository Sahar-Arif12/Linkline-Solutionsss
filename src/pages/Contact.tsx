import { useState } from 'react';
import { sendEmail } from '../utils/email';
import ContactForm from '../components/forms/ContactForm';
import StatusMessage from '../components/common/StatusMessage';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    setSubmitStatus('loading');
    try {
      await sendEmail(values);
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {submitStatus === 'success' && (
            <StatusMessage 
              type="success" 
              message="Thank you for your message. We will get back to you soon!"
            />
          )}
          
          {submitStatus === 'error' && (
            <StatusMessage 
              type="error" 
              message="There was an error sending your message. Please try again later."
            />
          )}

          <ContactForm 
            onSubmit={handleSubmit}
            submitStatus={submitStatus}
          />
        </div>

        <ContactInfo />
      </div>
    </div>
  );
}