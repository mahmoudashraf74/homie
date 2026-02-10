import { useAuthPopup } from "@/providers/AuthPopupProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../UI/formsComponent/Button";
import Input from "../UI/formsComponent/Input";

const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const { setAuthMode } = useAuthPopup();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			console.log("Login data:", data);
			// TODO: Implement login logic
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<div className="w-full">
			<h2 className="text-2xl font-bold mb-4 md:mb-6 text-center">Login</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-3 md:space-y-4">
				<Input
					label="Email"
					type="email"
					placeholder="Enter your email"
					error={errors.email?.message}
					{...register("email")}
				/>

				<Input
					label="Password"
					type="password"
					placeholder="Enter your password"
					error={errors.password?.message}
					{...register("password")}
				/>

				<div className="flex justify-end">
					<button
						type="button"
						className="text-sm text-foreground underline bg-transparent border-none hover:bg-transparent p-0"
						onClick={() => setAuthMode("forgotPassword")}>
						Forgot password?
					</button>
				</div>

				<Button
					type="submit"
					isLoading={isSubmitting}
					variant="primary"
					fullWidth>
					Login
				</Button>

				<div className="text-center mt-4">
					<span className="text-sm">Don't have an account? </span>
					<button
						type="button"
						className="text-sm text-primary underline bg-transparent border-none hover:bg-transparent p-0"
						onClick={() => setAuthMode("register")}>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
