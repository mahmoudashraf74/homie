"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const forgetPasswordSchema = z.object({
	email: z.string().email("Invalid email address"),
});

type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;

export const useForgetPassword = () => {
	const [isPending, setIsPending] = useState(false);
	const [BEErrors, setBEErrors] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgetPasswordFormData>({
		resolver: zodResolver(forgetPasswordSchema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			setIsPending(true);
			setBEErrors(null);
			setSuccessMessage(null);
			console.log("Forget password data:", data);
			// TODO: Implement forget password logic
			// await requestPasswordReset(data.email);
			setSuccessMessage("Password reset link has been sent to your email.");
		} catch (error: any) {
			setBEErrors(
				error?.message || "Failed to send reset link. Please try again.",
			);
			console.error("Forget password error:", error);
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
		successMessage,
	};
};
