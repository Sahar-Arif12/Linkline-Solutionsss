interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

export default function StatusMessage({ type, message }: StatusMessageProps) {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div className={`mb-6 p-4 ${bgColor} ${textColor} rounded-md`}>
      {message}
    </div>
  );
}