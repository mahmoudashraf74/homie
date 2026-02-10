"use client";

import { useAuthPopup } from "@/providers/AuthPopupProvider";
import React from "react";
import { useForgetPassword } from "@/hooks/auth/useForgetPassword";
import { Input } from "../UI/formsComponent/Input";
import { Button } from "../UI/formsComponent/Button";
import LoadingOverlayPage from "../shared/LoadingOverlayPage";

const ForgetPasswordForm = () => {
	const { setAuthMode } = useAuthPopup();
	const { register, onSubmit, errors, isPending, BEErrors, successMessage } =
		useForgetPassword();

	return (
		<>
			{isPending ? <LoadingOverlayPage /> : null}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-4 md:mb-6 text-center">
					Forgot Password
				</h2>
				<p className="text-sm text-gray-600 mb-4 text-center">
					Enter your email address and we'll send you a link to reset your
					password.
				</p>

				{BEErrors && (
					<p className="my-3 text-sm text-error-text text-center">{BEErrors}</p>
				)}
				{successMessage && (
					<p className="my-3 text-sm text-green-600 text-center">
						{successMessage}
					</p>
				)}

				<form onSubmit={onSubmit} className="space-y-3 md:space-y-4">
					<Input
						label="Email"
						type="email"
						placeholder="Enter your email"
						error={errors.email?.message}
						{...register("email")}
					/>

					<Button
						type="submit"
						isLoading={isPending}
						variant="primary"
						fullWidth>
						Send Reset Link
					</Button>

					<div className="text-center mt-4">
						<button
							type="button"
							className="text-sm text-primary underline bg-transparent border-none hover:bg-transparent p-0 cursor-pointer"
							onClick={() => setAuthMode("login")}>
							Back to Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ForgetPasswordForm;
