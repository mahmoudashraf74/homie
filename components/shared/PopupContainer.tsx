"use client";

import {
	AnimationType,
	PopupContainerProps,
	PopupPosition,
} from "@/interfaces/components/PopupContainerInterface";
import { motion, AnimatePresence, Variant } from "framer-motion";
import { useEffect, useCallback, useRef } from "react";

const getAnimationVariants = (
	type: AnimationType,
): {
	hidden: Variant;
	visible: Variant;
	exit: Variant;
} => {
	const baseVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	switch (type) {
		case "none":
			return {
				hidden: {},
				visible: {},
				exit: {},
			};

		case "fade":
			return baseVariants;

		case "slideFromRight":
			return {
				hidden: { x: "100%" },
				visible: { x: 0 },
				exit: { x: "100%" },
			};

		case "slideFromLeft":
			return {
				hidden: { x: "-100%" },
				visible: { x: 0 },
				exit: { x: "-100%" },
			};

		case "slideFromTop":
		case "slideToTop":
			return {
				hidden: { y: "-100%" },
				visible: { y: 0 },
				exit: { y: "-100%" },
			};

		case "slideFromBottom":
		case "slideToBottom":
			return {
				hidden: { y: "100%" },
				visible: { y: 0 },
				exit: { y: "100%" },
			};

		case "scale":
			return {
				hidden: { scale: 0.8, opacity: 0 },
				visible: { scale: 1, opacity: 1 },
				exit: { scale: 0.8, opacity: 0 },
			};

		default:
			return baseVariants;
	}
};

const getPositionClasses = (position: PopupPosition): string => {
	switch (position) {
		case "center":
			return "items-center justify-center";
		case "top":
			return "items-start justify-center";
		case "bottom":
			return "items-end justify-center";
		case "left":
			return "items-stretch justify-start";
		case "right":
			return "items-stretch justify-end";
		default:
			return "items-center justify-center";
	}
};

const PopupContainer = ({
	isOpen,
	onClose,
	children,
	withBackdrop = true,
	closeOnBackdropClick = true,
	closeOnEscape = true,
	animationType = "fade",
	position = "center",
	animationDuration = 0.3,
	containerClassName = "",
	backdropClassName = "",
	zIndex = 50,
	ariaLabel,
	preventBodyScroll = true,
	role = "dialog",
	allowBackdropClickThrough = true,
}: PopupContainerProps) => {
	const popupRef = useRef<HTMLDivElement>(null);

	// Handle Escape key press
	const handleEscape = useCallback(
		(event: KeyboardEvent) => {
			if (closeOnEscape && event.key === "Escape" && isOpen) {
				onClose();
			}
		},
		[closeOnEscape, isOpen, onClose],
	);

	// Handle backdrop click
	const handleBackdropClick = useCallback(
		(
			event:
				| React.MouseEvent<HTMLDivElement>
				| React.KeyboardEvent<HTMLDivElement>,
		) => {
			if (
				closeOnBackdropClick &&
				withBackdrop &&
				event.target === event.currentTarget
			) {
				onClose();
			}
		},
		[closeOnBackdropClick, withBackdrop, onClose],
	);

	// Set up keyboard listeners
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			return () => {
				document.removeEventListener("keydown", handleEscape);
			};
		}
	}, [isOpen, handleEscape]);

	// Handle body scroll lock
	useEffect(() => {
		if (isOpen && preventBodyScroll) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;

			return () => {
				document.body.style.overflow = "";
				document.body.style.paddingRight = "";
			};
		}
	}, [isOpen, preventBodyScroll]);

	// Focus management
	useEffect(() => {
		if (isOpen && popupRef.current) {
			const focusableElements = popupRef.current.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);
			const firstElement = focusableElements[0] as HTMLElement;
			if (firstElement) {
				firstElement.focus();
			}
		}
	}, [isOpen]);

	const variants = getAnimationVariants(animationType);
	const positionClasses = getPositionClasses(position);

	// Only render in browser (not during SSR)
	if (globalThis.window === undefined) {
		return null;
	}

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<div
					className={`fixed inset-0 flex ${positionClasses}`}
					style={{ zIndex }}
					role={role}
					aria-modal="true"
					aria-label={ariaLabel}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handleBackdropClick(e);
						}
					}}
					tabIndex={-1}>
					{/* Backdrop */}
					{withBackdrop && (
						<motion.div
							className={`absolute inset-0 bg-black/50 ${backdropClassName}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: animationDuration }}
							aria-hidden="true"
							onClick={
								allowBackdropClickThrough ? handleBackdropClick : undefined
							}
						/>
					)}

					{/* Popup content */}
					<motion.div
						ref={popupRef}
						className={`relative ${containerClassName}`}
						variants={variants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{
							duration: animationDuration,
							ease: "easeInOut",
						}}
						onClick={(e) => e.stopPropagation()}>
						{children}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default PopupContainer;
