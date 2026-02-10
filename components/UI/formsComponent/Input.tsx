import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, helperText, className = "", id, ...props }, ref) => {
		const inputId = id || `input-${label?.toLowerCase().replace(/\s/g, "-")}`;

		return (
			<div className="w-full">
				{label && (
					<label
						htmlFor={inputId}
						className="block text-sm font-medium mb-1 text-foreground">
						{label}
					</label>
				)}
				<input
					id={inputId}
					ref={ref}
					className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors ${
						error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
					} ${className}`}
					style={{
						...(error
							? {}
							: ({
									"--tw-ring-color": "var(--color-primary)",
									borderColor: "var(--color-primary)",
								} as React.CSSProperties)),
					}}
					{...props}
				/>
				{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
				{!error && helperText && (
					<p className="text-gray-500 text-sm mt-1">{helperText}</p>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;
