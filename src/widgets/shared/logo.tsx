import { Flex, type FlexProps, Image, Typography } from "antd"
import { type FC } from "react"

interface LogoProps extends FlexProps {
	collapsed?: boolean
	variant?: "default" | "restaurant" | "fitness"
}

const Logo: FC<LogoProps> = ({ collapsed, variant = "default", ...props }) => {
	return (
		<>
			<Flex
				gap={8}
				align={"center"}
				style={{
					whiteSpace: "nowrap",
					minWidth: 40,
					flexShrink: 0,
				}}
				{...props}
			>
				<Image
					src={
						variant === "restaurant"
							? "/icon-toy.png"
							: variant === "fitness"
								? "/icon-fit.png"
								: "/icon.png"
					}
					fallback={
						variant === "restaurant"
							? "/icon-toy.png"
							: variant === "fitness"
								? "/icon-fit.png"
								: "/public/icon.png"
					}
					width={32}
					height={32}
					style={{
						flexShrink: 0,
						minWidth: 32,
					}}
					preview={false}
				/>
				<Typography.Title
					level={4}
					hidden={collapsed}
				>
					{	variant === "restaurant"
						? "ToyVision"
						: variant === "fitness"
							? "FitVision"
							: "Vision" }
				</Typography.Title>
			</Flex>
		</>
	)
}

export { Logo }
