const LoadingOverlayPage = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.6)] z-[99]">
			<img
				className="w-[70px] lg:w-[150px]"
				src="/assets/images/HOMIE-logo.jpeg"
				alt="Homie page loading"
			/>
		</div>
	);
};

export default LoadingOverlayPage;
