import React, { InputHTMLAttributes, forwardRef, useState } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	helperText?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ label, error, helperText, className = "", id, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);
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
				<div className="relative">
					<input
						id={inputId}
						ref={ref}
						type={showPassword ? "text" : "password"}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors pr-10 ${
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
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1">
						{showPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
								<line x1="1" y1="1" x2="23" y2="23" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
								<circle cx="12" cy="12" r="3" />
							</svg>
						)}
					</button>
				</div>
				{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
				{!error && helperText && (
					<p className="text-gray-500 text-sm mt-1">{helperText}</p>
				)}
			</div>
		);
	},
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
