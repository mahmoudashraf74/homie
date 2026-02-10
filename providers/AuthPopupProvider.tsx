"use client";

import { AuthPopupContextType } from "@/interfaces/components/auth";
import AuthContainer from "@/components/auth/AuthContainer";
import PopupContainer from "@/components/shared/PopupContainer";
import { createContext, useContext, useState } from "react";
import { XIcon } from "lucide-react";
import { AuthMode } from "@/types/auth";

const AuthPopupContext = createContext<AuthPopupContextType | null>(null);

export function useAuthPopup() {
	const ctx = useContext(AuthPopupContext);
	if (!ctx)
		throw new Error("useAuthPopup must be used within AuthPopupProvider");
	return ctx;
}

export function AuthPopupProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [authMode, setAuthMode] = useState<AuthMode>("login");

	const openAuthPopup = () => setIsOpen(true);
	const closeAuthPopup = () => {
		setIsOpen(false);
		setTimeout(() => setAuthMode("login"), 300);
	};

	return (
		<AuthPopupContext.Provider
			value={{
				openAuthPopup,
				closeAuthPopup,
				isOpen,
				authMode,
				setAuthMode,
			}}>
			{children}
			<PopupContainer
				isOpen={isOpen}
				onClose={closeAuthPopup}
				animationType="scale"
				position="center"
				withBackdrop
				backdropClassName="backdrop-blur-[2px]"
				containerClassName="w-[330px] md:w-[400px] rounded-2xl bg-white p-6 shadow-xl"
				allowBackdropClickThrough={false}>
				<button
					onClick={closeAuthPopup}
					className="text-gray-400 hover:text-gray-600 transition-colors"
					aria-label="Close">
					<XIcon />
				</button>
				<AuthContainer />
			</PopupContainer>
		</AuthPopupContext.Provider>
	);
}
