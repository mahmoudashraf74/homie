"use client";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Otp from "./Otp";
import NewPasswordForm from "./NewPasswordForm";
import { useAuthPopup } from "@/providers/AuthPopupProvider";

const AuthContainer = () => {
	const { authMode } = useAuthPopup();

	return (
		<div className="relative">
			{authMode === "otp" ? (
				<Otp />
			) : authMode === "forgotPassword" ? (
				<ForgetPasswordForm />
			) : authMode === "newPassword" ? (
				<NewPasswordForm />
			) : (
				<>
					<div className="mb-5 flex items-center justify-center">
						<img
							src="/assets/images/HOMIE-logo.jpeg"
							alt="Brand"
							className="w-[150px] h-11 object-contain"
						/>
					</div>

					{authMode === "login" ? <LoginForm /> : <RegisterForm />}
				</>
			)}
		</div>
	);
};

export default AuthContainer;
