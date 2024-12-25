import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormFieldProps {
  placeholder: string;
  error?: string;
  registration: UseFormRegisterReturn;
  type?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  error,
  registration,
  type = 'text',
  className = 'flex-1',
}) => {
  return (
    <div className={`min-w-[200px] ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60
          focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent"
      />
      {error && (
        <span className="text-sm text-red-300 mt-1">{error}</span>
      )}
    </div>
  );
};