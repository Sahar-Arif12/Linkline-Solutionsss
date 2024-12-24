import { Field, ErrorMessage } from 'formik';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  rows?: number;
}

export default function FormField({ 
  label, 
  name, 
  type, 
  placeholder, 
  rows 
}: FormFieldProps) {
  return (
    <div>
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Field
        id={name}
        type={type}
        name={name}
        as={type === 'textarea' ? 'textarea' : 'input'}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                 focus:border-secondary focus:ring-secondary transition-colors
                 bg-white text-gray-900"
      />
      <ErrorMessage 
        name={name} 
        component="div" 
        className="mt-1 text-red-600 text-sm" 
      />
    </div>
  );
}