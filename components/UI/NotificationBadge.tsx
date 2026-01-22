import { twMerge } from "tailwind-merge";

const NotificationBadge = ({
	count,
	className,
}: {
	count: number;
	className?: string;
}) => {
	if (count <= 0) return null;

	return (
		<span
			className={twMerge(
				"absolute -top-[5px] -right-[5px] bg-primary text-white text-[8px] font-medium leading-2.5 rounded-full w-[11px] h-[11px] flex items-center justify-center",
				className,
			)}>
			{count}
		</span>
	);
};

export default NotificationBadge;
