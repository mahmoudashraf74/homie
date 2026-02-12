import { AnchorHTMLAttributes, ReactNode, Ref } from "react";

export interface CustomLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  className?: string;
  prefetch?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}
