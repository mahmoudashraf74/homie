"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const newPasswordSchema = z
	.object({
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

export const useNewPassword = () => {
	const [isPending, setIsPending] = useState(false);
	const [BEErrors, setBEErrors] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewPasswordFormData>({
		resolver: zodResolver(newPasswordSchema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			setIsPending(true);
			setBEErrors(null);
			setSuccessMessage(null);
			console.log("New password data:", data);
			// TODO: Implement reset password logic
			// await resetPassword(data.password);
			setSuccessMessage("Password has been reset successfully!");
		} catch (error: any) {
			setBEErrors(
				error?.message || "Failed to reset password. Please try again.",
			);
			console.error("Reset password error:", error);
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
