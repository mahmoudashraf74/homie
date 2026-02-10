"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const registerSchema = z
	.object({
		firstName: z.string().min(2, "First name must be at least 2 characters"),
		lastName: z.string().min(2, "Last name must be at least 2 characters"),
		email: z.string().email("Invalid email address"),
		phone: z
			.string()
			.min(10, "Phone number must be at least 10 digits")
			.regex(/^\d+$/, "Phone number must contain only digits"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirm: z.string(),
		acceptTerms: z.boolean().refine((val) => val === true, {
			message: "You must accept the terms and conditions",
		}),
	})
	.refine((data) => data.password === data.confirm, {
		message: "Passwords do not match",
		path: ["confirm"],
	});

type RegisterFormData = z.infer<typeof registerSchema>;

export const useRegister = () => {
	const [isPending, setIsPending] = useState(false);
	const [BEErrors, setBEErrors] = useState<string | null>(null);
	const [resources, setResources] = useState({
		Signup_first_name: "First Name",
		Signup_last_name: "Last Name",
		Signup_email: "Email",
		Signup_email_placeholder: "Enter your email",
		Signup_phone: "Phone Number",
		Signup_phone_placeholder: "Phone number",
		Signup_password: "Password",
		Signup_password_placeholder: "Enter your password",
		Reset_Password_Popup_Confirm_Password: "Confirm Password",
		TermsAndConditions: "I Agree To All",
		agreedConditions: "Terms & Conditions",
		Login_create_account: "Create Account",
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			setIsPending(true);
			setBEErrors(null);
			console.log("Register data:", data);
			// TODO: Implement registration logic
			// await registerUser(data);
		} catch (error: any) {
			setBEErrors(error?.message || "Registration failed. Please try again.");
			console.error("Registration error:", error);
		} finally {
			setIsPending(false);
		}
	});

	return {
		register,
		onSubmit,
		errors,
		isPending,
		BEErrors,
		resources,
	};
};
