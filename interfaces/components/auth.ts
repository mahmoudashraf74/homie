import { AuthMode } from "@/types/auth";

export interface AuthPopupContextType {
	openAuthPopup: () => void;
	closeAuthPopup: () => void;
	isOpen: boolean;
	authMode: AuthMode;
	setAuthMode: (mode: AuthMode) => void;
}
