import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {

    const borderClass = error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500";

    return (
      <div className="flex flex-col gap-1 w-full text-left">
        {/* Лейбл поля */}
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        
        {/* Само поле ввода */}
        <input
          ref={ref}
          className={`border rounded-lg px-3 py-2 transition-colors focus:outline-none focus:ring-2 ${borderClass} ${className}`}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";