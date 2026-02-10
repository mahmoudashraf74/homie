"use client";

import { useRegister } from "@/hooks/auth/useRegister";
import LoadingOverlayPage from "../shared/LoadingOverlayPage";
import { Input } from "../UI/formsComponent/Input";
import { Button } from "../UI/formsComponent/Button";
import { PasswordInput } from "../UI/formsComponent/PasswordInput";
import { useAuthPopup } from "@/providers/AuthPopupProvider";

export default function RegisterForm() {
	const { onSubmit, register, BEErrors, errors, isPending, resources } =
		useRegister();
	const { setAuthMode } = useAuthPopup();

	return (
		<>
			{isPending ? <LoadingOverlayPage /> : null}
			<div>
				{BEErrors && <p className="my-3 text-sm text-error-text">{BEErrors}</p>}
				<h2 className="text-2xl font-bold mb-2 md:mb-6 text-center">
					Register
				</h2>

				<form onSubmit={onSubmit} className="space-y-3 md:space-y-4">
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
						<Input
							label={resources?.Signup_first_name}
							className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none h-[48px]"
							{...register("firstName")}
							placeholder={resources?.Signup_first_name}
							error={errors.firstName?.message}
						/>

						<Input
							label={resources?.Signup_last_name}
							className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none h-12"
							{...register("lastName")}
							placeholder={resources?.Signup_last_name}
							error={errors.lastName?.message}
						/>
					</div>

					<Input
						label={resources?.Signup_email}
						type="email"
						className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none h-[48px]"
						{...register("email")}
						placeholder={resources?.Signup_email_placeholder}
						error={errors.email?.message}
					/>

					<div>
						<label className="mb-1 block text-sm text-gray-600">
							{resources?.Signup_phone}
						</label>
						<div className="flex items-center gap-2">
							<span className="flex items-center rounded-lg border border-gray-200 px-3 text-sm h-12">
								+20
							</span>
							<Input
								placeholder={resources?.Signup_phone_placeholder}
								className="w-full rounded-lg border border-gray-200 px-3 outline-none focus:border-gray-400 h-12"
								{...register("phone")}
							/>
						</div>
						{errors.phone && (
							<p className="mt-1 text-sm text-error-text">
								{errors.phone.message}
							</p>
						)}
					</div>

					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
						<PasswordInput
							label={resources?.Signup_password}
							className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none h-12"
							{...register("password")}
							error={errors.password?.message}
						/>

						<PasswordInput
							label={resources?.Reset_Password_Popup_Confirm_Password}
							className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none h-12"
							{...register("confirm")}
							error={errors.confirm?.message}
						/>
					</div>

					<label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 cursor-pointer"
							{...register("acceptTerms")}
						/>
						{resources?.TermsAndConditions || "I Agree To All"}{" "}
						<span className="underline">
							{resources?.agreedConditions || " Terms & Conditions"}
						</span>
					</label>
					{errors.acceptTerms && (
						<p className="mt-1 text-sm text-error-text">
							{errors.acceptTerms.message as string}
						</p>
					)}

					<Button
						type="submit"
						isLoading={isPending}
						fullWidth
						className="mt-2 rounded-lg font-medium btn-style">
						{resources?.Login_create_account || "Create Account"}
					</Button>

					<div className="text-center mt-4">
						<span className="text-sm">Already have an account? </span>
						<button
							type="button"
							className="text-sm text-primary underline bg-transparent border-none hover:bg-transparent p-0 cursor-pointer"
							onClick={() => setAuthMode("login")}>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
