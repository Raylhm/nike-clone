const Button = ({
	label,
	iconURL,
	backgroundColor,
	borderColor,
	textColor,fullWidth
}) => {
	return (
		<button
			className={
				backgroundColor && borderColor && textColor
					? `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full border-${borderColor} bg-${backgroundColor} text-${textColor} ${fullWidth && 'w-full'}`
					: `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ${fullWidth && 'w-full'}`
			}
		>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt='arrow right icon'
					className='ml-2 rounded-full w-5 h-5 '
				/>
			)}
		</button>
	);
};

export default Button;
