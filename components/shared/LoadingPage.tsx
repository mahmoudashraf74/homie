const LoadingPage = () => {
	return (
		<div className="flex items-center justify-center fixed inset-0 bg-white z-[100]">
			<img
				className="w-[200px] lg:w-[400px]"
				src="/assets/images/HOMIE-logo.jpeg"
				alt="Homie page loading"
			/>
		</div>
	);
};

export default LoadingPage;
