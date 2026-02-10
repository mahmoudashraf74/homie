export type AnimationType =
  | "fade"
  | "slideFromRight"
  | "slideFromLeft"
  | "slideFromTop"
  | "slideFromBottom"
  | "slideToBottom"
  | "slideToTop"
  | "scale"
  | "none";

export type PopupPosition = "center" | "top" | "bottom" | "left" | "right";

export interface PopupContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  withBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  animationType?: AnimationType;
  position?: PopupPosition;
  animationDuration?: number;
  containerClassName?: string;
  backdropClassName?: string;
  zIndex?: number;
  ariaLabel?: string;
  preventBodyScroll?: boolean;
  role?: "dialog" | "alertdialog" | "menu";
  allowBackdropClickThrough?: boolean;
}
