import { Formik, Form } from 'formik';
import { ContactSchema } from '../../utils/validation';
import FormField from './FormField';
import SubmitButton from './SubmitButton';

interface ContactFormProps {
  onSubmit: (values: any, actions: any) => Promise<void>;
  submitStatus: 'idle' | 'loading' | 'success' | 'error';
}

export default function ContactForm({ onSubmit, submitStatus }: ContactFormProps) {
  return (
    <Formik
      initialValues={{ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      }}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Your full name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
          />
          <FormField
            label="Subject"
            name="subject"
            type="text"
            placeholder="What is your message about?"
          />
          <FormField
            label="Message"
            name="message"
            type="textarea"
            rows={4}
            placeholder="Please describe your inquiry in detail..."
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
        </Form>
      )}
    </Formik>
  );
}