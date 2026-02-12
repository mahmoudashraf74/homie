"use client";

import { CustomLinkProps } from "@/interfaces/components/CustomLinkComponentInterface";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CustomLinkComponent = ({
  href,
  children,
  className,
  prefetch = true,
  ref,
  ...props
}: CustomLinkProps) => {
  const router = useRouter();

  const handleMouseEnter = () => {
    if (prefetch) {
      router.prefetch(href);
    }
  };

  const handleFocus = () => {
    if (prefetch) {
      router.prefetch(href);
    }
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      prefetch={prefetch}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLinkComponent;
