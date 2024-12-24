interface SubmitButtonProps {
  isSubmitting: boolean;
  submitStatus: 'idle' | 'loading' | 'success' | 'error';
}

export default function SubmitButton({ isSubmitting, submitStatus }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting || submitStatus === 'loading'}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 transition-colors"
    >
      {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
    </button>
  );
}