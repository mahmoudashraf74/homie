"use client";

import { useAuthPopup } from "@/providers/AuthPopupProvider";
import React from "react";
import { useNewPassword } from "@/hooks/auth/useNewPassword";
import { PasswordInput } from "../UI/formsComponent/PasswordInput";
import { Button } from "../UI/formsComponent/Button";
import LoadingOverlayPage from "../shared/LoadingOverlayPage";

const NewPasswordForm = () => {
	const { setAuthMode } = useAuthPopup();
	const { register, onSubmit, errors, isPending, BEErrors, successMessage } =
		useNewPassword();

	return (
		<>
			{isPending ? <LoadingOverlayPage /> : null}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-4 md:mb-6 text-center">
					Reset Password
				</h2>
				<p className="text-sm text-gray-600 mb-4 text-center">
					Enter your new password below.
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
					<PasswordInput
						label="New Password"
						placeholder="Enter new password"
						error={errors.password?.message}
						{...register("password")}
					/>

					<PasswordInput
						label="Confirm Password"
						placeholder="Confirm new password"
						error={errors.confirmPassword?.message}
						{...register("confirmPassword")}
					/>

					<Button
						type="submit"
						isLoading={isPending}
						variant="primary"
						fullWidth>
						Reset Password
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

export default NewPasswordForm;
